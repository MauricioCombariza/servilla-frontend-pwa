import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import { Layout } from '@/components/Layout';
import * as XLSX from 'xlsx';

const FotoOCR = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [texts, setTexts] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Función para manejar los archivos seleccionados
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    setSelectedFiles(files);
  };

  // Función para procesar las imágenes con OCR
  const processImages = () => {
    if (selectedFiles.length > 0) {
      setIsProcessing(true);
      const promises = selectedFiles.map(file =>
        Tesseract.recognize(file, 'eng')
          .then(({ data: { text } }) => text)
          .catch(err => {
            console.error(err);
            return '';
          })
      );

      // Esperar a que todas las promesas de procesamiento de imágenes se completen
      Promise.all(promises)
        .then(results => {
          setTexts(results);
          setIsProcessing(false);
        })
        .catch(() => setIsProcessing(false));
    }
  };

  // Función para exportar el texto a Excel
  const exportToExcel = () => {
    if (texts.length === 0) return;

    // Crear los datos donde cada texto (de cada imagen) es una fila
    const data = texts.map(text =>
      text.split('\n').map(line => line.trim()).filter(line => line !== '')
    );

    // Crear un nuevo libro y una hoja de cálculo
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data); // Crear una hoja a partir de un array de arrays

    // Añadir la hoja de cálculo al libro
    XLSX.utils.book_append_sheet(wb, ws, 'OCR_Data');

    // Generar el archivo Excel
    XLSX.writeFile(wb, 'ocr_text.xlsx');
  };

  return (
    <Layout>
      <div className="flex flex-col items-center bg-lightser min-h-screen py-10 px-4 md:px-10">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-darkser text-center mb-8">OCR de Imágenes</h1>
          
          <div className="mb-6">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              multiple
              className="w-full p-2 border border-ser rounded text-black"
            />
          </div>

          {selectedFiles.length > 0 && (
            <button
              onClick={processImages}
              className="w-full bg-ser text-white py-3 rounded-md font-semibold hover:bg-lightser transition duration-300"
            >
              Procesar Imágenes
            </button>
          )}

          {isProcessing && <p className="text-center text-darkser mt-4">Procesando las imágenes...</p>}

          {texts.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-bold text-darkser mb-4">Texto Extraído de las Imágenes:</h3>
              {texts.map((text, index) => (
                <div key={index} className="mb-4 p-4 bg-whiteser rounded-md">
                  <h4 className="text-lg font-semibold text-black">Imagen {index + 1}:</h4>
                  <p className="text-black whitespace-pre-line">{text}</p>
                </div>
              ))}
              <button
                onClick={exportToExcel}
                className="w-full bg-ser text-white py-3 rounded-md font-semibold hover:bg-lightser transition duration-300 mt-6"
              >
                Exportar a Excel
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FotoOCR;

