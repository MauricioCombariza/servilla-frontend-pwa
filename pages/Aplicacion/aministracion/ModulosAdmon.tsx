import React from 'react'
import { ButtonModulosAdmin } from '../../../utils/funciones/funcionesAdmon';
import { Layout } from '@/components/Layout';


const ModulosAdmon = ({rol, upload_orders, cajoneras, pistoleo, ordenes, menu_inventario, dinero, whatsapp, handleCancel, handleInitial}: {rol: number, whatsapp: () => void, upload_orders: () => void ,cajoneras: () => void, pistoleo: () => void, ordenes: () => void, menu_inventario: () => void, dinero: () => void, handleInitial: () => void, handleCancel: () => void}) => {


  return (
    <Layout>
      <div className="w-full max-w-md mx-auto mt-6">
      <h1 className='text-gray-800 text-2xl text-center py-2 mb-4 mx-2'>Seleccionar módulo</h1>
      <div className="md:grid md:grid-cols-2 gap-4">
        <ButtonModulosAdmin rol={rol} minRol={1} onClick={cajoneras} hoverColor="bg-blue-500">Cajoneras</ButtonModulosAdmin>
        <ButtonModulosAdmin rol={rol} minRol={2} onClick={pistoleo} hoverColor="bg-green-800">Pistoleo</ButtonModulosAdmin>
        <ButtonModulosAdmin rol={rol} minRol={3} onClick={ordenes} hoverColor="bg-yellow-500">Ordenes</ButtonModulosAdmin>
        <ButtonModulosAdmin rol={rol} minRol={4} onClick={menu_inventario} hoverColor="bg-red-500">Inventario</ButtonModulosAdmin>
        <ButtonModulosAdmin rol={rol} minRol={5} onClick={dinero} hoverColor="bg-yellow-300">Dinero</ButtonModulosAdmin>
        <ButtonModulosAdmin rol={rol} minRol={3} onClick={whatsapp} hoverColor="bg-blue-700">WhatsApp</ButtonModulosAdmin>
        <ButtonModulosAdmin rol={rol} minRol={3} onClick={upload_orders} hoverColor="bg-blue-700">Subir Ordenes</ButtonModulosAdmin>
        
      </div>
      <ButtonModulosAdmin rol={rol} minRol={1} onClick={handleInitial} hoverColor="bg-blue-700">Ir a Inicio</ButtonModulosAdmin>
    </div>
    </Layout>
  );
};

export default ModulosAdmon;