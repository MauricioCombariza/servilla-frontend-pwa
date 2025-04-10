// /pages/index.tsx
import { useState, FormEvent, ChangeEvent, useEffect, useRef } from 'react';
import { supabase } from '@/supabase';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Layout } from '@/components/Layout';
import { startScanner } from '@/components/BarCodeScannerComponent/scan';

interface PaqueteriaResult {
  sector: string;
  ruta: string;
  direccion_origen: string;
}

const Home: NextPage = () => {
  const [serial, setSerial] = useState<string>('');
  const [result, setResult] = useState<PaqueteriaResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [scanning, setScanning] = useState<boolean>(false);
  const [cameraPermission, setCameraPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt');

  // Referencia para el video del escáner
  const scannerVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    checkCameraPermission();
  }, []);

  const checkCameraPermission = async () => {
    try {
      if (navigator.permissions && navigator.permissions.query) {
        const result = await navigator.permissions.query({ name: 'camera' as PermissionName });
        setCameraPermission(result.state as 'granted' | 'denied' | 'prompt');
        result.addEventListener('change', () => {
          setCameraPermission(result.state as 'granted' | 'denied' | 'prompt');
        });
      }
    } catch (err) {
      console.error("Error al comprobar permisos de cámara:", err);
    }
  };

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!serial.trim()) {
      setError('Por favor, ingresa un código de barras');
      return;
    }
    await searchPackage();
  };

  const searchPackage = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from('paquetes')
        .select('*')
        .eq('serial_number', serial)
        .single();

      if (error) throw error;
      if (data) {
        setResult(data as PaqueteriaResult);
      } else {
        setResult(null);
        setError('No se encontró ningún paquete con ese código');
      }
    } catch (err: any) {
      console.error('Error al buscar:', err);
      setError('Error al realizar la búsqueda. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSerial(e.target.value);
  };

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      setCameraPermission('granted');
      stream.getTracks().forEach(track => track.stop());
      setScanning(true);
    } catch (err) {
      console.error("Error al solicitar permisos de cámara:", err);
      setCameraPermission('denied');
      setError("No se pudo acceder a la cámara. Por favor, verifica los permisos en tu navegador.");
    }
  };

  const handleDetected = (code: string) => {
    console.log("Código detectado:", code);
    setSerial(code);
    setScanning(false);
    setTimeout(() => {
      searchPackage();
    }, 500);
  };

  const handleScanButtonClick = () => {
    if (cameraPermission === 'granted') {
      setScanning(true);
    } else {
      requestCameraPermission();
    }
  };

  // Cuando scanning es true, se llama a startScanner para iniciar el escaneo en el video.
  useEffect(() => {
    let stopScannerFn: () => void;
    if (scanning && scannerVideoRef.current) {
      stopScannerFn = startScanner({
        videoElement: scannerVideoRef.current,
        onDetected: handleDetected,
        onError: (err) => {
          console.error("Error en el escáner:", err);
          setError("Error en el escaneo. Inténtalo nuevamente.");
        },
      });
    }
    return () => {
      if (stopScannerFn) stopScannerFn();
    };
  }, [scanning]);

  return (
    <Layout>
      <div className="min-h-screen bg-ser flex flex-col">
        <Head>
          <title>Sistema de Búsqueda Paquetería</title>
          <meta name="description" content="Sistema de búsqueda para paquetería" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="bg-darkser py-3 shadow-md">
          <h1 className="text-xl font-bold text-whiteser text-center px-4">
            Sistema de Búsqueda de Paquetes
          </h1>
        </header>

        <main className="flex-grow flex items-start justify-center px-4 py-6">
          <div className="w-full max-w-md bg-whiteser rounded-xl shadow-xl overflow-hidden">
            <div className="p-5">
              {scanning ? (
                <div className="mb-5">
                  {/* Contenedor para el video del escáner */}
                  <div className="relative">
                    <video
                      ref={scannerVideoRef}
                      className="w-full h-64 bg-black rounded-lg overflow-hidden"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white opacity-50">
                      <p>Posiciona el código de barras en el centro</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-4/5 h-1/2 border-2 border-lightser border-dashed rounded-lg"></div>
                    </div>
                  </div>
                  <button
                    onClick={() => setScanning(false)}
                    className="w-full bg-red-600 hover:bg-red-700 text-whiteser font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 text-lg shadow-md mt-4"
                  >
                    Cancelar Escaneo
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSearch} className="mb-5">
                  <div className="mb-4">
                    <label htmlFor="serial" className="block text-sm font-medium text-darkser mb-2">
                      Código de Barras
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        id="serial"
                        value={serial}
                        onChange={handleInputChange}
                        placeholder="Ingresa el código"
                        className="flex-1 px-4 py-3 text-lg border border-lightser rounded-lg focus:outline-none focus:ring-2 focus:ring-darkser"
                        autoFocus
                        autoComplete="off"
                      />
                      <button
                        type="button"
                        onClick={handleScanButtonClick}
                        className="bg-ser hover:bg-darkser text-whiteser font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightser shadow-md flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-darkser hover:bg-ser text-whiteser font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightser text-lg shadow-md"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Buscando...
                      </span>
                    ) : 'Buscar Paquete'}
                  </button>
                </form>
              )}

              {cameraPermission === 'denied' && !scanning && (
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded mb-4">
                  <p className="font-medium">
                    Acceso a la cámara denegado. Por favor, activa los permisos en la configuración de tu navegador para usar el escáner.
                  </p>
                  <button 
                    onClick={requestCameraPermission}
                    className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-md text-sm"
                  >
                    Intentar de nuevo
                  </button>
                </div>
              )}

              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-4">
                  <p className="font-medium">{error}</p>
                </div>
              )}

              {result && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                  <h2 className="text-lg font-bold mb-3 text-green-800">Información del Paquete</h2>
                  <div className="space-y-3">
                    <div className="bg-lightser bg-opacity-50 p-4 rounded-lg">
                      <p className="text-sm text-darkser mb-1">Código de Sector:</p>
                      <p className="font-bold text-xl">{result.sector}</p>
                    </div>
                    <div className="bg-lightser bg-opacity-50 p-4 rounded-lg">
                      <p className="text-sm text-darkser mb-1">Ruta:</p>
                      <p className="font-bold text-xl">{result.ruta}</p>
                    </div>
                    <div className="bg-lightser bg-opacity-50 p-4 rounded-lg">
                      <p className="text-sm text-darkser mb-1">Dirección:</p>
                      <p className="font-bold text-xl">{result.direccion_origen}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
        
        <footer className="bg-darkser py-3 mt-auto">
          <p className="text-center text-whiteser text-sm">
            © {new Date().getFullYear()} Sistema de Búsqueda de Paquetería
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default Home;
