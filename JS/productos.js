
    class Producto {
        constructor(id, marca, modelo, precio, descripcion, img, stock) {
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.img = img;
            this.descripcion = descripcion,
            this.stock = stock;
            this.cantidad = 1 
            
        }
    }
    
    const producto1 = new Producto(1, "ADIDAS", "D.O.N ISSUE 3 'SAY CHEESE'", 38500,"La tercera zapatilla exclusiva de Donovan Mitchell de ADIDAS Basketball es una celebración del viaje de Spida para convertirse en uno de los mejores jugadores del juego. El don. El número 3 destaca los capítulos del camino de Donovan hacia la grandeza. Desde los sueños de la infancia hasta el estatus de superestrella, estas zapatillas de baloncesto para jóvenes destacan el ascenso de Donovan Mitchell a la cima","..multimedia/adidas_don_issue_3_1.jpg" ,3);
    const producto2 = new Producto(2, "NIKE", "KD 14 'KY-D'", 39000, "Kevin Durant acecha en el ala, esperando al momento perfecto para atacar y abrirse camino entre la defensa. Las KD14 están diseñadas para ayudar a los jugadores versátiles e implacables como KD a mantener la frescura durante todo el partido. El tejido de malla multicapa y la correa del mediopié ayudan a reducir el movimiento del pie dentro de la zapatilla. La amortiguación Zoom Air completa y la espuma Cushlon ofrecen un gran retorno de la energía para disfrutar de un rendimiento duradero." , "multimedia/nike_kd14_lime_glow_1.jpg", 5);
    const producto3 = new Producto(3, "ADIDAS", "DAME 8 '4TH QUARTER KO'",36000, "Los campeones se forjan bajo el aro. Damian Lillard traslada a la cancha su estilo de superestrella. Esta zapatilla de Dame y adidas Baloncesto refleja la pasión del jugador que ya desde niño apuntaba maneras y hoy ha llegado a la cima del deporte mundial a base de esfuerzo y dedicación. Luce un emblema de 'Knockout Champ' en la parte posterior para dejar claro al rival quién es el campeón.","..multimedia/adidas_dame_8_1.jpg" ,0);
    const producto4 = new Producto(4, "NIKE", "ZOOM FREAK 3 'FREEZING TIME'", 41000, "Giannis combina su juego atlético con grandes zancadas, fintas de salida y la capacidad de jugar en cualquier posición: nadie se interpone en su camino a canasta. Las Zoom Freak 3 le permiten aprovechar al máximo sus habilidades únicas y maximizar su impacto en el partido.La amortiguación y el retorno de energía, la sujeción lateral y la tracción multidireccional ayudan a los jugadores multidimensionales, como Giannis, a crear espacio y mantener el control", "multimedia/nike_zoom_freak_3_1.jpg",1);
    const producto5 = new Producto(5, "JORDAN", "ZOOM SEPARATE 'MAVS'", 42600, "El step-back fue el movimiento de inspiración para la Jordan Zoom Separate. Un diseño liviano y de corte bajo diseñado para ayudar a tomar el control de la cancha. La amortiguación es más firme en el exterior del pie y más suave en el interior, por lo que puedes presionar con fuerza contra el suelo mientras te inclinas para cambiar de dirección. La unidad Zoom Air te ayuda a separarte del defensor para tener una vista clara de la canasta", "multimedia/jorda_zoom_separate_mavs_1.jpg" , 3);
    const producto6 = new Producto(6, "NIKE", "KYRIE 8 'FIRE & ICE'", 40000, "Juega con el estilo y la chispa de una estrella. Kyrie Irving ha confeccionado sus zapatillas para brindar flexibilidad y un ajuste ceñido, de modo que puedas cruzar y cambiar de dirección rápidamente en la cancha", "multimedia/nike_kyrie_8_1.jpg", 4);
    const producto7 = new Producto(7, "NEW BALANCE", "KAWHI 'POWER SOURCE'",39800, "Diseñada con el dos veces campeón de la NBA y MVP de las Finales de la NBA, Kawhi Leonard, la KAWHI de New Balance se ha creado para jugar en cualquier posición, al mismo tiempo que incorpora detalles diseñados por Kawhi, suficientemente duraderas para mantener tu estilo de juego independiente, y suficientemente suaves para llevarlas en casa.", "multimedia/nb_kawhi_bbklsqua_1.jpg", 2);
    const producto8 = new Producto(8, "UNDER ARMOUR", "Curry 9 Sesame Street 'Count It'", 42800, "Las Curry 9 se basan en el éxito de las Curry Flow 8. La nueva tecnología superior de baloncesto de Under Armour que mejora la estabilidad del pie. UA Warp funciona en conjunto con UA Flow, con cintas de soporte que bloquean el pie en la entresuela UA Flow al tiempo que permiten un movimiento natural.", "multimedia/nb_kawhi_bbklsqua_1.jpg", 3);
    const producto9 = new Producto(9, "NIKE", "LEBRON 19 'MINNEAPOLIS LAKERS'", 44500, "Las LeBron 19 canalizan la energía con un ajuste firme y un sistema de amortiguación actualizado. La funda interior ceñida se combina con un revestimiento esculpido por el que entran los cordones para evitar que el pie se mueva dentro de las zapatillas.Las almohadillas integradas en la lengüeta y la zona del tobillo contribuyen a reducir el peso, mantener el tobillo alineado y dar al jugador la seguridad y la confianza que necesita para darlo todo cuando el partido está en juego.", "multimedia/nike_lebron_19_1.jpg", 3);
    const producto10 = new Producto(10, "JORDAN", "Air Jordan 36 'Black Infrared'", 46300,"Corre rápido y ligero con las Air Jordan XXXVI, la nueva expresión de ligereza y velocidad de la franquicia.", "multimedia/air_jordan_36_black_infrared_1.jpg", 6);
    const producto11 = new Producto(11, "ADIDAS", "TRAE YOUNG 1 'PIXELS'",37800, "La Trae Young 1 combina la apariencia inigualable y el estilo de juego único de Trae con la máxima agilidad, contención y comodidad. Cada combinación de colores de la colección busca capturar el estilo y la personalidad distintivos de Young al mismo tiempo que proporciona las mejores tecnologías. Este producto está elaborado con contenido reciclado ayudando a acabar con los residuos plásticos y es que el 20% de las piezas utilizadas para hacer la parte superior se fabrican con un mínimo de 50% de contenido reciclado.","multimedia/adidas_trae_young_2_pixels_1.jpg", 2);
    const producto12 = new Producto(12, "ADIDAS", "HARDEN VOL.6 'HIGHLIGHTER'", 39200, "Golpea cuando tu oponente menos lo espere. Conduce hasta el aro, sube desde lo más profundo y deja a los defensores a tu paso, como James Harden. Una entresuela Boost proporciona el retorno de energía que necesita, desde el pitido inicial hasta los últimos segundos agotadores de tiempo extra. Las bandas en el antepié y el talón brindan una sensación de seguridad durante todo el juego","multimedia/adidas_harden_vol6_1.jpg",1);

