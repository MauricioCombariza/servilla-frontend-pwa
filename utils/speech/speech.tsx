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
      newRecognition.continuous = true;
      newRecognition.interimResults = true;
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
        const interimTranscript = Array.from(event.results)
          .map(result => result.item(0).transcript)
          .join('');
        
        setTranscript(interimTranscript);

        // Actualizar el estado del campo correspondiente según el inputTarget
        if (inputTarget === 'address') {
          setAddress(interimTranscript); // Actualizar dirección
        } else if (inputTarget === 'numeral') {
          setNumeral(interimTranscript); // Actualizar numeral
        }
      };

      recognition.addEventListener('result', handleResult as EventListener);

      return () => {
        recognition.removeEventListener('result', handleResult as EventListener);
      };
    }
  }, [isListening, inputTarget, setAddress, setNumeral]);

  return { isListening, inputTarget, transcript, handleVoiceInput };
};

export { useSpeechRecognition };
