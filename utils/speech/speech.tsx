import { useState, useEffect, useRef } from 'react';

const useSpeechRecognition = (setAddress: React.Dispatch<React.SetStateAction<string>>, setNumeral: React.Dispatch<React.SetStateAction<string>>) => {
  const [isListening, setIsListening] = useState(false);
  const [inputTarget, setInputTarget] = useState<'address' | 'numeral' | null>(null);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
      const newRecognition = new SpeechRecognitionConstructor();
      newRecognition.lang = 'es-ES';
      newRecognition.continuous = false; // Cambiado a false para no escuchar continuamente
      newRecognition.interimResults = false; // Cambiado a false para obtener solo el resultado final
      recognitionRef.current = newRecognition;
    }

    return () => {
      recognitionRef.current?.abort();
    };
  }, []);

  const handleVoiceInput = (target: 'address' | 'numeral') => {
    if (isListening && inputTarget === target) {
      setIsListening(false);
      setInputTarget(null);
      recognitionRef.current?.stop();
    } else {
      setInputTarget(target);
      setIsListening(true);
      setTranscript(''); // Limpiar el transcripto anterior
      recognitionRef.current?.start();
    }
  };

  useEffect(() => {
    const recognition = recognitionRef.current;

    if (recognition && isListening) {
      const handleResult = (event: SpeechRecognitionEvent) => {
        const currentTranscript = event.results[event.results.length - 1][0].transcript; // Solo obtener el resultado final

        // Solo actualizar si el nuevo resultado es diferente del anterior
        if (currentTranscript !== transcript) {
          setTranscript(currentTranscript);

          // Actualizar el estado del campo correspondiente según el inputTarget
          if (inputTarget === 'address') {
            setAddress(currentTranscript); // Actualizar dirección
          } else if (inputTarget === 'numeral') {
            setNumeral(currentTranscript); // Actualizar numeral
          }
        }
      };

      recognition.addEventListener('result', handleResult as EventListener);

      return () => {
        recognition.removeEventListener('result', handleResult as EventListener);
      };
    }
  }, [isListening, inputTarget, setAddress, setNumeral, transcript]); // Agregar 'transcript' a las dependencias

  return { isListening, inputTarget, transcript, handleVoiceInput };
};

export { useSpeechRecognition };
