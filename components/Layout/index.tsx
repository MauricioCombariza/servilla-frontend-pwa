import React from "react";
import type { Metadata, Viewport } from "next";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'Servilla S.A.S - Solución logística',
  description: 'Empresa dedicada al envío de paquetes y documentos, en Colombia, desde 1974',
  keywords: 'paquetería, envíos, logística, mensajería, distribución',
  themeColor: '#000000',
};

interface GTMConfig {
  gtmId: string;
  // Add other GTM-related properties if needed
}

const Layout: React.FC<Props> = ({ children }) => {
  const gtmConfig: GTMConfig = {
    gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID?.toString() || 'default-gtm-id',
  };

  return (
    <div className='flex flex-col mt-24 lg:mt-20'>
      {children}
    </div>
  );
}

export {Layout};

export const viewport: Viewport = {
  themeColor: "whiteSer",
};