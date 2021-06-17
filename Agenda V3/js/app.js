function guardarContacto(){
    const nombre = document.getElementById("nombre").value;
    const movil = document.getElementById("movil").value;
    const email = document.getElementById("email").value;

    const contacto = {
       movil,
       email,
    };


    localStorage.setItem(nombre, JSON.stringify(contacto))
    document.getElementById("nombre").value="";
    document.getElementById("movil").value="";
    document.getElementById("email").value="";
    getContacto();
}

function recuperarContacto(){
    const nombre = document.getElementById("nombre").value;
    const nombre1 = localStorage.getItem(nombre);
    const contacto = JSON.parse(nombre1);
    document.getElementById("movil").value = contacto.movil;
    document.getElementById("email").value = contacto.email;

}

function eliminarContacto(nombre) {
    localStorage.removeItem(nombre);
     getContacto();

}



function eliminarTodo(){
    localStorage.clear();
    getContacto();
}


function getContacto() {
  const contactosView = document.getElementById("contactos");
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
      <div class="contacto-card">
        <div class="card-body">
          <p>${nombre}  -  ${movil}  -  ${email} </p>
          <a class="btnEliminar" onclick="eliminarContacto('${nombre}')">Eliminar </a>
        </div>
      </div>`;
    }
  }
}

getContacto();