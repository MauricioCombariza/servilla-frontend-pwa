import React from "react";
import type { Metadata, Viewport } from "next";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

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
  gtmAnalytics: string;
  // Add other GTM-related properties if needed
}

const Layout: React.FC<Props> = ({ children }) => {
  const gtmConfig: GTMConfig = {
    gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID?.toString() || 'default-gtm-id',
    gtmAnalytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.toString() || 'default-gtm-analytics-id',
  };
  console.log('GTM Config:', gtmConfig);

  return (
    <div className='flex flex-col mt-28 lg:mt-32'>
      <Head>
        <GoogleAnalytics gaId={gtmConfig.gtmAnalytics}/>
        <GoogleTagManager gtmId={gtmConfig.gtmId} />
      </Head>
      {children}
      <Analytics/>
      <SpeedInsights/>
    </div>
  );
}

export {Layout};

export const viewport: Viewport = {
  themeColor: "whiteSer",
};