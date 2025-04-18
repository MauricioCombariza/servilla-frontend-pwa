import { createMachine, interpret } from 'xstate';

const automateMachine = createMachine({
  id: 'entregarPaquetes',
  initial: 'modulos',
  states: {
    modulos: {
      on: {
        ADMINISTRACION: 'ingreso_admon',
        ADMONROL: 'modulos_admon',
        MENSAJEROS: 'ingreso',
        MENAUTH: 'datos',
        CLIENTES: 'ingreso_clientes',
      }
    },
    ingreso_admon: {
      on: {
        START: 'modulos_admon',
        CAMBIOCONTRASENA: 'cambio_contrasena',
        INITIAL:'modulos',
      }
    },
    ingreso_clientes: {
      on: {
        START: 'modulos_clientes',
        CAMBIOCONTRASENA: 'cambio_contrasena',
        INITIAL:'modulos',
      }
    },
    cambio_contrasena: {
      on: {
        START: 'modulos_admon',
        CANCEL: 'ingreso_admon',
        INITIAL:'modulos',
      }
    },
    ingreso: {
      on: {
        START: 'datos',
        INITIAL:'modulos',
      }
    },
    administracion: {
      on: {
        MODULOSADMON: 'modulos_admon',
        ADMINISTRACION: 'administracion',
        INITIAL:'modulos',
      },
    },
    modulos_clientes: {
      on: {
        NUEVAORDEN: 'nueva_orden',
        INVENTARIOCLIENTE: 'inventario_cliente',
        CANCEL: 'modulos_clientes',
        INITIAL:'modulos',
    },
  },
    inventario_cliente: {
      on: {
        CANCEL: 'modulos_clientes',
        INITIAL:'modulos',
      }
    },
    ingreso_ordenes: {
      on: {
        CANCEL: 'modulos_clientes',
        INITIAL:'modulos',
        },
    },
    nueva_orden: {
      on: {
        MODULOSCLIENTES: 'modulos_clientes',
        INITIAL:'modulos',
      }
    },
    modulos_admon: {
      on: {
        CAJONERAS: 'cajoneras',
        PISTOLEO: 'pistoleo',
        MENUINVENTARIO: 'menu_inventario',
        UPLOAD_ORDERS: 'upload_orders',
        ORDENES: 'ordenes',
        DINERO: 'dinero',
        WHATSAPP: 'whatsapp',
        INITIAL:'modulos',
      }
    },
    datos: {
      on: {
        NEQUI: 'nequi',
        EFECTIVO: 'efectivo',
        NEQUI_EFECTIVO: 'nequi_efectivo',
        OTRA: 'otra',
        SIN_COBRO: 'sin_cobro',
        CANCEL:'ingreso',
        DEVOLUCION: 'devolucion',
        INITIAL:'modulos',
      }
    },
    cajoneras: {
      on: {
        MODULOSADMON: 'modulos_admon',
        INITIAL:'modulos',
      }
    },
    pistoleo: {
      on: {
        START: 'administracion',
        INITIAL:'modulos',
      }
    },
    whatsapp: {
      on: {
        START: 'modulos_admon',
        CANCEL: 'modulos_admon',
        INITIAL:'modulos',
      }
    },
    ordenes: {
      on: {
        START: 'modulos_admon',
        CANCEL: 'modulos_admon',
        INITIAL:'modulos',
      }
    },
    upload_orders:{
      on: {
        START: 'modulos_admon',
        CANCEL: 'modulos_admon',
        INITIAL:'modulos',
      }
    },
    menu_inventario: {
      on: {
        CONSUMOPORORDEN: 'consumo_por_orden',
        INGRESARPRODUCTO: 'ingresar_producto',
        INVENTARIO: 'inventario',
        CANCEL: 'modulos_admon',
        INITIAL:'modulos',
      }
    },
    consumo_por_orden: {  
      on: {
        START: 'administracion',
        VERIFICADO: 'verificado',
        CANCEL:'modulos_admon',
        INITIAL:'modulos',
      }
    },
    ingresar_producto: {
      on: {
        START: 'administracion',
        INITIAL:'modulos',
      }
    },
    inventario: {
      on: {
        START: 'administracion',
        CANCEL: 'modulos_admon',
        INITIAL:'modulos',
      }
    },
    dinero: {
      on: {
        START: 'administracion',
        VERIFICADO: 'verificado',
        CANCEL: 'modulos_admon',
        INITIAL:'modulos',
      }
    },
    nequi:{
      on: {
        FOTO: 'foto',
        CANCEL:'ingreso',
        DATOS: 'datos',
        INITIAL:'modulos',
      }
    },
    efectivo:{
      on: {
        DATOS: 'datos',
        CANCEL:'ingreso',
        INITIAL:'modulos',
      }
    },
    sin_cobro:{
      on: {
        FOTO: 'foto',
        DATOS: 'datos',
        CANCEL:'ingreso',
        INITIAL:'modulos',
      }
    },
    nequi_efectivo:{
      on: {
        FOTO: 'foto',
        CANCEL:'ingreso',
        DATOS: 'datos',
        INITIAL:'modulos',
      }
    },
    otra:{
      on: {
        FOTO: 'foto',
        CANCEL:'ingreso',
        DATOS: 'datos',
        INITIAL:'modulos',
      }
    },
    devolucion:{
      on: {
        FOTO: 'foto',
        CANCEL:'ingreso',
        DATOS: 'datos',
        INITIAL:'modulos',
      }
    },
    foto: {
      on: {
        FINALIZAR: 'finalizar',
        DATOS: 'datos',
        CANCEL:'ingreso',
        INITIAL:'modulos',
      }
    },
    clientes: {
      on: {
        CANCEL: 'ingreso',
        INITIAL:'modulos',
      }
    },
    verificado: {
      on: {
        CANCEL: 'modulos_admon',
        MODULOSADMON: 'modulos_admon',
        INITIAL:'modulos',
      }
    },
    finalizar: {
      on: {
        CANCEL: 'ingreso',
        DATOS: 'datos',
        INITIAL:'modulos',
      }
    }
  }
  })    

export default automateMachine;
