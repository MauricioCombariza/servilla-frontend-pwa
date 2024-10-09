import { useZxing } from "react-zxing";
import { Layout } from "@/components/Layout";

const BarcodeScanner = () => {
  const {
    ref,
    torch: { on, off, isOn, isAvailable },
  } = useZxing();

  return (
    <Layout>
      <video ref={ref} />
      {isAvailable ? (
        <button onClick={() => (isOn ? off() : on())}>
          {isOn ? "Turn off" : "Turn on"} torch
        </button>
      ) : (
        <strong>Unfortunately, torch is not available on this device.</strong>
      )}
    </Layout>
  );
};

export default BarcodeScanner;