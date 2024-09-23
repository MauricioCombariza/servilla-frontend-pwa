import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import MapComponent from './MapComponents'
import YearsInMarket from './YearsInMarket'
import { supabase } from '@/supabase'
import { FaTruck, FaWarehouse, FaChartLine, FaWhatsapp } from 'react-icons/fa'
import { FaCog, FaGlobe, FaTools, FaHeadset } from 'react-icons/fa';


export default function Home() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Insertar los datos en la tabla 'comentarios'
    const { error } = await supabase.from('comentarios').insert([
      { nombre, email, mensaje }
    ]);

    if (error) {
      console.error('Error al insertar comentario:', error.message);
    } else {
      console.log('Comentario enviado con éxito');
      // Resetear los campos del formulario
      setNombre('');
      setEmail('');
      setMensaje('');
      alert("Mensaje enviado de forma existosa!!!");
    }
  };
  return (
    <>
      <Head>
        <title>Servilla - Soluciones de Fulfillment para E-commerce</title>
        <meta name="description" content="Servilla ofrece servicios de fulfillment de primera clase para empresas de comercio electrónico. Optimice su logística y aumente la satisfacción del cliente." />
        <link rel="canonical" href="https://www.servilla.com.co" />
      </Head>
      <main className="min-h-screen bg-whiteser">
        <header className="bg-ser text-white py-4 fixed w-full z-10">
          <div className="container mx-auto px-4">
            <nav className="flex justify-between items-center">
              <Image src="/logo-servilla.svg" alt="Servilla Logo" width={150} height={50} />
              <ul className="hidden md:flex space-x-6">
                <li><a href="#inicio" className="hover:text-lightser">Inicio</a></li>
                <li><a href="#servicios" className="hover:text-lightser">Servicios</a></li>
                <li><a href="#proceso" className="hover:text-lightser">Proceso</a></li>
                <li><a href="#ventajas" className="hover:text-lightser">Ventajas</a></li>
                <li><a href="#contacto" className="hover:text-lightser">Contacto</a></li>
              </ul>
              <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </nav>
          </div>
        </header>

        <section id="inicio" className="pt-24 pb-12 bg-darkser text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Fulfillment de Próxima Generación</h1>
                <p className="text-xl mb-8">Optimice su logística y aumente la satisfacción del cliente con Servilla</p>
                <a href="#contacto" className="bg-ser hover:bg-lightser text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block">
                  Solicitar Información
                </a>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                src="https://res.cloudinary.com/combariza/image/upload/c_scale,w_auto/v1720447327/Servilla/dropshipping.jpg"
                className="rounded-lg shadow-lg"
                alt="Servilla Fulfillment Center"
                // fill
                style={{ objectFit: "cover" }}  // Esto asegurará que la imagen cubra el área de su contenedor
                width={600}
                height={400}
                loading='lazy'
                // priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              />
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
            <YearsInMarket />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaWarehouse className="text-5xl text-ser mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Almacenamiento Inteligente</h3>
                <p>Gestión de inventario eficiente y segura con tecnología de punta.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaTruck className="text-5xl text-ser mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Envíos Rápidos</h3>
                <p>Entregas rápidas y precisas para maximizar la satisfacción del cliente.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaChartLine className="text-5xl text-ser mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Análisis Avanzado</h3>
                <p>Informes detallados y análisis predictivo para optimizar su cadena de suministro.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="proceso" className="bg-lightser py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestro Proceso</h2>
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <Image src="https://res.cloudinary.com/combariza/image/upload/c_crop,h_600,w_1000,x_0,y_50/g_south,c_fill/v1725895370/Servilla/recepcion_ojekui.jpg"
                alt="Proceso de Fulfillment Servilla"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <ol className="list-decimal list-inside space-y-4">
                  <li className="text-lg">Recepción y control de calidad</li>
                  <li className="text-lg">Almacenamiento estratégico</li>
                  <li className="text-lg">Gestión de inventario en tiempo real</li>
                  <li className="text-lg">Procesamiento de pedidos automatizado</li>
                  <li className="text-lg">Embalaje personalizado</li>
                  <li className="text-lg">Envío optimizado</li>
                  <li className="text-lg">Seguimiento y atención al cliente</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="ventajas" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Ventajas de Servilla</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
                <FaCog className="text-5xl text-ser mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tecnología de Vanguardia</h3>
                  <p>Nos conectamos a tu página web, y recibimos tus pedidos en tiempo real</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
                <FaGlobe className="text-5xl text-ser mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ciudamos el planeta</h3>
                  <p>Nuestra red de distribución se centra mucho en la biclicleta, acercamos tus paquetes en horarios adecuados, para llegar a ti en bicicleta en el horario que puedes recibirnos</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
                <FaTools className="text-5xl text-ser mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Soluciones a Medida</h3>
                  <p>Adaptamos nuestros servicios a las necesidades específicas de su negocio.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
                <FaHeadset className="text-5xl text-ser mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Soporte Personalizado</h3>
                  <p>Contestamos tus llamadas y estamos pendientes de tus clientes, creemos en el soporte como parte importante de la satisfacción del cliente.</p>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section id="contacto" className="py-16 bg-ser text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contáctenos</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-bold mb-2">Nombre</label>
                    <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    required
                    onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-bold mb-2">Mensaje</label>
                    <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    onChange={(e) => setMensaje(e.target.value)}
                    required></textarea>
                  </div>
                  <button type="submit" className="bg-darkser hover:bg-lightser text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <MapComponent />
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-darkser text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Servilla</h3>
                <p>Soluciones de fulfillment de próxima generación para su negocio de comercio electrónico.</p>
              </div>
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Contacto</h3>
                <p>Email: mauricio.combariza@gruposervilla.com</p>
                <p>Teléfono: +57 5189471</p>
                <p>Dirección: Calle 74A 50 38, Bogotá</p>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-xl font-bold mb-2">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-lightser"><span className="sr-only">Facebook</span><i className="fab fa-facebook"></i></a>
                  <a href="#" className="hover:text-lightser"><span className="sr-only">Twitter</span><i className="fab fa-twitter"></i></a>
                  <a href="#" className="hover:text-lightser"><span className="sr-only">LinkedIn</span><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="hover:text-lightser"><span className="sr-only">Instagram</span><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; 2024 Servilla. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/5716262314?text=Hola%2C%20quisiera%20más%20información"
          className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 hover:bg-green-600 transition duration-300 z-50"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </a>

      </main>
    </>
  )
}