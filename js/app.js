//  Campos del formulario
const nombreInput = document.querySelector('#nombre');
const establecimientoInput = document.querySelector('#establecimiento');
const dniInput = document.querySelector('#dni');
const cargoInput = document.querySelector('#cargo');
const direccionInput = document.querySelector('#direccion');
const fechaInput = document.querySelector('#fecha');
const emailInput = document.querySelector('#email');
const asociacionInput = document.querySelector('#asociacion');
const telefonoInput = document.querySelector('#telefono');


// UI
const formulario = document.querySelector('#registro');
const contenedordatos = document.querySelector('#datos');

class Datos {
    constructor(){
        this.datos = [];
    }

    agregarDatos(dato) {
        this.datos = [...this.datos, dato];

        console.log(this.datos);
    }
}


class UI {

    imprimirAlerta(mensaje, tipo ) {
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // Agregar clase en base al tipo de error
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        }else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-contenido'));

        // Quitar la alerta despues de 5 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 5000 );
    }
}

const ui = new UI();
const administrarDatos = new Datos();



// Registrar eventos
eventListeners();
function eventListeners() {
    nombreInput.addEventListener('input', datosRegistro);
    establecimientoInput.addEventListener('input', datosRegistro);
    dniInput.addEventListener('input', datosRegistro);
    cargoInput.addEventListener('input', datosRegistro);
    direccionInput.addEventListener('input', datosRegistro);
    fechaInput.addEventListener('input', datosRegistro);
    emailInput.addEventListener('input', datosRegistro);
    asociacionInput.addEventListener('input', datosRegistro);
    telefonoInput.addEventListener('input', datosRegistro);

    formulario.addEventListener('submit', registro);

}

// Objeto con la informacion del registro
const registroObj = {
    nombre: '',
    establecimiento: '',
    dni: '',
    cargo: '',
    direccion: '',
    fecha: '',
    email: '',
    asociacion: '',
    telefono: ''
}

// Agrega datos al objeto del registro
function datosRegistro(e) {
     registroObj[e.target.name] = e.target.value;

     
}

// Valida y agrega nuevos datos a la clase de registro
function registro(e) {
    e.preventDefault();


// Extrae la informacion del objeto del registro
const { nombre, establecimiento, dni, cargo, direccion, fecha, email, asociacion, telefono } = registroObj;

// validar
if( nombre === '' || establecimiento === '' || dni === '' || cargo === '' || direccion === '' || fecha === '' || email === '' || asociacion === '' || telefono === '') {
      ui.imprimirAlerta('Todos los campos son obligatorios', 'error');

      return;
    
  }

  // generar un id unico
  registroObj.id = Date.now();

  // Creando nuevo dato
  administrarDatos.agregarDatos({...registroObj});

  // Reiniciar el formulario
  formulario.reset();
}

function reiniciarObjeto() {
    registroObj.nombre = '';
    registroObj.establecimiento = '';
    registroObj.dni = '';
    registroObj.cargo = '';
    registroObj.direccion = '';
    registroObj.fecha = '';
    registroObj.email = '';
    registroObj.asociacion = '';
    registroObj.telefono = '';
}