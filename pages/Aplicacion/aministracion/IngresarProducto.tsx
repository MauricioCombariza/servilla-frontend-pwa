import { useState } from 'react';
import * as XLSX from 'xlsx';
import { ingresarInventario } from '@/utils/funciones/ingresarInventario';

interface Props {
  handleCancel: () => void;
  handleInitial: () => void;
  send: (action: { type: string }) => void;
}

const IngresarProducto: React.FC<Props> = ({ handleCancel, send, handleInitial }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    if (!file) return;

    setIsLoading(true);

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const json: any[] = XLSX.utils.sheet_to_json(worksheet);

        // Procesar el archivo usando la función ingresarInventario
        await ingresarInventario(json);
        
        alert('Datos procesados correctamente');
      };
      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('Error al procesar el archivo:', error);
      alert('Error al procesar el archivo');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Cargando...' : 'Subir'}
      </button>
      <button onClick={handleCancel}>Cancelar</button>
    </div>
  );
};

export default IngresarProducto;