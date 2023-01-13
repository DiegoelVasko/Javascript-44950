/** CARRITO DE COMPRAS **/

//¿Qué funcionalidad debe tener un carrito de compras?

//1) Mostrar productos en el HTML de forma dinámica. 
//2) Agregar productos al carrito. 
//3) Evitar la carga de productos repetidos en el carrito. 
//4) Mostrar el carrito en el HTML de forma dinámica. 
//5) Eliminar productos del carrito. 
//6) Calcular el total de la compra. 
//7) Vaciar el carrito. 
//8) Guardar el carrito en el localStorage.

//////////////////////////////


   
 
 


//Crear un Array con todo nuestro catálogo de productos: 



//Array del Carrito de compras: 

let carrito = [];

console.log(productos);

/** CARGAR CARRITO DESDE EL LOCALSTORAGE: **/
//Si hay algo en el localStorage, lo cargamos en el carrito. 

if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}



const contenedorProductos = document.getElementById("contenedorProductos");




        //Agregar productos al carrito: 


//Función agregar al carrito: 

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
        
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
        //Trabajamos con el localStorage: 
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    calcularTotal();
}

mostrarProductos();

//MOSTRAR EL CARRITO DE COMPRAS. 

const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click",  () => {
    mostrarCarrito();
})

//Función para mostar el carrillllooo:

const mostrarCarrito = () => {
    //que trucazo!
    contenedorCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                        <div class = "card">
                            <img src = "${producto.img}" class = "card-img-top imgProductos" alt = " ${producto.nombre}">
                            <div class ="card-body">
                                <h5> ${producto.marca}, ${producto.modelo} </h5>
                                <p> ${producto.precio} </p>
                                <p> ${producto.cantidad} </p>
                                <button class= "button" id ="eliminar${producto.id}" >Eliminar producto</button>
                            </div>
                        </div>`

        contenedorCarrito.appendChild(card);

        //Eliminar productos del carrito:

        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}

//Función que elimina el producto del carrito: 

const eliminarDelCarrito = (id) => {
    const producto = carrito.find( producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);

    mostrarCarrito();

    //localStorage: 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//VACIAMOS TODO EL CARRITO DE COMPRAS: 

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    //localStorage: 
    localStorage.clear();
}

//Mostramos mensaje con el total de la compra: 

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: $${totalCompra}`;
}