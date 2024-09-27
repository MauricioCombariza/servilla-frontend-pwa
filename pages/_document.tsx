import { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "@/lib/gtag";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
            href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@600&display=swap"
            rel="stylesheet"
        />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        {/* Etiqueta global del sitio (gtag.js) - Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname, }); `, }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}