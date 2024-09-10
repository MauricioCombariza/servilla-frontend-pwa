import { Layout } from "../../../components/Layout";
import Image from 'next/image';

const fulfillmentSteps = [
  {
    title: 'Recepción del Producto',
    description: 'Los productos son recibidos en el centro de distribución.',
    imageUrl: 'https://res.cloudinary.com/combariza/image/upload/c_crop,h_600,w_1000,x_0,y_50/g_south,c_fill/v1725895370/Servilla/recepcion_ojekui.jpg',
  },
  {
    title: 'Almacenamiento',
    description: 'Los productos son organizados y almacenados de manera segura.',
    imageUrl: 'https://res.cloudinary.com/combariza/image/upload/v1725897200/Servilla/almacenamiento_v60aw4.jpg',
  },
  {
    title: 'Pedidos',
    description: 'Nos conectamos con tu página web, para recibir tus pedidos en tiempo real y empezar el proceso de alistamiento.',
    imageUrl: 'https://res.cloudinary.com/combariza/image/upload/v1725897533/Servilla/pedidos_zsonxs.jpg',
  },
  {
    title: 'Empacado y alistamiento',
    description: 'Los pedidos son empacados según las necesidades del cliente y preparados para envío.',
    imageUrl: 'https://res.cloudinary.com/combariza/image/upload/v1720442450/Servilla/empaque.jpg',
  },
  {
    title: 'Envío a distribuidores',
    description: 'Los pedidos son enviados a los sitios de distribución de cada barrio.',
    imageUrl: 'https://res.cloudinary.com/combariza/image/upload/v1725898018/Servilla/distribucion_l87vol.jpg',
  },
  {
    title: 'Entrega',
    description: 'Los productos son entregados en el destino final.',
    imageUrl: 'https://res.cloudinary.com/combariza/image/upload/v1725898241/Servilla/entrega_hsbdrt.jpg',
  },
];

const Paqueteo = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8"> {/* Container centralizado */}
        <section className="space-y-8">
          {fulfillmentSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-ser p-4 rounded-lg shadow-md md:flex-row md:space-x-4"
            >
              <div className="relative w-full h-64 md:w-1/3 md:h-64">
                <Image
                  src={step.imageUrl}
                  alt={step.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold text-white">{step.title}</h2>
                <p className="text-white">{step.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default Paqueteo;
