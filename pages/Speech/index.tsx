import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { useSpeechRecognition } from '@/utils/speech/speech';
import { BarCodeScanner } from '@/components/BarCodeScannerComponent';
import { useBarcodeScanner } from '@/utils/speech/scanner';

export default function DataCapture() {
  const [serial, setSerial] = useState('');
  const [address, setAddress] = useState('');
  const [numeral, setNumeral] = useState('');

  const { isListening, inputTarget, handleVoiceInput } = useSpeechRecognition(setAddress, setNumeral);
  const { videoRef, isScanning, startScan, stopScan } = useBarcodeScanner();

  const handleSubmit = async () => {
    // ... Simulación de envío a Google Sheets ...
    setSerial('');
    setAddress('');
    setNumeral('');
    stopScan();
  };

  return (
    <Layout>
      <div className="min-h-screen bg-whiteser p-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-darkser mb-2">Captura de Datos</h2>
            <BarCodeScanner />
            <div className="mt-4">
              <div>
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
