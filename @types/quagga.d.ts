declare module 'quagga' {
    interface QuaggaResult {
      codeResult: {
        code: string;
      };
    }
  
    const Quagga: {
      init(config: any, callback: (err: Error | null) => void): void;
      start(): void;
      stop(): void;
      onDetected(callback: (result: QuaggaResult) => void): void;
    };
  
    export default Quagga;
  }
  