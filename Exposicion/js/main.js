/*document -> raiz
document.body -> Accedemos al body
*/

/*Acceder */
/*Por nombre de etiqueta */

var caja = document.getElementsByTagName('div');
//caja[0].textContent = 'Hola';
//caja[0].innerHTML = '<h1>Hola</h1>' //incluyendo contenido HTML

/*Por clase */
//var caja = document.getElementsByClassName('caja');


/*Por ID */

var caja1 = document.getElementById('caja1');
//caja1.innerHTML = '<h1>Hola</h1>'


//Agregar nodos

//1.- Crear el nodo(elemento)
var caja5  = document.createElement('div');
// 2.- Crear uno nodo de texto
var contenido = document.createTextNode('Caja 5');
// 3.- Añadir el nodo de texto al elemento
caja5.appendChild(contenido);// incrustar dentro el texto
//4.- Agregar atributos a los caja
caja5.setAttribute('class', 'caja negro');
// 5.- Agregar el elemento al documento
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja5);


//Modificar Nodos
//Modificar ID y Clase
caja5.id='caja5' // Poner id
//caja5.className = 'caja verde';

//Como obtener el padre del nodo

var padre = caja[0].parentNode; //--> probamos en consola

//Posicionar nodo antes de otro
//insertar (elemento,elementoDondeSeraAntes)
//padre.insertBefore(caja5,caja1);

//Ejercicio posicionar antes de la tres
//Solución
//padre.insertBefore(caja5, caja3);
//padre.insertBefore(caja5, caja1);

//Remplazar nodo
//padre.replaceChild(caja5,caja1)

//Eliminar nodo
//padre.removeChild(caja4);
//padre.removeChild(caja[3]);//--> Probar en navegador