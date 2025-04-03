import React, { useState } from 'react';
import CapturePhoto from '../CapturePhoto';
import { supabase } from '@/supabase';

interface FotoProps {
    handleCancel: () => void;
    handleFinalizar: () => void;
    handleInitial: () => void;
    serial: string;
  }
  
  const FotoModule: React.FC<FotoProps> = ({ handleCancel, handleInitial, serial }) => {
      const [photo, setPhoto] = useState<File | null>(null); // Almacena la foto seleccionada
    
      const handleCapture = (capturedPhoto: File) => {
        setPhoto(capturedPhoto); // Almacena la foto en el estado
      };
    
      const handleFinalizar = async () => {
        if (!photo) {
          alert('Por favor, selecciona una foto antes de finalizar.');
          return;
        }
    
        try {
          // Subir la foto a Supabase
          const { data, error } = await supabase.storage
            .from('photos') // Nombre del bucket en Supabase
            .upload(`images/${serial}.jpg`, photo, {
              cacheControl: '3600',
              upsert: true,
            });
    
          if (error) {
            console.error('Error subiendo la foto:', error.message);
            alert('Error subiendo la foto. Intenta nuevamente.');
            return;
          }
    
          console.log('Foto subida con éxito:', data);
    
          // Puedes realizar más acciones aquí si es necesario
          alert('Foto guardada con éxito en Supabase.');
        } catch (error) {
          console.error('Error inesperado:', error);
          alert('Error inesperado al guardar la foto.');
        }
      };
    
    
        return(
        <div className="w-full max-w-md mx-auto">
          <CapturePhoto onCapture={handleCapture}/>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleCancel}>
                      CANCELAR
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleFinalizar}>
                      FINALIZAR
          </button>
          <button
                  className="bg-green-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 transition-colors duration-200"
                  type="button"
                  onClick={handleInitial}
                  onTouchEnd={handleInitial}
                >
                  Ir a Inicio
          </button>
        </div>
    );
}

export default FotoModule;

