class carrito1{

    leerTotal(){
        document.getElementById("stotal").innerHTML = localStorage.totalCarrito;
        document.getElementById("total").innerHTML = localStorage.totalCarrito;
    }

    obtenerEvento(e) {
        e.preventDefault();
        let tranporte;
        let re = 0;
        let subtotal = localStorage.totalCarrito;
        if (e.target.classList.contains('movil')) {
            tranporte = e.target.value;
            document.getElementById("transp").innerHTML = "S/. " + tranporte;
            re = Number(tranporte) + Number(subtotal);
            document.getElementById("total").innerHTML = re.toFixed(2);

            
            // id = producto.querySelector('a').getAttribute('data-id');
            
            // cantidad = producto.querySelector('input').value;
            // console.log(cantidad);
            // let actualizarMontos = document.querySelectorAll('#stotal');
            // productosLS = this.obtenerProductosLocalStorage();
            // productosLS.forEach(function (productoLS, index) {
            //     if (productoLS.id === id) {
            //         productoLS.cantidad = cantidad;                    
            //         actualizarMontos.innerHTML = Number(cantidad * productosLS[index].precio);
            //         console.log(productosLS[index].precio);
                    
            //     }    
            // });
            // localStorage.setItem('productos', JSON.stringify(productosLS));
            
        }
        else {
            console.log("click afuera");
        }
    }

}

const total = new carrito1();
const pagar = document.getElementById('btn-pagar');
const radio = document.getElementById('cuad-envio');


cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', total.leerTotal());
    pagar.addEventListener('click',procesarPago);
    radio.addEventListener('change', (e) => { total.obtenerEvento(e) });
}

function procesarPago() {
    Swal.fire({
        type: 'success',
        title: 'Compra realizada!!',
        text: 'Se le redijirara al menú',
        showConfirmButton: false,
        timer: 3000
    }).then(function () {
        window.location = "home.html";
    })
    localStorage.clear();
      
}

