//types/quagga.d.ts
declare module 'quagga' {
  interface Quagga {
    init(config: any, callback: (err: Error | null) => void): void;
    start(): void;
    stop(): void;
    onDetected(callback: (result: any) => void): void;
  }

  const Quagga: Quagga;
  export default Quagga;
}
