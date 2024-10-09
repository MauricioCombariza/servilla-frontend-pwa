// pages/index.tsx

import React from 'react';
import { BarCodeScanner } from '@/components/BarCodeScannerComponent';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <BarCodeScanner />
    </div>
  );
};

export default Home;
