import { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface VoiceRecognitionProps {
  setText: (text: string) => void;
}

export const VoiceRecognition: React.FC<VoiceRecognitionProps> = ({ setText }) => {
  const [isClient, setIsClient] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    // Esto asegura que este código solo se ejecuta en el cliente
    setIsClient(true);
  }, []);

  useEffect(() => {
    setText(transcript);
  }, [transcript, setText]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Tu navegador no soporta el reconocimiento de voz.</span>;
  }

  // Si el código aún no está ejecutándose en el cliente, no renderizamos nada
  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="mb-4">
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button
          onClick={() => SpeechRecognition.startListening()}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700"
        >
          Iniciar
        </button>
        <button
          onClick={() => SpeechRecognition.stopListening()}
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-700"
        >
          Detener
        </button>
      </div>

      <button
        onClick={resetTranscript}
        className="mb-4 px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-700"
      >
        Limpiar
      </button>

      <div className="text-gray-700 text-lg mt-2">
        {listening ? 'Escuchando...' : 'Haz clic en Iniciar para empezar a hablar'}
      </div>
      <p className="mt-4 p-2 bg-gray-100 rounded-md shadow-inner">
        {transcript || 'Aquí se mostrará el texto transcrito'}
      </p>
    </div>
  );
};
