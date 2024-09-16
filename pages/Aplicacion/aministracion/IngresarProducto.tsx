import { useState } from 'react';
import * as XLSX from 'xlsx';
import { supabase } from '@/supabase'; // Si estás usando Next.js


const IngresarInventario = ({
  handleCancel,
  send,
  handleInitial,
}: {
  handleCancel: () => void;
  handleInitial: () => void;
  send: (action: { type: string }) => void;
}) => {
  const [file, setFile] = useState<File | null>(null);

  // Manejar el cambio de archivo
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
  };

  // Leer el archivo Excel
  const readExcel = async (file: File) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData: any[] = XLSX.utils.sheet_to_json(sheet);

      // Procesar los datos fila por fila
      const rowsToInsert = jsonData.map((row) => ({
        orden: row['orden'],
        id_cliente: row['id_cliente'],
        id_bodega: row['id_bodega'],
        id_producto: row['id_producto'],
        cantidad: row['cantidad'],
        producto: row['producto'],
        alias: row['alias'],
        estado: 'B'
      }));

      try {
        // Insertar los datos en la tabla 'suborders' usando Supabase
        const { data: rowsInserted, error: insertError } = await supabase
          .from('suborders')
          .insert(rowsToInsert)
          .select();

        if (insertError) {
          console.error('Error al insertar en Supabase:', insertError);
        } else {
          console.log('Datos insertados con éxito:', rowsInserted);
          }
      } catch (err) {
        console.error('Error en la operación:', err);
      }
    };

    reader.onerror = (error) => {
      console.error('Error al leer el archivo:', error);
    };

    reader.readAsBinaryString(file);
  };

  

  // Manejar la carga del inventario
  const ingresarInventario = (e: React.FormEvent) => {
    e.preventDefault();

    if (file) {
      readExcel(file);
    } else {
      console.error('Por favor, seleccione un archivo.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-darkser">
      <div className="bg-white-ser p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-lightser mb-6">Ingresar Inventario</h2>
        
        <form onSubmit={ingresarInventario} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="file" className="text-sm text-lightser mb-2">Seleccionar archivo Excel</label>
            <input 
              id="file"
              type="file" 
              accept=".xlsx, .xls" 
              onChange={handleFileChange}
              className="block w-full text-sm text-whiteser border border-gray-300 rounded-md bg-white-ser focus:outline-none focus:ring-2 focus:ring-ser"
            />
          </div>

          <div className="flex justify-center">
            <button 
              type="submit"
              className="px-4 py-2 bg-green-500 text-white-ser font-semibold rounded-md hover:bg-lightser transition duration-300 ease-in-out"
            >
              Cargar Inventario
            </button>
          </div>
          <button
            className="bg-green-700 hover:bg-red-500 mt-6 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-11/12 h-12 sm:min-w-48 sm:h-14 transition-colors duration-200 text-sm sm:text-base mx-auto"
            type="button"
            onClick={handleInitial}
            onTouchEnd={handleInitial}
          >
            Ir a Inicio
          </button>
        </form>
      </div>
    </div>

  );
};

export default IngresarInventario;
