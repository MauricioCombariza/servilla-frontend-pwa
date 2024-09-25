import React, { ChangeEvent, FC } from 'react';
import { supabase } from '@/supabase';
import { fetchUserRole } from '@/utils/funciones/funcionesAdmon';


interface IngresoProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  rol: number;
  setPassword: (value: string) => void;
  send: (action: { type: string; username?: string; rol?: number }) => void;
  setRol: React.Dispatch<React.SetStateAction<number>>,
  handleInitial: () => void;
}

const Ingreso: FC<IngresoProps> = ({email, password, setEmail, rol, setRol,setPassword, send, handleInitial}) => {    
  const administracion = () => {
    console.log('Administracion');
    send({ type: 'ADMINISTRACION' });
  };  
  const mensajeroLogin = async () => {
    console.log('Ingreso_Admon');
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    const { data: { user } } = await supabase.auth.getUser()
    console.log('data:', data);
    console.log('Session', data?.session);
    console.log('id',data?.user?.id);
    const id_user = data?.user?.id; // Suponiendo que esta es la forma en que obtienes el id_user
    if (id_user) {
      fetchUserRole(id_user)
        .then((rol) => {
          if (rol) {
            // Aquí puedes manejar el rol del usuario como necesites
            console.log(`El rol del usuario es: ${rol}`);
            setRol(rol);
            if (rol === 0) {
              alert('Credenciales inválidas');
            } else {
              send({ type: 'START', rol });
            }
          }
        })
        .catch((error) => {
          console.error('Error al obtener el rol del usuario:', error);
        });
    }
  };
  
  return (
        <div className="w-full max-w-xs mx-auto mt-6">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codigo">
                  email:
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Código" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Contraseña:
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="flex items-center justify-between space-x-4">
                <button
                  className="bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 transition-colors duration-200"
                  type="button"
                  onClick={mensajeroLogin}
                  onTouchEnd={mensajeroLogin}
                >
                  Ingreso
                </button>
                <button
                  className="bg-green-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 transition-colors duration-200"
                  type="button"
                  onClick={administracion}
                  onTouchEnd={administracion}
                >
                  Cambio de contraseña
                </button>
                <button
                  className="bg-green-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 transition-colors duration-200"
                  type="button"
                  onClick={handleInitial}
                  onTouchEnd={handleInitial}
                >
                  Ir a Inicio
                </button>
              </div>
            </form>
          </div>
    );
}

export default Ingreso;
