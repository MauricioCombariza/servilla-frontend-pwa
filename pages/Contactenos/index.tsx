import { Layout } from "../../components/Layout";
import { useState } from "react";
import { supabase } from "@/supabase"; // Asegúrate de que esta importación apunte a tu configuración de Supabase

const Contactenos = () => {
  // Estados para capturar los valores del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | boolean>(false);

  // Función para manejar el submit del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    setError(null);
    setSuccess(false);

    // Insertar los datos en la tabla 'comentarios'
    const { data, error } = await supabase
      .from('comentarios') // Nombre de la tabla en Supabase
      .insert([{ name, email, comentario }]) // Campos a insertar

    if (error) {
      setError("Error al enviar el comentario. Inténtalo nuevamente.");
      console.error("Error al insertar datos:", error.message);
    } else {
      setSuccess("Comentario enviado con éxito.");
      setName("");
      setEmail("");
      setComentario("");
      alert("Datos insertados con éxito:");
      }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-darkser p-4">
        <form className="bg-white ser p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-darkser mb-6 text-center">
            Comentario
          </h2>

          <div className="mb-4">
            <label className="block text-darkser text-sm font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              className="appearance-none border border-lightser rounded w-full py-2 px-3 text-darkser leading-tight focus:outline-none focus:ring-2 focus:ring-lightser"
              id="name"
              type="text"
              placeholder="Ingresa tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-darkser text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="appearance-none border border-lightser rounded w-full py-2 px-3 text-darkser leading-tight focus:outline-none focus:ring-2 focus:ring-lightser"
              id="email"
              type="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-darkser text-sm font-bold mb-2" htmlFor="comentario">
              Comentario
            </label>
            <textarea
              className="appearance-none border border-lightser rounded w-full h-40 py-2 px-3 text-darkser leading-tight focus:outline-none focus:ring-2 focus:ring-lightser"
              id="comentario"
              placeholder="Escribe tu comentario"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

          <div className="flex items-center justify-center">
            <button
              className="bg-ser hover:bg-[#55efc4] text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 w-full"
              type="submit"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contactenos;
