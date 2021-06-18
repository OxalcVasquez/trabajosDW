function guardarContacto(){
    const nombre = document.getElementById("nombre").value;
    const movil = document.getElementById("movil").value;
    const email = document.getElementById("email").value;
    if (
      nombre.length === 0 ||
      movil.length === 0 ||
      email.length === 0
    ) {
      alert("Por favor complete todos los campos");
    } else {
      const contacto = {
        movil,
        email,
      };

      localStorage.setItem(nombre, JSON.stringify(contacto));
      document.getElementById("nombre").value = "";
      document.getElementById("movil").value = "";
      document.getElementById("email").value = "";
      alert("Se guardo el contacto correctamente");
    }



    // getContacto();
  getContacto();

}


function recuperarContacto(){
    const nombre = document.getElementById("nombre").value;
    const nombre1 = localStorage.getItem(nombre);
    if(nombre1 === null){
     alert('El contacto ingresado no se encuentra registrado');
    }else{
       const contacto = JSON.parse(nombre1);
       console.log(nombre1);
       document.getElementById("movil").value = contacto.movil;
       document.getElementById("email").value = contacto.email;

    }


}

function eliminarContacto(nombre) {
    localStorage.removeItem(nombre);
  alert("El contacto "+ nombre + " ha sido correctamente eliminado");
  getContacto();

}


function eliminarTodo(){
    localStorage.clear();
  getContacto();
  alert("Se eliminaron todos los contactos");

}

function getContacto() {
  const contactosView = document.getElementById("listado");
  contactosView.innerHTML = " "; // limpio en caso exista nuevo datos
  if (localStorage.legth != 0) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const contactos = localStorage.getItem(key);
      const contactosA = JSON.parse(contactos);
      const nombre = key;
      const movil = contactosA.movil;
      const email = contactosA.email;
      contactosView.innerHTML += `
      <div class="contactos">
        <h3>${nombre}</h3>
        <p>${movil}</p>
        <p>${email}</p>
        <i class="material-icons btnEliminar" onclick="eliminarContacto('${nombre}')">
          delete_forever
        </i>
      </div>`;
    }
  }
}



getContacto();