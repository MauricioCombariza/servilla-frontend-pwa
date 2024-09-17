declare module 'quagga' {
    interface InputStreamConfig {
      type: string;
      constraints: {
        facingMode: string;
      };
      target?: HTMLElement; // Añadir la propiedad target opcional
    }
  
    interface DecoderConfig {
      readers: string[];
    }
  
    interface QuaggaConfig {
      inputStream: InputStreamConfig;
      decoder: DecoderConfig;
    }
  
    interface QuaggaResult {
      codeResult: {
        code: string;
      };
    }
  
    function init(config: QuaggaConfig, callback: (err: Error | null) => void): void;
    function start(): void;
    function stop(): void;
    function onDetected(callback: (result: QuaggaResult) => void): void;
  
    const Quagga: {
      init: typeof init;
      start: typeof start;
      stop: typeof stop;
      onDetected: typeof onDetected;
    };
  
    export default Quagga;
  }