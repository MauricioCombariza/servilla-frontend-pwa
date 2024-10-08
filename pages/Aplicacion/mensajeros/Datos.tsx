import React, { ChangeEvent, FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { API_SER } from '@/pages/api';
import { buscarSerial } from '@/utils/funciones/funcionesManejoTablas';
import { Layout } from '@/components/Layout';
import { BrowserMultiFormatReader } from '@zxing/library';

interface DatosProps {
  setGuideNumber: (guideNumber: string) => void;
  guideNumber: string;
  handleCancel: () => void;
  paymentMethod: string;
  setPaymentMethod: (paymentMethod: string) => void;
  send: (action: { type: string }) => void;
  handleInitial: () => void;
}

const Datos: FC<DatosProps> = ({
  paymentMethod,
  setPaymentMethod,
  send,
  guideNumber,
  handleCancel,
  handleInitial,
  setGuideNumber,
}) => {
  const [scanning, setScanning] = useState(false);
  const [scanError, setScanError] = useState<string | null>(null); // Estado para manejar errores
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePaymentMethodChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handleGuideNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGuideNumber(event.target.value);
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const response = await buscarSerial(guideNumber, 'orders');

      if (!response) {
        alert('El serial no existe');
        throw new Error(`Serial not found: ${guideNumber}`);
      }

      const moneyResponse = await buscarSerial(guideNumber, 'estado_dinero');
      if (moneyResponse) {
        return alert('El serial ya fue ingresado como cancelado');
      }

      // Envía la acción según el método de pago seleccionado
      switch (paymentMethod) {
        case 'Nequi':
          send({ type: 'NEQUI' });
          break;
        case 'Efectivo':
          send({ type: 'EFECTIVO' });
          break;
        case 'Efectivo_Nequi':
          send({ type: 'NEQUI_EFECTIVO' });
          break;
        case 'Otra':
          send({ type: 'OTRA' });
          break;
        case 'Sin_Cobro':
          send({ type: 'SIN_COBRO' });
          break;
        case 'Devolucion':
          send({ type: 'DEVOLUCION' });
          break;
        default:
          alert('Método de pago no reconocido');
      }
    } catch (error) {
      console.error('Error en la operación de búsqueda: ', error);
    }
  };

  useEffect(() => {
    if (scanning) {
      const codeReader = new BrowserMultiFormatReader();

      const startScanning = async () => {
        try {
          await codeReader.decodeFromVideoDevice(null, videoRef.current!, (result) => {
            if (result) {
              setGuideNumber(result.getText());
              alert(`Código QR escaneado: ${result.getText()}`);
              setScanning(false);
              setScanError(null); // Limpiar el error si el escaneo es exitoso
            }
          });
        } catch (error) {
          setScanError('Error al escanear el código de barras. Inténtalo nuevamente.');
          console.error('Error en el escaneo de código de barras:', error);
        }
      };

      startScanning();

      return () => {
        codeReader.reset();
      };
    }
  }, [scanning, setGuideNumber]);

  const startBarcodeScanner = () => {
    setScanning(true);
  };

  return (
    <Layout>
      <div className="w-full max-w-md mx-auto mt-6">
        <h1 className="bg-blue-500 text-2xl text-white text-center py-2 mb-4 mx-2">
          Ingresar datos entrega
        </h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guideNumber">
              Número de guía:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="guideNumber"
              value={guideNumber}
              onChange={handleGuideNumberChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentMethod">
              Método de pago:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="paymentMethod"
              value={paymentMethod} // Asegúrate de que el valor refleje el estado
              onChange={handlePaymentMethodChange}
            >
              <option value="Sin_Cobro">Sin Cobro</option>
              <option value="Nequi">Nequi</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Efectivo_Nequi">Efectivo-Nequi</option>
              <option value="Otra">Otra</option>
              <option value="Devolucion">Devolución</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Aceptar
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 mt-4 w-full rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={startBarcodeScanner}
          >
            Escanear Código de Barras
          </button>

          <button
            className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 mt-10 w-full rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleInitial}
            onTouchEnd={handleInitial}
          >
            Ir a Inicio
          </button>
        </form>

        {/* Contenedor para el escaneo del código de barras */}
        {scanning && (
          <div>
            <video ref={videoRef} style={{ width: '100%', height: '300px' }} autoPlay muted />
            {scanError && <p className="text-red-500 text-center">{scanError}</p>}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Datos;
