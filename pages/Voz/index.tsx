import { useState } from 'react';
import Head from 'next/head';
import { VoiceRecognition } from '@/components/SpeechRecognition';

const Home: React.FC = () => {
  const [text, setText] = useState<string>('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Reconocimiento de Voz</title>
        <meta name="description" content="Convierte voz en texto usando Speech Recognition" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-8">Reconocimiento de Voz</h1>

        <VoiceRecognition setText={setText} />

        <div className="mt-8 p-4 bg-gray-200 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-semibold">Texto Transcrito:</h2>
          <p className="mt-4 text-lg text-gray-700">{text || 'El texto aparecerá aquí'}</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
