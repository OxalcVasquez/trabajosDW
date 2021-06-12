const cards = document.getElementById('cards');
const items = document.getElementById("items");
const footer = document.getElementById("footer");
const templateCard = document.getElementById("template-card").content;
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;
const fragment = document.createDocumentFragment();
let carrito ={};
// Crea un nuevo DocumentFragment vacio, dentro del cual un nodo del DOM puede //ser adicionado para construir un nuevo arbol DOM fuera de pantalla.
cards.addEventListener('click',e =>{
  addCarrito(e);

})

items.addEventListener("click", (e) => {
  btnAccion(e);
});

document.addEventListener("DOMContentLoaded", () => {
  fecthData();
  if(localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'));
    llenarCarrito();
  }
});
//accediendo al api de JSON
const fecthData = async() => {
  try {
    const res = await fetch('api.json');
    const data = await  res.json();
    console.log(data);
    llenarCard(data);
  }catch (error)
  {
    console.log(error);
  }
}

const llenarCard = data => {
  // se usa forEach porque se trabaja con JSON
  data.forEach(producto => {
    templateCard.querySelector('h5').textContent = producto.title;
    templateCard.querySelector("p").textContent = producto.precio;
    templateCard.querySelector("img").setAttribute('src',producto.thumbnailUrl);
    templateCard.querySelector("img").setAttribute('src',producto.thumbnailUrl);
    templateCard.querySelector(".btn-dark").dataset.id =producto.id;
    const clone = templateCard.cloneNode(true)//clon
    fragment.appendChild(clone)

  });
  cards.appendChild(fragment);
}

const addCarrito = e=> {
 //si contiene ese elemento(boton)
  if (e.target.classList.contains('btn-dark')){
    setCarrito(e.target.parentElement);// obtiene todo el div de card
  }
  e.stopPropagation();//detener cualquier otro evento, debido que se esta heredando

}
const setCarrito = (objeto) => {

  const producto = {
    id: objeto.querySelector(".btn-dark").dataset.id,
    title: objeto.querySelector("h5").textContent,
    precio: objeto.querySelector("p").textContent,
    cantidad :1
  };
  // si tiene esa propiedad : se estara duplicando
  if(carrito.hasOwnProperty(producto.id)){
    producto.cantidad = carrito[producto.id].cantidad + 1
  }

  carrito[producto.id] = {...producto};//como una copia
  llenarCarrito();

};

const llenarCarrito = () => {
  // console.log(carrito);
  items.innerHTML = '';
  Object.values(carrito).forEach(producto =>{
    templateCarrito.querySelector("th").textContent = producto.id;
    templateCarrito.querySelectorAll("td")[0].textContent = producto.title;
    templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
    templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
    templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;
    templateCarrito.querySelector("span").textContent = producto.cantidad*producto.precio;

    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  })
  items.appendChild(fragment);

  llenarFooter();
localStorage.setItem('carrito',JSON.stringify(carrito));
};


const llenarFooter = () =>{
  footer.innerHTML='';
  //carrito vacio
  if(Object.keys(carrito).length ===0) {
     footer.innerHTML = `
     <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
     `;
     return;
  }

  const nCantidad = Object.values(carrito).reduce((acc,{cantidad}) => acc+cantidad ,0)

  const nPrecio = Object.values(carrito).reduce(
    (acc, { cantidad,precio }) => acc + cantidad * precio,0);

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad;
  templateFooter.querySelector('span').textContent = nPrecio;

  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);
  footer.appendChild(fragment);

  const btnVaciar = document.getElementById('vaciar-carrito');
  btnVaciar.addEventListener('click', ()=>{
    carrito ={}
    llenarCarrito()
  })

}

const btnAccion = (e) => {
  //Aumentar
  if (e.target.classList.contains("btn-info")) {
    const producto = carrito[e.target.dataset.id];
    producto.cantidad++;
    carrito[e.target.dataset.id] = { ...producto };
    llenarCarrito();
  }

  if (e.target.classList.contains("btn-danger")) {
    const producto = carrito[e.target.dataset.id];
    producto.cantidad--;
    carrito[e.target.dataset.id] = { ...producto };
    if(producto.cantidad===0){
      delete carrito[e.target.dataset.id];
    }
    //carrito[e.target.dataset.id] = { ...producto };
    llenarCarrito();
  }

  e.stopPropagation(); //detener cualquier otro evento, debido que se esta heredando
};