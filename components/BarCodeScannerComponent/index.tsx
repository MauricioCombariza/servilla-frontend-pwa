import React, { ChangeEvent, FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { Layout } from '@/components/Layout';
import { BrowserMultiFormatReader } from '@zxing/library';


const BarCodeScanner: FC = () => {
  const [scanning, setScanning] = useState(false);
  const [scanError, setScanError] = useState<string | null>(null); // Estado para manejar errores
  const videoRef = useRef<HTMLVideoElement>(null);
  const [guideNumber, setGuideNumber] = useState('');
  
  const handleGuideNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGuideNumber(event.target.value);
  };

  
  useEffect(() => {
    if (scanning) {
      const codeReader = new BrowserMultiFormatReader();

      const startScanning = async () => {
        try {
          await codeReader.decodeFromVideoDevice(null, videoRef.current!, (result) => {
            if (result) {
              setGuideNumber(result.getText());
              alert(`Código QR escaneado: ${result.getText()}`);
              setScanning(false);
              setScanError(null); // Limpiar el error si el escaneo es exitoso
            }
          });
        } catch (error) {
          setScanError('Error al escanear el código de barras. Inténtalo nuevamente.');
          console.error('Error en el escaneo de código de barras:', error);
        }
      };

      startScanning();

      return () => {
        codeReader.reset();
      };
    }
  }, [scanning, setGuideNumber]);

  const startBarcodeScanner = () => {
    setScanning(true);
  };

  return (
    <Layout>
      <div className="w-full max-w-md mx-auto mt-6">
        <h1 className="bg-blue-500 text-2xl text-white text-center py-2 mb-4 mx-2">
          Ingresar datos entrega
        </h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guideNumber">
              Número de guía:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="guideNumber"
              value={guideNumber}
              onChange={handleGuideNumberChange}
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 mt-4 w-full rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={startBarcodeScanner}
          >
            Escanear Código de Barras
          </button>
        </form>

        {/* Contenedor para el escaneo del código de barras */}
        {scanning && (
          <div>
            <video ref={videoRef} style={{ width: '100%', height: '300px' }} autoPlay muted />
            {scanError && <p className="text-red-500 text-center">{scanError}</p>}
          </div>
        )}
      </div>
    </Layout>
  );
};

export {BarCodeScanner};
