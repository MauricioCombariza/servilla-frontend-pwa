import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Mic, StopCircle, Trash2 } from 'lucide-react';

interface VoiceRecognitionProps {
  setAddress?: (text: string) => void;  // Setter para dirección
  setNumeral?: (text: string) => void;  // Setter para numeral
  setOther?: (text: string) => void;    // Setter para otro tipo de texto
  inputType: 'direccion' | 'numeral' | 'otra';  // Define el tipo de input
  isActive: boolean; // Indica si este componente está activo
  onActivate: () => void; // Callback para activar este componente
}

export const VoiceRecognition: React.FC<VoiceRecognitionProps> = ({ setAddress, setNumeral, setOther, inputType, isActive, onActivate }) => {
  const [manualInput, setManualInput] = useState('');
  const [isClient, setIsClient] = useState(false); // Verifica si está en cliente
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  // Hacer que el componente sólo se renderice en el cliente
  useEffect(() => {
    setIsClient(true); // Solo cuando esté en cliente
  }, []);

  // Determina el placeholder en función del tipo de input
  const getPlaceholder = () => {
    switch (inputType) {
      case 'direccion':
        return 'Escribe o dicta una dirección...';
      case 'numeral':
        return 'Escribe o dicta un número...';
      case 'otra':
      default:
        return 'Empieza a hablar, escribir o edita el texto...';
    }
  };

  // Llama al setter adecuado en función del tipo de input
  const handleChange = (value: string) => {
    setManualInput(value);
    switch (inputType) {
      case 'direccion':
        setAddress?.(value);  // Si setAddress existe, lo llama
        break;
      case 'numeral':
        setNumeral?.(value);  // Si setNumeral existe, lo llama
        break;
      case 'otra':
      default:
        setOther?.(value);  // Si setOther existe, lo llama
        break;
    }
  };

  useEffect(() => {
    if (isActive) {
      handleChange(transcript); // Actualiza el input solo si este componente está activo
    }
  }, [transcript, isActive]);

  const handleStartListening = () => {
    onActivate(); // Activa este componente antes de iniciar la escucha
    SpeechRecognition.startListening();
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Tu navegador no soporta el reconocimiento de voz.</span>;
  }

  // Evita la renderización hasta que esté en el cliente
  if (!isClient) {
    return null; // No renderiza nada en el servidor
  }

  const buttonColorClass = (color: 'ser' | 'darkser' | 'whiteser' | 'lightser') => {
    return {
      ser: 'bg-ser hover:bg-ser/90',
      darkser: 'bg-darkser hover:bg-darkser/90',
      whiteser: 'bg-whiteser hover:bg-whiteser/90 text-darkser',
      lightser: 'bg-lightser hover:bg-lightser/90'
    }[color];
  };

  return (
    <div className="flex items-center space-x-2 p-2">
      <input
        type="text"
        value={manualInput}
        onChange={(e) => handleChange(e.target.value)}  // Llama al manejador general
        placeholder={getPlaceholder()}  // Placeholder dinámico basado en el tipo de input
        className="px-4 py-2 bg-whiteser text-darkser rounded-md shadow-inner w-full"
      />
      <button
        onClick={handleStartListening} // Usa la función modificada
        className={`p-2 rounded-md shadow-md ${buttonColorClass('ser')}`}
      >
        <Mic className="h-5 w-5" />
        <span className="sr-only">Iniciar</span>
      </button>
      <button
        onClick={() => SpeechRecognition.stopListening()}
        className={`p-2 rounded-md shadow-md ${buttonColorClass('darkser')}`}
      >
        <StopCircle className="h-5 w-5" />
        <span className="sr-only">Detener</span>
      </button>
      <button
        onClick={resetTranscript}
        className={`p-2 rounded-md shadow-md ${buttonColorClass('lightser')}`}
      >
        <Trash2 className="h-5 w-5" />
        <span className="sr-only">Limpiar</span>
      </button>
    </div>
  );
};
