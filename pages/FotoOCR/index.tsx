import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import { Layout } from '@/components/Layout';

const FotoOCR = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [text, setText] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Función para manejar el archivo seleccionado
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
  };

  // Función para procesar la imagen con OCR
  const processImage = () => {
    if (selectedFile) {
      setIsProcessing(true);
      Tesseract.recognize(selectedFile, 'eng')
        .then(({ data: { text } }) => {
          setText(text);
          setIsProcessing(false);
        })
        .catch(err => {
          console.error(err);
          setIsProcessing(false);
        });
    }
  };

  return (
    <Layout>
        <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>OCR de Imagen</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {selectedFile && <button onClick={processImage}>Procesar Imagen</button>}
      {isProcessing && <p>Procesando la imagen...</p>}
      {text && (
        <div>
          <h3>Texto Extraído:</h3>
          <p>{text}</p>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default FotoOCR;
