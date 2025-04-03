import React from 'react'
import { ButtonModulosAdmin } from '../../../utils/funciones/funcionesAdmon';
import { Layout } from '@/components/Layout';


const ModulosClientes = ({rol, nuevaOrden, handleCancel, handleInitial}: {rol: number, nuevaOrden: () => void,  handleInitial: () => void, handleCancel: () => void}) => {
    
  return (
    <Layout>
      <div className="w-full max-w-md mx-auto mt-6">
      <h1 className='text-gray-800 text-2xl text-center py-2 mb-4 mx-2'>Seleccionar módulo</h1>
      <div className="md:grid md:grid-cols-2 gap-4">
        <ButtonModulosAdmin rol={rol} minRol={3} onClick={nuevaOrden} hoverColor="bg-yellow-500">Nueva orden</ButtonModulosAdmin>
      </div>
      <ButtonModulosAdmin rol={rol} minRol={1} onClick={handleInitial} hoverColor="bg-blue-700">Ir a Inicio</ButtonModulosAdmin>
    </div>
    </Layout>
  );
};

export default ModulosClientes;