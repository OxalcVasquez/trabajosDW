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
}

function getContacto() {
  const contactos = JSON.parse(localStorage.getItem("contactos"));
  const contactosView = document.getElementById('contactos');
  contactosView.innerHTML = ' '; // limpio en caso exista nuevo datos
  for (let i = 0; i < contactos.length; i++) {
    const nombre = contactos[i].nombre;
    const movil = contactos[i].movil;
    const email = contactos[i].email;
    contactosView.innerHTML += `
    <div class="contacto-card">
      <div class="card-body">
        <p>${nombre} - ${movil} - ${email} </p>
      </div>
    </div>`;

  }

}
getContacto();
