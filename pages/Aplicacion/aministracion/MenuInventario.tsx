const MenuInventario = ({ 
  onInventarioClick, 
  onInventarioTouch, 
  inventarioClick,
  inventarioTouch,
  onCrearInventarioClick, 
  onCrearInventarioTouch,
  handleCancel,
  handleInitial, 
}: { 
  onInventarioClick: React.MouseEventHandler<HTMLButtonElement>, 
  onInventarioTouch: React.TouchEventHandler<HTMLButtonElement>, 
  inventarioClick: React.MouseEventHandler<HTMLButtonElement>, 
  inventarioTouch: React.TouchEventHandler<HTMLButtonElement>, 
  onCrearInventarioClick: React.MouseEventHandler<HTMLButtonElement>, 
  onCrearInventarioTouch: React.TouchEventHandler<HTMLButtonElement>, 
  handleCancel: () => void,
  handleInitial: () => void,
}) => (
  <div className="flex flex-col items-center justify-center gap-4 p-4">
    <button
      className="bg-green-400 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-11/12 h-12 sm:min-w-48 sm:h-14 transition-colors duration-200 text-sm sm:text-base mx-auto"
      type="button"
      onClick={onInventarioClick}
      onTouchEnd={onInventarioTouch}
    >
      Consumo
    </button>
    <button
      className="bg-green-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-11/12 h-12 sm:min-w-48 sm:h-14 transition-colors duration-200 text-sm sm:text-base mx-auto"
      type="button"
      onClick={onCrearInventarioClick}
      onTouchEnd={onCrearInventarioTouch}
    >
      Ingresar Productos
    </button>
    <button
      className="bg-green-400 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-11/12 h-12 sm:min-w-48 sm:h-14 transition-colors duration-200 text-sm sm:text-base mx-auto"
      type="button"
      onClick={inventarioClick}
      onTouchEnd={inventarioTouch}
    >
      Inventario
    </button>
    <button
      className="bg-green-400 hover:bg-red-500 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-11/12 h-12 sm:min-w-48 sm:h-14 transition-colors duration-200 text-sm sm:text-base mx-auto"
      type="button"
      onClick={handleCancel}
    >
      Cancelar
    </button>
    <button
      className="bg-green-400 hover:bg-red-500 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-11/12 h-12 sm:min-w-48 sm:h-14 transition-colors duration-200 text-sm sm:text-base mx-auto"
      type="button"
      onClick={handleInitial}
      onTouchEnd={handleInitial}
    >
      Ir a Inicio
    </button>
  </div>
);

export default MenuInventario;