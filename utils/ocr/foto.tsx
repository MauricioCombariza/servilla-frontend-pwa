import * as fs from 'fs-extra';
import * as path from 'path';
import * as xlsx from 'xlsx';
import tesseract from 'node-tesseract-ocr';

// Configuración de Tesseract (si es necesario)
const config = {
  lang: 'eng', // Idioma, puedes cambiarlo según la necesidad
  oem: 1, // Default OCR Engine
  psm: 3, // Default page segmentation mode
};

// Función para leer el texto de una imagen usando Tesseract
const leerTextoDeImagen = async (rutaImagen: string): Promise<string> => {
  try {
    const textoExtraido = await tesseract.recognize(rutaImagen, config);
    return textoExtraido;
  } catch (error) {
    return `Error al procesar la imagen: ${error}`;
  }
};

// Ruta de la carpeta donde se encuentran las fotos
const carpetaFotos = 'foto';

// Crear una lista para almacenar los textos extraídos
const filas: string[][] = [];

// Función principal
const procesarImagenes = async () => {
  try {
    // Leer archivos de la carpeta
    const archivos = await fs.readdir(carpetaFotos);

    // Recorrer cada archivo en la carpeta
    for (const archivo of archivos) {
      // Verificar si el archivo es una imagen
      if (['.png', '.jpg', '.jpeg'].includes(path.extname(archivo).toLowerCase())) {
        const rutaImagen = path.join(carpetaFotos, archivo);

        // Extraer el texto de la imagen
        const texto = await leerTextoDeImagen(rutaImagen);

        // Dividir el texto en líneas y eliminar las líneas en blanco
        const lineas = texto.split('\n').filter(linea => linea.trim());

        // Agregar las líneas como una nueva fila en la lista
        filas.push(lineas);
      }
    }

    // Crear el archivo Excel
    const hojaDeTrabajo = xlsx.utils.aoa_to_sheet(filas);
    const libro = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(libro, hojaDeTrabajo, 'Resultados');
    const archivoExcel = 'foto.xlsx';
    xlsx.writeFile(libro, archivoExcel);

    console.log(`Texto de las imágenes guardado en ${archivoExcel}`);
  } catch (error) {
    console.error('Error al procesar las imágenes:', error);
  }
};

// Ejecutar la función principal
procesarImagenes();
