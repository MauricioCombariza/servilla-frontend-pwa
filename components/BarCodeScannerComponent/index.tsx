// components/BarcodeScannerComponent.tsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Importa dinámicamente el componente de escaneo, desactivando SSR
const BarcodeScannerComponent = dynamic(
  () => import('react-qr-barcode-scanner'),
  { ssr: false }
);

const BarcodeScanner: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold mb-4">Escáner de Códigos de Barras</h1>
      <div className="w-full max-w-md">
        {/* Solo se renderiza en el lado del cliente */}
        <BarcodeScannerComponent
          onUpdate={(err, result) => {
            if (result) setData(result.getText());
            if (err) console.error(err);
          }}
        />
      </div>
      {data && <p className="mt-4">Código escaneado: {data}</p>}
    </div>
  );
};

export {BarcodeScanner};
