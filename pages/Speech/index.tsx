'use client';
import { Layout } from '@/components/Layout';
import { useState, useEffect, useRef } from 'react';
import Quagga from '@ericblade/quagga2';

export default function DataCapture() {
  const [serial, setSerial] = useState(''); // Para simular la captura del serial
  const [address, setAddress] = useState(''); // Para capturar la dirección por voz
  const [numeral, setNumeral] = useState(''); // Para capturar el numeral por voz
  const [isListening, setIsListening] = useState(false);
  const [inputTarget, setInputTarget] = useState<'address' | 'numeral' | null>(null); // Para saber qué input se está completando
  const videoRef = useRef<HTMLVideoElement | null>(null); // Ref para el video de Quagga
  const [isCameraActive, setIsCameraActive] = useState(false); // Estado para controlar la cámara

  useEffect(() => {
    let recognition: SpeechRecognition | null = null;
    let previousTranscript = '';

    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognitionConstructor();   

      recognition.lang = 'es-ES';
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const interimTranscript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');

        // Comparar con la transcripción anterior y actualizar solo si hay un cambio significativo
        if (interimTranscript !== previousTranscript) {
          previousTranscript = interimTranscript;

          if (inputTarget === 'address') {
            setAddress(interimTranscript);
          } else if (inputTarget === 'numeral') {
            setNumeral(interimTranscript);
            console.log('Nuevo numeral:', interimTranscript);
          }
        }
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Error en el reconocimiento de voz:', event.error);
        setIsListening(false);
      };
  
        if (isListening) {
          recognition.start();
        } else {
          recognition.abort();
        }
  
        return () => {
          if (recognition) {
            recognition.abort();
          }
        };
      }
    }, [isListening, inputTarget]);
  
  // Configurar Quagga para la lectura del código de barras
  const startBarcodeScanner = async () => {
    if (!isCameraActive && videoRef.current) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
  
        Quagga.init({
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: videoRef.current,
            constraints: {
              facingMode: 'environment',
              width: { ideal: 1280 },
              height: { ideal: 720 },
            },
          },
            decoder: {
                readers: ['code_128_reader', 'ean_reader', 'code_39_reader'], // Agregar más lectores si es necesario
                // debug: true // Activar el modo de depuración para ver más detalles
            },
            locate: true,
        }, (err) => {
          if (err) {
            console.error('Error al inicializar Quagga:', err);
            return;
          }
          console.log('Quagga listo para escanear...');
          Quagga.start();
  
          Quagga.onDetected((data) => {
            console.log('Código de barras detectado:', data);
            const detectedCode = data.codeResult.code;
  
            if (detectedCode) {
              setSerial(detectedCode);
            } else {
              console.error('No se pudo obtener el código de barras.');
            }
  
            stopBarcodeScanner(); // Detener el escáner después de detectar un código
          });
        });
      } catch (error) {
        console.error('Error al obtener acceso a la cámara:', error);
        // Manejar errores de permiso denegado u otros errores (por ejemplo, mostrar una alerta)
      }
    } else {
      // Si la cámara ya está activa, la detiene
      stopBarcodeScanner();
    }
  };
  
  const stopBarcodeScanner = () => {
    Quagga.stop();
    if (videoRef.current) {
      // Detener el video y liberar la cámara
      const stream = videoRef.current.srcObject as MediaStream;
      if (stream) {
        stream.getTracks().forEach(track => track.stop()); // Detener todos los tracks de video
      }
      videoRef.current.srcObject = null; // Limpiar la referencia del objeto de video
    }
    setIsCameraActive(false); // Desactiva la cámara
  };
  
  const handleVoiceInput = (target: 'address' | 'numeral') => {
    if (isListening && inputTarget === target) {
      setIsListening(false); // Detiene la captura
      setInputTarget(null);
    } else {
      setInputTarget(target); // Indica cuál input estamos llenando
      setIsListening(true); // Inicia la captura
    }
  };

  const handleSubmit = async () => {
    // Simulación de envío a Google Sheets
    console.log('Enviando datos:', { serial, address, numeral });
    alert('Datos enviados con éxito (simulado)');
    setSerial(''); // Resetea el serial
    setAddress(''); // Resetea la dirección
    setNumeral(''); // Resetea el numeral
    stopBarcodeScanner(); // Detener el escáner al enviar los datos
  };

  return (
    <Layout>
      <div className="min-h-screen bg-whiteser p-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-darkser mb-2">Captura de Datos</h2>
            <div className="space-y-4">
              <div>
                <button onClick={startBarcodeScanner} className="w-full bg-ser hover:bg-darkser text-white p-2 rounded">
                  {isCameraActive ? 'Detener Escaneo' : 'Escanear Serial'}
                </button>
                {/* Campo Serial */}
                <input
                  type="text"
                  value={serial}
                  readOnly // Solo lectura
                  className="w-full p-2 border rounded bg-gray-100"
                  placeholder="Serial"
                />
                {/* <video ref={videoRef} style={{ width: '100%', height: 'auto' }} autoPlay></video> */}
                <video ref={videoRef} style={{ width: '100%', height: 'auto' }} autoPlay muted /> 
              </div>
              <div>
                {/* Campo Dirección */}
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Dirección"
                  className="w-full p-2 border rounded" 
                />
                <button
                  onClick={() => handleVoiceInput('address')}
                  className="w-full bg-lightser hover:bg-ser text-darkser p-2 rounded mt-2"
                >
                  {isListening && inputTarget === 'address' ? 'Detener Captura' : 'Capturar Dirección por Voz'}
                </button>
              </div>
              <div>
                {/* Campo Numeral */}
                <input
                  type="text"
                  value={numeral}
                  onChange={(e) => setNumeral(e.target.value)}
                  placeholder="Numeral"
                  className="w-full p-2 border rounded mt-2" 
                />
                <button
                  onClick={() => handleVoiceInput('numeral')}
                  className="w-full bg-lightser hover:bg-darkser text-white p-2 rounded mt-2"
                >
                  {isListening && inputTarget === 'numeral' ? 'Detener Captura' : 'Capturar Numeral por Voz'}
                </button>
              </div>
              <button onClick={handleSubmit} className="w-full bg-darkser hover:bg-ser text-white p-2 rounded">
                Enviar Datos
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
