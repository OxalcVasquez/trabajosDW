document.getElementById("formAgenda").addEventListener("submit", saveContacto);

function saveContacto(e) {
  const nombre = document.getElementById("nombre").value;
  const movil = document.getElementById("movil").value;
  const email = document.getElementById("email").value;
  const contacto = {
    nombre,
    movil,
    email,
  };

  console.log(nombre.value);

     if (localStorage.getItem("contactos") === null) {
       const contactos = [];
       contactos.push(contacto);
       localStorage.setItem("contactos", JSON.stringify(contactos));
     } else {
       //obtener los contactos antes guardados
       const contactos = JSON.parse(localStorage.getItem("contactos"));
       contactos.push(contacto);
       localStorage.setItem("contactos", JSON.stringify(contactos));
       document.getElementById("formAgenda").reset();
       e.preventDefault(); //no se refresque
     }
   getContacto();

  localStorage.setItem(nombre, JSON.stringify(datos));
  document.getElementById("nombre").value = "";
  document.getElementById("movil").value = "";
  document.getElementById("email").value = "";


}
function recuperarContacto() {
  console.log("hol");
  const contactos = JSON.parse(localStorage.getItem("contactos"));
  const nombre = document.getElementById("nombre").value;
  localStorage.getItem(nombre);
  document.getElementById("movil").value = localStorage.getItem(nombre);
  for (let i=0;i<contactos.length;i++){
  if (contactos[i].nombre == nombre) {
    document.getElementById("movil").value = contactos[i].movil;
    document.getElementById("email").value = contactos[i].email;
  }
}
}

function eliminarContacto(nombre){
  const contactos = JSON.parse(localStorage.getItem("contactos"));
  for (let i=0;i<contactos.length;i++){
    if (contactos[i].nombre == nombre) {
      contactos.splice(i, 1); // splice quitar un dato del arreglo el indice y el numero
    }
  }
  localStorage.setItem("contactos", JSON.stringify(contactos));
  getContacto();
}

function recuperarDatos() {
  const nombre = document.getElementById("nombre").value;
  localStorage.getItem(nombre);
  document.getElementById("movil").value = localStorage.getItem(nombre);
  document.getElementById("email").value = localStorage.getItem(nombre);
}


function eliminarTodo() {
  localStorage.clear();
  getContacto();
}

function getContacto() {
  const contactos = JSON.parse(localStorage.getItem("contactos"));
  const contactosView = document.getElementById('contactos');
  contactosView.innerHTML = ' '; // limpio en caso exista nuevo datos
  if(contactos!=null){
     for (let i = 0; i < contactos.length; i++) {
       const nombre = contactos[i].nombre;
       const movil = contactos[i].movil;
       const email = contactos[i].email;
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
