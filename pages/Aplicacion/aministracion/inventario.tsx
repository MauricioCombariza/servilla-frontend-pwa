import { useState } from 'react';
import { supabase } from '@/supabase'; // Ajusta la ruta según tu configuración
import { Layout } from '@/components/Layout';

const obtenerDatosInvView = async (idCliente: string) => {
  try {
    const { data, error } = await supabase
      .from('inv_view')
      .select('*') // Asegúrate de seleccionar las columnas necesarias
      .eq('id_cliente', idCliente); // Filtra por id_cliente

    if (error) {
      console.error('Error al obtener datos de inv_view:', error);
      return null;
    }
    console.log('Datos obtenidos:', data);
    return data;
  } catch (err) {
    console.error('Error durante la consulta:', err);
    return null;
  }
};

const Inventario = ({
  handleCancel,
  send,
  handleInitial,
}: {
  handleCancel: () => void;
  handleInitial: () => void;
  send: (action: { type: string }) => void;
}) => {
  const [idCliente, setIdCliente] = useState<string>('');
  const [resultados, setResultados] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdCliente(e.target.value);
  };

  const consultarInventario = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResultados([]);

    try {
      const data = await obtenerDatosInvView(idCliente);
      if (data) {
        setResultados(data);
      } else {
        setError('No se encontraron datos.');
      }
    } catch (err) {
      setError('Error en la operación');
      console.error('Error durante la consulta:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="p-6 bg-ser min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-whiteser">Consulta de Inventario</h1>
      <form onSubmit={consultarInventario} className="mb-4">
        <label className="block text-lg mb-2 text-whiteser">Ingrese ID Cliente</label>
        <input
          type="text"
          value={idCliente}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full mb-4"
          placeholder="ID Cliente"
          required
        />
        <button
          type="submit"
          className="bg-darkser text-whiteser px-4 py-2 rounded hover:bg-ser-lightser transition"
        >
          Consultar
        </button>
      </form>

      {loading && <p className="text-whiteser">Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {resultados.length > 0 && (
        <div className="bg-whiteser p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-darkser flex justify-between items-center">
            Resultados
            <span className="text-sm text-gray-600">
              {new Date().toLocaleString()}
            </span>
          </h2>
          <table className="min-w-full bg-whiteser">
            <thead>
              <tr>
                <th className="py-2 border-b">Producto</th>
                <th className="py-2 border-b">Inventario</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((resultado, index) => (
                <tr key={index} className="hover:bg-lightser">
                  <td className="py-2 border-b">{resultado.alias}</td>
                  <td className="py-2 border-b text-center">{resultado.inventario}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="bg-green-400 hover:bg-red-500 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-11/12 h-12 sm:min-w-48 sm:h-14 transition-colors duration-200 text-sm sm:text-base mx-auto"
            type="button"
            onClick={handleInitial}
            onTouchEnd={handleInitial}
          >
            Ir a Inicio
          </button>
        </div>
      )}

    </div>
    </Layout>
  );
};

export default Inventario;
