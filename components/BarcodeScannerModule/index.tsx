// /components/BarcodeScannerModule.tsx
import React, { useRef, useEffect } from 'react';
import Quagga from '@ericblade/quagga2';

interface BarcodeScannerModuleProps {
  onDetected: (code: string) => void;
  onError?: (error: any) => void;
  stopScanner: () => void;
}

const BarcodeScannerModule: React.FC<BarcodeScannerModuleProps> = ({ onDetected, onError, stopScanner }) => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: videoRef.current,
          constraints: {
            facingMode: "environment",
            width: { min: 640 },
            height: { min: 480 },
            aspectRatio: { min: 1, max: 2 },
          },
        },
        locator: {
          patchSize: "medium",
          halfSample: true,
        },
        numOfWorkers: navigator.hardwareConcurrency || 4,
        decoder: {
          readers: [
            "code_128_reader", 
            "ean_reader", 
            "ean_8_reader", 
            "code_39_reader", 
            "code_39_vin_reader", 
            "codabar_reader", 
            "upc_reader", 
            "upc_e_reader"
          ]
        },
        locate: true,
      }, (err) => {
        if (err) {
          console.error("Error al iniciar Quagga:", err);
          if (onError) onError(err);
          return;
        }
        console.log("Escáner iniciado correctamente");
        Quagga.start();
      });

      Quagga.onDetected((result) => {
        if (result && result.codeResult) {
          const code = result.codeResult.code;
          if (code) {
            onDetected(code);
            stopScanner();
          }
        }
      });
    }

    return () => {
      Quagga.offDetected();
      Quagga.stop();
    };
  }, [onDetected, onError, stopScanner]);

  return (
    <div className="relative">
      <div ref={videoRef} className="w-full h-64 bg-black rounded-lg overflow-hidden" />
      <div className="absolute inset-0 flex items-center justify-center text-white opacity-50">
        <p>Posiciona el código de barras en el centro</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-4/5 h-1/2 border-2 border-lightser border-dashed rounded-lg"></div>
      </div>
    </div>
  );
};

export default BarcodeScannerModule;
