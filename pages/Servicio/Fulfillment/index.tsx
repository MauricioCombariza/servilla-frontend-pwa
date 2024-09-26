import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '@/components/Layout'

export default function FulfillmentPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-whiteser">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-ser flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/combariza/image/upload/v1725897200/Servilla/almacenamiento_v60aw4.jpg"
          alt="Fulfillment Center"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
            Fulfillment Logístico
          </h1>
          <p className="text-xl md:text-2xl text-darkser bold" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }}>
            La solución para optimizar tu cadena de suministro
          </p>
        </div>

      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold text-darkser mb-4">¿Qué es el Fulfillment?</h2>
            <p className="text-ser mb-4">
              El fulfillment es un servicio logístico integral que abarca desde la recepción de mercancías hasta la entrega al cliente final. Incluye almacenamiento, gestión de inventario, empaquetado, envío y, en muchos casos, la gestión de devoluciones.
            </p>
            <p className="text-ser mb-4">
              Este proceso es fundamental en el comercio electrónico y la venta al por menor, ya que permite a las empresas externalizar toda su logística, centrándose en otras áreas del negocio como el marketing y el desarrollo de productos.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/combariza/image/upload/v1725895370/Servilla/recepcion_ojekui.jpg"
              alt="Fulfillment Process"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Advantages and Disadvantages */}
      <section className="bg-lightser py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-darkser mb-8 text-center">Ventajas y Desventajas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-ser mb-4">Ventajas</h3>
              <ul className="list-disc list-inside text-ser">
                <li>Reducción de costos operativos</li>
                <li>Mayor eficiencia en la gestión de inventario</li>
                <li>Mejora en los tiempos de entrega</li>
                <li>Escalabilidad del negocio</li>
                <li>Acceso a tecnología y expertise logístico</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-ser mb-4">Desventajas</h3>
              <ul className="list-disc list-inside text-ser">
                <li>Pérdida de control directo sobre el inventario</li>
                <li>Dependencia del proveedor de servicios</li>
                <li>Posibles problemas de comunicación</li>
                <li>Menor flexibilidad en procesos personalizados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits Most */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-darkser mb-8 text-center">¿A quiénes les conviene más?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-ser p-6 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold mb-4">E-commerce en crecimiento</h3>
            <p>Empresas de comercio electrónico que experimentan un rápido crecimiento y necesitan escalar sus operaciones logísticas de manera eficiente.</p>
          </div>
          <div className="bg-ser p-6 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold mb-4">Negocios estacionales</h3>
            <p>Negocios con fluctuaciones estacionales en la demanda que requieren flexibilidad en su capacidad de almacenamiento y procesamiento de pedidos.</p>
          </div>
          <div className="bg-ser p-6 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold mb-4">Startups y PYMES</h3>
            <p>Pequeñas y medianas empresas que buscan optimizar sus recursos y focalizarse en el crecimiento del negocio sin invertir en infraestructura logística propia.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-darkser py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">¿Listo para optimizar tu logística?</h2>
          <p className="text-lightser mb-8">Contáctanos para descubrir cómo el fulfillment puede transformar tu negocio</p>
          <Link href="/Contactenos" className="bg-ser hover:bg-ser/80 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Contáctenos
          </Link>
        </div>
      </section>
    </div>
    </Layout>
  )
}