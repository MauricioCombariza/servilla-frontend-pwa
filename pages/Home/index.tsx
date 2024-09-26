import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import MapComponent from './MapComponents';
import YearsInMarket from './YearsInMarket';
import { supabase } from '@/supabase';
import { FaTruck, FaWarehouse, FaChartLine, FaWhatsapp, FaCog, FaGlobe, FaTools, FaHeadset } from 'react-icons/fa';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | boolean>(false);

  // Función para manejar el submit del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
  
    // Validar que los campos no estén vacíos
    if (!name || !email || !comentario) {
      setError("Por favor, complete todos los campos.");
      return;
    }
  
    const { data, error } = await supabase
      .from('comentarios')
      .insert([{ name, email, comentario }]);
  
    if (error) {
      setError("Error al enviar el comentario. Inténtalo nuevamente.");
      console.error("Error al insertar datos:", error.message);
    } else {
      console.log('Comentario enviado con éxito');
      setSuccess("Comentario enviado con éxito.");
      setName('');
      setEmail('');
      setComentario('');
      alert("Mensaje enviado de forma exitosa!!!");
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
              
              <div className="flex items-center space-x-4">
                <a href="#contacto" className="bg-ser hover:bg-lightser text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block">
                  Solicitar Información
                </a>

                {/* Botón + visible en dispositivos móviles */}
                <a href="Servicio/Fulfillment" className="bg-lightser hover:bg-whiteser text-white font-bold py-1 px-6 rounded-full transition duration-300 inline-block text-4xl md:hidden">
                  +
                </a>

                {/* Botón "¿Qué es Fulfillment?" visible en tablet y desktop */}
                <a href="Servicio/Fulfillment" className="bg-lightser hover:bg-whiteser text-white font-bold py-3 px-6 rounded-full transition duration-300 hidden md:inline-block">
                  ¿Qué es Fulfillment?
                </a>
              </div>

            </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src="https://res.cloudinary.com/combariza/image/upload/c_scale,w_auto/v1720447327/Servilla/dropshipping.jpg"
                  className="rounded-lg shadow-lg"
                  alt="Servilla Fulfillment Center"
                  style={{ objectFit: "cover" }}
                  width={600}
                  height={400}
                  loading='lazy'
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
                <Image
                  src="https://res.cloudinary.com/combariza/image/upload/c_crop,h_600,w_1000,x_0,y_50/g_south,c_fill/v1725895370/Servilla/recepcion_ojekui.jpg"
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
                  <h3 className="text-xl font-semibold mb-2">Alcance Global</h3>
                  <p>Ofrecemos envíos nacionales e internacionales, maximizando tu alcance.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
                <FaTools className="text-5xl text-ser mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexibilidad y Escalabilidad</h3>
                  <p>Adaptamos nuestros servicios a tus necesidades y crecemos contigo.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
                <FaHeadset className="text-5xl text-ser mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Soporte Dedicado</h3>
                  <p>Nuestro equipo está disponible para ayudarte en cada paso del proceso.</p>
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-bold mb-2">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                      required
                      onChange={(e) => setName(e.target.value)}
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
                      id="comentario"
                      name="comentario"
                      rows={4}
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                      onChange={(e) => setComentario(e.target.value)}
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
  );
}
