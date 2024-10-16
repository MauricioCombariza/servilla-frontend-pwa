import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { useSpeechRecognition } from '@/utils/speech/speech';
import { BarCodeScanner } from '@/components/BarCodeScannerComponent';
import { useBarcodeScanner } from '@/utils/speech/scanner';
import { VoiceRecognition } from '@/components/SpeechRecognition';


export default function DataCapture() {
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [serial, setSerial] = useState('');
  const [address, setAddress] = useState('');
  const [numeral, setNumeral] = useState('');

  const { isListening, inputTarget, handleVoiceInput } = useSpeechRecognition(setAddress, setNumeral);
  const { videoRef, isScanning, startScan, stopScan } = useBarcodeScanner();

  const handleAddressChange = (address: string) => {
    console.log("Dirección ingresada:", address);
  };
  const handleNumeralChange = (numeral: string) => {
    console.log("Número ingresado:", numeral);
  };

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
            <VoiceRecognition
            inputType="direccion"
            setAddress={setAddress}
            isActive={activeInput === 'direccion'}
            onActivate={() => setActiveInput('direccion')}
          />
            
            <VoiceRecognition
              inputType="numeral"
              setNumeral={setNumeral}
              isActive={activeInput === 'numeral'}
              onActivate={() => setActiveInput('numeral')}
            />
              <button onClick={handleSubmit} className="w-full bg-darkser hover:bg-ser text-white p-2 rounded">
                Enviar Datos
              </button>
            </div>
          </div>
        </div>
      
    </Layout>
  );
}
