import { useRef, useState } from 'react';
import Quagga from '@ericblade/quagga2';

const useBarcodeScanner = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isScanning, setIsScanning] = useState(false);

    const startScan = async () => {
        if (!isScanning && videoRef.current) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
                videoRef.current.srcObject = stream;
                setIsScanning(true);

                Quagga.init({
                    inputStream: {
                        // Configuración de la cámara (ajusta según tus necesidades)
                        name: "Live",
                        type: "LiveStream",
                        target: videoRef.current,
                        constraints: {
                            width: { min: 640 },
                            height: { min: 480 },
                            facingMode: "environment"
                        }
                    },
                    decoder: {
                        // Configuración de los lectores de códigos de barras (ajusta según los tipos de códigos que necesites)
                        readers: ["code_128_reader", "ean_reader", "code_39_reader"]
                    }
                }, (err) => {
                    if (err) console.error(err);
                    Quagga.start();
                });

                Quagga.onDetected((result) => {
                    alert(`El código de barras escaneado es: ${result.codeResult.code}`);
                    stopScan();
                });
            } catch (error) {
                console.error('Error al acceder a la cámara:', error);
            }
        } else {
            stopScan();
        }
    };

    const stopScan = () => {
        Quagga.stop();
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
            videoRef.current.srcObject   
     = null;
        }
        setIsScanning(false);
    };

    return { videoRef, isScanning, startScan, stopScan };
};

export {useBarcodeScanner};