//Array de productos    
    const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12];    

//Creamos el array del Carrito de compras: 

let carrito = [];
console.log(carrito);

/** CARGAR CARRITO DESDE EL LOCALSTORAGE: **/
//Si hay algo en el localStorage, lo cargamos en el carrito. 

if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

//Función que me muestra los productos: 
    const contenedorProductos = document.getElementById("contenedorProductos");


const mostrarProductos = () => {
    productos.forEach(producto => {
        const art = document.createElement("article");
        art.classList.add("calzado");
        art.innerHTML = `
                        <div>
                            <img src = ${producto.img} >
                        </div>
                        <div>
                            <h2> ${producto.marca}, ${producto.modelo}</h2>
                            <p> ${producto.descripcion}</p>
                            <p>U$S ${producto.precio} </p>
                            <button class= "button" id = "button${producto.id}" >Agregar a Mis Compras</button>
                        </div>
                        `

        contenedorProductos.appendChild(art);

        //Agregar productos a carrito: 

        const button = document.getElementById(`button${producto.id}`);
        button.addEventListener("click", () => {
            agregarAlCarrito(producto.id);

            Toastify({
                text: "Producto agregado",
                duration: 3000,
                dismiss: 8000,
                gravity: "bottom",
                position: "right",
                destination: "https://www.google.com",
                style:
                {
                    background: "linear-gradient(to right, #b7950b, #fdebd0)",
                }
            }).showToast();
        })
    })
}

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
                                <button class= "btn colorBoton" id ="eliminar${producto.id}" >Eliminar producto</button>
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
