let cars = document.querySelectorAll('.add-car'); //por selector de clase
//agregando el evento
let productos =  [
    {
      nombre : 'Polo Algodon',
      precio : 15,
      inCar :0
    },
    {
      nombre : 'Polo Rojo',
      precio : 20,
      inCar :0
    },
    {
      nombre : 'Polo Plomo',
      precio : 10,
      inCar :0
    },
    {
      nombre : 'Polo Negro',
      precio : 15,
      inCar :0
    }
]

for (let i=0; i< cars.length; i++){
  cars[i].addEventListener('click',()=> {
    numeroCars(productos[i]);

  })
}

function cargarNumeroCars() {
  let numeroProductos = localStorage.getItem("numeroCars");
   if (numeroProductos) {
     document.querySelector(".car span").textContent = numeroProductos;
   }

}

function numeroCars(producto){
  console.log(producto);
  let numeroProductos = localStorage.getItem('numeroCars');//obtiene el numero
  // numerosProducto
  numeroProductos = parseInt(numeroProductos);
  if (numeroProductos) {
    // si existe
    localStorage.setItem("numeroCars", numeroProductos + 1);
    document.querySelector(".car span").textContent = numeroProductos +1;
  } else {
    localStorage.setItem("numeroCars", 1);
    document.querySelector('.car span').textContent = 1;
  }
  setItem

}

cargarNumeroCars();