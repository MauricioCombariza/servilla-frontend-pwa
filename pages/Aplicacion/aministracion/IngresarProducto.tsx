import { useState } from 'react';
import * as XLSX from 'xlsx';

const IngresarInventario = () => {
  const [file, setFile] = useState<File | null>(null);

  // Manejar el cambio de archivo
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
  };

  // Leer el archivo Excel
  const readExcel = (file: File) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      console.log('Datos del Excel:', jsonData);
    };

    reader.onerror = (error) => {
      console.error('Error al leer el archivo:', error);
    };

    reader.readAsBinaryString(file);
  };

  const ingresarInventario = (e: React.FormEvent) => {
    e.preventDefault();

    if (file) {
      readExcel(file);
    } else {
      console.error('Por favor, seleccione un archivo.');
    }
  };

  return (
    <div>
      <form onSubmit={ingresarInventario}>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
        <button type="submit">Cargar Inventario</button>
      </form>
    </div>
  );
};

export default IngresarInventario;
