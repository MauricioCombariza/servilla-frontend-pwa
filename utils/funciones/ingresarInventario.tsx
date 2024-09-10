import * as XLSX from 'xlsx';
import { supabase } from '@/supabase';


// Función para leer el archivo Excel
async function readExcel(filePath: string) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = 'Hoja1'; // Ajusta el nombre de la hoja si es necesario
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet);
  return data;
}

// Función para insertar datos en Supabase
async function insertarData(data: any[]) {
  for (const row of data) {
    const { id_cliente, id_bodega, id_producto, cantidad } = row;

    // Consulta a Supabase para obtener producto y alias
    const { data: productData, error: productError } = await supabase
      .from('products')
      .select('producto, alias')
      .match({ id_cliente, id_producto });

    if (productError) {
      console.error('Error al consultar productos:', productError);
      continue; // Saltar a la siguiente fila si hay un error
    }

    const { producto, alias } = productData[0]; // Asumimos que solo hay un resultado

    // Inserción en sub_products
    const { error: insertError } = await supabase
      .from('sub_products')
      .insert({
        created_at: new Date().toISOString(),
        id_cliente,
        id_bodega,
        id_producto,
        cantidad,
        producto,
        alias,
        estado: 'B',
      });

    if (insertError) {
      console.error('Error al insertar datos:', insertError);
    }
  }
}

// Ejemplo de uso
async function ingresarInventario(data: any): Promise<void>{
  const filePath = 'tu_archivo.xlsx'; // Reemplaza con la ruta de tu archivo
  const excelData = await readExcel(filePath);
  await insertarData(excelData);
}

export { ingresarInventario };

