// pages/orders.tsx
import { useState, useEffect } from 'react';
import { supabase } from '@/supabase';

const NuevaOrden = ({handleInitial}: {handleInitial: () => void}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    codigo_postal: '',
    barrio: '',
    telefono: '',
    ciudad: '',
    cantidad: '',
    producto: '',
    forma_de_pago: '',
    recaudo: ''
  });

  const [step, setStep] = useState(1); // Controla el paso actual
  const [excelFile, setExcelFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setExcelFile(file || null);
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  useEffect(() => {
    if (formData.forma_de_pago === 'Ya fue pagado') {
      setFormData({ ...formData, recaudo: '0' });
    }
  }, [formData]); // Agrega formData aquí
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Insertar datos manualmente
    const { data, error } = await supabase.from('orders').insert([formData]);
    if (error) {
      console.error(error);
    } else {
      console.log('Orden ingresada manualmente', data);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-ser text-sm font-medium capitalize mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-darkser rounded-md focus:outline-none focus:ring-2 focus:ring-ser focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="direccion" className="block text-ser text-sm font-medium capitalize mb-2">
                Dirección
              </label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-darkser rounded-md focus:outline-none focus:ring-2 focus:ring-ser focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="codigo_postal" className="block text-ser text-sm font-medium capitalize mb-2">
                Código Postal
              </label>
              <input
                type="text"
                id="codigo_postal"
                name="codigo_postal"
                value={formData.codigo_postal}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-darkser rounded-md focus:outline-none focus:ring-2 focus:ring-ser focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="barrio" className="block text-ser text-sm font-medium capitalize mb-2">
                Barrio
              </label>
              <input
                type="text"
                id="barrio"
                name="barrio"
                value={formData.barrio}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-darkser rounded-md focus:outline-none focus:ring-2 focus:ring-ser focus:border-transparent"
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="mb-4">
              <label htmlFor="telefono" className="block text-ser text-sm font-medium capitalize mb-2">
                Teléfono
              </label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-darkser rounded-md focus:outline-none focus:ring-2 focus:ring-ser focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ciudad" className="block text-ser text-sm font-medium capitalize mb-2">
                Ciudad
              </label>
              <input
                type="text"
                id="ciudad"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-darkser rounded-md focus:outline-none focus:ring-2 focus:ring-ser focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cantidad" className="block text-ser text-sm font-medium capitalize mb-2">
                Cantidad
              </label>
              <input
                type="text"
                id="cantidad"
                name="cantidad"
                value={formData.cantidad}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-darkser rounded-md focus:outline-none focus:ring-2 focus:ring-ser focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="producto" className="block text-ser text-sm font-medium capitalize mb-2">
                Producto
              </label>
              <input
                type="text"
                id="producto"
                name="producto"
                value={formData.producto}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-darkser rounded-md focus:outline-none focus:ring-2 focus:ring-ser focus:border-transparent"
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            {/* Campo de selección para forma_de_pago */}
        <div className="mb-4">
          <label htmlFor="forma_de_pago" className="block text-ser text-sm font-medium mb-2">
            Forma de pago
          </label>
          <select
            id="forma_de_pago"
            name="forma_de_pago"
            value={formData.forma_de_pago}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-darkser rounded-md focus:outline-none focus:ring-2 focus:ring-ser focus:border-transparent"
          >
            <option value="Pago contra entrega">Pago contra entrega</option>
            <option value="Ya fue pagado">Ya fue pagado</option>
          </select>
        </div>

        {/* Campo de recaudo, se desactiva si 'Ya fue pagado' */}
        <div className="mb-4">
          <label htmlFor="recaudo" className="block text-ser text-sm font-medium mb-2">
            Recaudo
          </label>
          <input
            type="text"
            id="recaudo"
            name="recaudo"
            value={formData.recaudo}
            onChange={handleInputChange}
            disabled={formData.forma_de_pago === 'Ya fue pagado'} // Deshabilitar si fue pagado
            className="w-full px-3 py-2 border border-darkser rounded-md focus:outline-none focus:ring-2 focus:ring-ser focus:border-transparent"
            placeholder="Ingrese recaudo"
          />
        </div>

          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white ser p-8 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-darkser mb-6">Ingresar Orden Manualmente</h1>
      
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="bg-darkser text-whiteser py-2 px-4 rounded-md font-bold hover:bg-ser transition duration-200"
            >
              Anterior
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={handleNextStep}
              className="bg-darkser text-whiteser py-2 px-4 rounded-md font-bold hover:bg-ser transition duration-200"
            >
              Siguiente
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="bg-darkser text-whiteser py-2 px-4 rounded-md font-bold hover:bg-ser transition duration-200"
            >
              Enviar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NuevaOrden;

