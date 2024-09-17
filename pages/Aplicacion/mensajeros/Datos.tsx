import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { API_SER } from '@/pages/api';
import { buscarSerial } from '@/utils/funciones/funcionesManejoTablas';
import { Layout } from '@/components/Layout';
import Quagga from 'quagga'; // Importa Quagga para el escaneo

interface DatosProps {
  setGuideNumber: (guideNumber: string) => void;
  guideNumber: string;
  handleCancel: () => void;
  paymentMethod: string;
  setPaymentMethod: (paymentMethod: string) => void;
  send: (action: { type: string }) => void;
  handleInitial: () => void;
}
interface QuaggaResult {
  codeResult: {
    code: string;
  };
}

const Datos: FC<DatosProps> = ({ paymentMethod, setPaymentMethod, send, guideNumber, handleCancel, handleInitial, setGuideNumber }) => {
  const [scanning, setScanning] = useState(false); // Estado para manejar el escaneo

  const handlePaymentMethodChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handleGuideNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGuideNumber(event.target.value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const response = await buscarSerial(guideNumber, 'orders');
      
      if (!response) {
        alert('El serial no existe');
        throw new Error(`HTTP error! status: ${response}`);
      } else {
        const moneyResponse = await buscarSerial(guideNumber, 'estado_dinero');
        if (moneyResponse) {
          return alert('El serial ya fue ingresado como cancelado');
        }

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
            console.error('Método de pago no reconocido');
        }
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation: ', error);
    }
  };

  const startBarcodeScanner = () => {
    setScanning(true);

    Quagga.init({
      inputStream: {
        type: 'LiveStream',
        constraints: {
          facingMode: 'environment',
        },
      },
      decoder: {
        readers: ['code_128_reader'], // Puedes cambiar el tipo de código de barras según lo que necesites
      },
    }, (err: Error | null) => {
      if (err) {
        console.error(err);
        setScanning(false);
        return;
      }
      Quagga.start();
    });

    Quagga.onDetected((result: QuaggaResult) => {
      const code = result.codeResult.code;
      setGuideNumber(code); // Asignar el código escaneado
      alert(`Código de barras escaneado: ${code}`);
      Quagga.stop();
      setScanning(false);
    });
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
              onChange={handlePaymentMethodChange}
            >
              <option value="Nequi">Nequi</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Efectivo_Nequi">Efectivo-Nequi</option>
              <option value="Sin_Cobro">Sin Cobro</option>
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
      </div>
    </Layout>
  );
};

export default Datos;
