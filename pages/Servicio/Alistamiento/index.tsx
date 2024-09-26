import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const AlistamientoEmpacadoPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-whiteser">
      <Head>
        <title>Alistamiento y Empacado: Optimización Logística</title>
        <meta name="description" content="Descubre cómo el alistamiento y empacado optimiza la logística para empresas de dropshipping y fulfillment." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-ser flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/combariza/image/upload/v1720442450/Servilla/empaque.jpg"
            alt="Alistamiento y Empacado Ilustración"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Alistamiento y Empacado</h1>
            <p className="text-xl md:text-2xl text-lightser">La clave para una logística eficiente en dropshipping y fulfillment</p>
          </div>
        </section>

        {/* Proceso de Alistamiento y Empacado */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold text-darkser mb-8 text-center">Proceso de Alistamiento y Empacado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ser mb-4">
                El alistamiento y empacado es un proceso crucial en la cadena logística, especialmente para empresas que realizan dropshipping y fulfillment. Este proceso implica la preparación y embalaje de los productos para su envío al cliente final.
              </p>
              <ol className="list-decimal list-inside text-ser space-y-2">
                <li><strong>Recepción de la orden:</strong> El proceso comienza cuando se recibe una orden de compra.</li>
                <li><strong>Picking:</strong> Se seleccionan los productos del inventario según la orden.</li>
                <li><strong>Verificación:</strong> Se comprueba que los productos sean los correctos y estén en buen estado.</li>
                <li><strong>Empacado:</strong> Los productos se embalan de forma segura para su envío.</li>
                <li><strong>Etiquetado:</strong> Se añaden las etiquetas de envío y cualquier documentación necesaria.</li>
                <li><strong>Control de calidad:</strong> Se realiza una última verificación antes del envío.</li>
              </ol>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://res.cloudinary.com/combariza/image/upload/v1720441774/Servilla/inventario.jpg"
                alt="Proceso de Alistamiento y Empacado"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Ventajas y Desventajas */}
        <section className="bg-lightser py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-darkser mb-12 text-center">Ventajas y Desventajas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-ser mb-6">Ventajas</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-ser">Mayor eficiencia en el procesamiento de pedidos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-ser">Reducción de errores en los envíos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-ser">Mejora en la satisfacción del cliente</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-ser">Optimización del espacio de almacenamiento</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-ser">Posibilidad de personalización en el empacado</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-ser mb-6">Desventajas</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <span className="text-ser">Costos iniciales en equipamiento y capacitación</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <span className="text-ser">Dependencia de sistemas tecnológicos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <span className="text-ser">Necesidad de personal especializado</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <span className="text-ser">Posibles cuellos de botella en temporadas altas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <span className="text-ser">Desafíos en la gestión de devoluciones</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* A quiénes les conviene más */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold text-darkser mb-12 text-center">¿A quiénes les conviene más?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ser p-8 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4">Empresas de e-commerce</h3>
              <p>
                Ideal para negocios en línea que manejan un alto volumen de pedidos y necesitan optimizar su proceso de envío para mejorar la satisfacción del cliente y reducir costos operativos.
              </p>
            </div>
            <div className="bg-ser p-8 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4">Proveedores de fulfillment</h3>
              <p>
                Esencial para empresas que ofrecen servicios de fulfillment a terceros, permitiéndoles manejar eficientemente múltiples clientes y tipos de productos.
              </p>
            </div>
            <div className="bg-ser p-8 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4">Dropshippers</h3>
              <p>
                Beneficioso para dropshippers que buscan diferenciarse mediante un empacado personalizado y un proceso de envío más eficiente, mejorando la experiencia del cliente final.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-darkser py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-white mb-6">¿Listo para optimizar tu proceso de alistamiento y empacado?</h2>
            <p className="text-lightser mb-8 text-lg">
              Contáctanos para obtener más información sobre cómo mejorar tu logística y aumentar la satisfacción de tus clientes.
            </p>
            <Link href="/Contactenos" className="bg-ser hover:bg-ser/80 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg inline-block">
              Contáctenos
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Servilla SAS. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default AlistamientoEmpacadoPage