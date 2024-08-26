import { Container } from "@mui/system";
import React from "react";
import { ButtonSer, ButtonType } from "../../components/ButtonSer";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { usePostSignup, SignupType } from "../../Hooks/usePostSignup";
import { useAuth, AuthContextProps } from "../../Auth";
import { supabase } from "../../supabase"

interface IFormData {
    username: string | null;
    id_bodega: number | 0;
    email: string | '';
    password: string | '';
    direccion: string | null;
    cod_men: string | '';
    telefono: string | null;
    rol: number | 0;
  }

function Registrarse () {
    const auth = useAuth()
    const form = React.useRef(null)

    const [isLoading, setIsLoading] = React.useState(false)
    const [userId, setUserId] = React.useState<string | null>(null)

    const OnFormSubmit = async (dataForm: SignupType) => {
        setIsLoading(true); // Marca como cargando al iniciar la solicitud
        await usePostSignup(dataForm);
        setIsLoading(false); // Marca como no cargando al completar la solicitud
      };

      async function signup(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const formDataValues: IFormData = {
            username: form.get('username')?.toString() || '',
            id_bodega: Number(form.get('id_bodega')) || 0,
            direccion: form.get('direccion')?.toString() || '',
            email: form.get('email')?.toString() || '',
            cod_men: form.get('cod_men')?.toString() || '',
            password: form.get('password')?.toString() || '',
            telefono: form.get('telefono')?.toString() || '',
            rol: Number(form.get('rol')?.toString()) || 0,
        };
    
        if (formDataValues.email === '') {
            alert('Email es requerido');
            return;
        }
        if (formDataValues.password === '') {
            alert('Password es requerido');
            return;
        }
    
        const { data, error: signUpError } = await supabase.auth.signUp({
            email: formDataValues.email,
            password: formDataValues.password,
        });
    
        if (signUpError) {
            alert(signUpError.message);
            return;
        }
    
        // Obtén el usuario después del registro
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
            const userId = user?.id as string;
            console.log('User IDNuevo:', userId);
            setUserId(userId);
            const { error: insertError } = await supabase
            .from('usuarios')
            .insert([{
                nombre: formDataValues.username,
                email: formDataValues.email, // Asumiendo que el email es único y puede ser usado como referencia
                id_bodega: formDataValues.id_bodega, // Asumiendo que 'company' se refiere a 'id_bodega'
                direccion: formDataValues.direccion,
                telefono: formDataValues.telefono,
                cod_men: formDataValues.cod_men,
                rol:formDataValues.rol,
                id_uuid: userId,
            }]);
    
            if (insertError) {
                alert(insertError.message);
            } else {
                alert('La información se ha creado correctamente');
            }
            }
            else {
                alert('No se pudo obtener el usuario');
                return;
            }
        
        
    }
    return (
        <Container maxWidth='md'>
            <form
            className="container lg:px-20 lg:m-20 mx-2 pt-10 bg-gray-200"
            method="post"
            onSubmit={signup}
            ref={form}
            >
            <h1 className="font-bold text-ser">REGISTRARSE</h1>
            <div className="py-2 px-2">
            <div>Email</div>
            <input
                name="email"
                className="w-full leading-snug text-gray-800 placeholder-blue-400 py-1 px-4 bg-green-600 rounded border border-darkser hover:bg-ser focus:outline-none focus:shadow-outline hover:text-white"
                type="email"
                placeholder="Email"
            />
            </div>
            <div className="py-2 px-2">
            <div>Password</div>
            <input
                name="password"
                className="w-full leading-snug text-gray-800 placeholder-blue-400 py-1 px-4 bg-green-600 rounded border border-darkser hover:bg-ser focus:outline-none focus:shadow-outline hover:text-white"
                type="password"
                placeholder="password"
            />
            </div>
            <div className="py-2 px-2">
            <div>Username</div>
            <input
                name="username"
                className="w-full leading-snug text-gray-800 placeholder-blue-400 py-1 px-4 bg-green-600 rounded border border-darkser hover:bg-ser focus:outline-none focus:shadow-outline hover:text-white"
                type="username"
                placeholder="Usuario"
            />
            </div>
            <div className="py-2 px-2">
            <div>Direccion</div>
            <input
                name="direccion"
                className="w-full leading-snug text-gray-800 placeholder-blue-400 py-1 px-4 bg-green-600 rounded border border-darkser hover:bg-ser focus:outline-none focus:shadow-outline hover:text-white"
                type="direccion"
                placeholder="Direccion"
            />
            </div>
            <div className="py-2 px-2">
            <div>Célular</div>
            <input
                name="telefono"
                className="w-full leading-snug text-gray-800 placeholder-blue-400 py-1 px-4 bg-green-600 rounded border border-darkser hover:bg-ser focus:outline-none focus:shadow-outline hover:text-white"
                type="telefono"
                placeholder="Célular"
            />
            </div>
            <div>Bodega Numero</div>
            <input
                name="id_bodega"
                className="w-full leading-snug text-gray-800 placeholder-blue-400 py-1 px-4 bg-green-600 rounded border border-darkser hover:bg-ser focus:outline-none focus:shadow-outline hover:text-white"
                type="id_bodega"
                placeholder="Bodega"
            />
            <div>Rol</div>
            <input
                name="rol"
                className="w-full leading-snug text-gray-800 placeholder-blue-400 py-1 px-4 bg-green-600 rounded border border-darkser hover:bg-ser focus:outline-none focus:shadow-outline hover:text-white"
                type="rol"
                placeholder="Rol"
            />
            <div>Codigo Mensajero</div>
            <input
                name="cod_men"
                className="w-full leading-snug text-gray-800 placeholder-blue-400 py-1 px-4 bg-green-600 rounded border border-darkser hover:bg-ser focus:outline-none focus:shadow-outline hover:text-white"
                type="cod_men"
                placeholder="Codigo Mensajero"
            />
            <div className="py-4">
            <ButtonSer type={ButtonType.Submit} name={"REGISTRARSE"} />
            </div>
        </form>
        {isLoading && <LoadingSpinner />}
        </Container>
    )
}

export default Registrarse