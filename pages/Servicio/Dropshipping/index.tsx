import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '@/components/Layout'


const Dropshipping: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-whiteser">
      <Head>
        <title>Dropshipping: Solución Logística Innovadora</title>
        <meta name="description" content="Descubre qué es el dropshipping, sus ventajas, desventajas y a quién le conviene más este modelo de negocio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-ser flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/combariza/image/upload/v1727364673/Servilla/dropshippinMujer_hqvbvf.jpg"
            alt="Dropshipping Illustration"
            layout="fill"
            objectFit="contain"
            className="absolute inset-0"
          />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              Dropshipping
            </h1>
            <p className="text-xl md:text-2xl text-whiteser bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              La revolución en la logística del e-commerce
            </p>
          </div>

        </section>

        {/* What is Dropshipping */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-darkser mb-6">¿Qué es el Dropshipping?</h2>
              <p className="text-ser mb-4">
                El dropshipping es un modelo de negocio y una solución logística en la que el vendedor no mantiene los productos que vende en stock. En su lugar, cuando se realiza una venta, el vendedor compra el artículo directamente de un tercero (generalmente un mayorista o fabricante) y lo envía directamente al cliente.
              </p>
              <p className="text-ser mb-4">
                Este enfoque elimina la necesidad de que el vendedor maneje el inventario físicamente, reduciendo significativamente los costos iniciales y los riesgos asociados con el manejo de stock. El dropshipping permite a los emprendedores iniciar y operar tiendas en línea sin tener que invertir grandes cantidades de dinero en inventario por adelantado.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://res.cloudinary.com/combariza/image/upload/v1725897533/Servilla/pedidos_zsonxs.jpg"
                alt="Proceso de Dropshipping"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Advantages and Disadvantages */}
        <section className="bg-lightser py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-darkser mb-12 text-center">Ventajas y Desventajas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-ser mb-6">Ventajas</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-ser">Bajos costos iniciales y operativos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-ser">No es necesario manejar inventario físico</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-ser">Amplia variedad de productos disponibles</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-ser">Flexibilidad en la ubicación del negocio</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-ser">Fácil de escalar el negocio</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-ser mb-6">Desventajas</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <span className="text-ser">Márgenes de beneficio más bajos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <span className="text-ser">Dificultad para construir una marca única</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who Benefits Most */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold text-darkser mb-12 text-center">¿A quiénes les conviene más?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ser p-8 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4">Emprendedores novatos</h3>
              <p>
                Ideal para quienes quieren iniciar un negocio en línea con poco capital inicial y mínimo riesgo. El dropshipping permite probar ideas de negocio sin una gran inversión en inventario.
              </p>
            </div>
            <div className="bg-ser p-8 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4">Tiendas de nicho</h3>
              <p>
                Perfecto para negocios que se enfocan en nichos de mercado específicos y quieren ofrecer una amplia variedad de productos sin invertir en inventario. Permite adaptarse rápidamente a las tendencias del mercado.
              </p>
            </div>
            <div className="bg-ser p-8 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4">Negocios de prueba</h3>
              <p>
                Excelente para empresas establecidas que desean probar nuevos productos o mercados sin comprometer grandes recursos en inventario. Facilita la expansión y diversificación del catálogo de productos.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-darkser py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-white mb-6">¿Listo para comenzar con el dropshipping?</h2>
            <p className="text-lightser mb-8 text-lg">
              Contáctanos para obtener más información sobre cómo implementar este modelo en tu negocio y optimizar tu logística.
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
    </Layout>
  )
}

export default Dropshipping