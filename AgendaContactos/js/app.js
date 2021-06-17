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
  let divContacto = document.createElement("div");
  let nombre = document.createElement("h3");
  let movil = document.createElement("p");
  let email = document.createElement("p");
  let iconEliminar = document.createElement("span");
  const contactosView = document.getElementById("listado");
//  contactosView.innerHTML = " ";
  //const contactosView = document.getElementById("contactos");

  //contactosView.innerHTML = " "; // limpio en caso exista nuevo datos
  if (localStorage.legth != 0) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const contactos = localStorage.getItem(key);
      const contactosA = JSON.parse(contactos);
      nombre.innerHTML = key;
      movil.innerHTML = contactosA.movil;
      email.innerHTML = contactosA.email;
      iconEliminar.innerHTML = "delete_forever";
      divContacto.classList.add("contactos");
      iconEliminar.classList.add("material-icons", "btnEliminar");
      divContacto.appendChild(nombre);
      divContacto.appendChild(movil);
      divContacto.appendChild(email);
      divContacto.appendChild(iconEliminar);
      iconEliminar.onclick = function() {eliminarContacto(key)};
      contactosView.appendChild(divContacto);

    }
  }
}

getContacto();