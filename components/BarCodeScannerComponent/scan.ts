import { BrowserMultiFormatReader } from '@zxing/library';

export interface ScannerOptions {
  videoElement: HTMLVideoElement;
  onDetected: (code: string) => void;
  onError?: (error: any) => void;
}

/**
 * Inicia el escaneo de códigos de barras en el elemento de video proporcionado.
 * Devuelve una función de limpieza que detiene el escaneo.
 *
 * @param options Objeto con las opciones:
 *   - videoElement: Elemento de video donde se mostrará la cámara.
 *   - onDetected: Función que se ejecuta cuando se detecta un código.
 *   - onError: (Opcional) Función que se ejecuta en caso de error.
 * @returns Una función para detener el escaneo.
 */
export function startScanner(options: ScannerOptions): () => void {
  const { videoElement, onDetected, onError } = options;
  const codeReader = new BrowserMultiFormatReader();

  codeReader.decodeFromVideoDevice(
    null, // Usa undefined en lugar de null para seleccionar el dispositivo por defecto
    videoElement,
    (result, error) => {
      if (result) {
        onDetected(result.getText());
      }
      // Se filtra el error NotFoundException, que es normal si no se detecta código en un frame
      if (error && error.name !== 'NotFoundException') {
        console.error('Error en el escaneo:', error);
        if (onError) onError(error);
      }
    }
  );

  // Devuelve una función de limpieza para detener el escáner
  return () => {
    codeReader.reset();
  };
}
