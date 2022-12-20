class calzado {
  constructor(id, marca, modelo, precio, color, stock) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.color = color;
    this.stock = stock;
  }

  mostrarDescripcion() {
    return this.marca + " " + this.modelo + " $" + this.precio;
  }
}

let favoritos = new Array();

favoritos.push(
  new calzado(1, "ADIDAS", "D.O.N ISSUE 3 'SAY CHEESE'", 38500, "Azul", 3)
);
favoritos.push(new calzado(2, "NIKE", "KD 14 'KY-D'", 39000, "Negro", 5));
favoritos.push(
  new calzado(3, "ADIDAS", "DAME 8 '4TH QUARTER KO'", 36000, "Verde Lima", 0)
);
favoritos.push(
  new calzado(4, "NIKE", "ZOOM FREAK 3 'FREEZING TIME'", 41000, "Blanco", 1)
);

// inicializo con favoritos en el localstorage
localStorage.setItem("favoritos", JSON.stringify(favoritos));

// agarro el elemento html donde quiero que aparezcan los productos
let seccionListadoFavoritos = document.getElementById("lista-de-favoritos");

renderizarListadoDeFavoritos();

// funciones
function removerDeFavoritos(id) {
  const favoritosEnStorage =
    JSON.parse(localStorage.getItem("favoritos")) || [];

  // me quedo con un arreglo que tenga los elementos que deben permanecer
  const favoritosActualizados = favoritosEnStorage.filter((calzado) => {
    return calzado.id != id;
  });

  // actualizo localstorage con los elementos que quedan
  localStorage.clear();
  localStorage.setItem("favoritos", JSON.stringify(favoritosActualizados));

  // agarro el elemento que tiene al producto en el DOM
  let elementoAEliminarDeLaVista = document.getElementById(
    `calzado-favorito-${id}`
  );

  // remuevo el elemento del DOM
  seccionListadoFavoritos.removeChild(elementoAEliminarDeLaVista);

  if (favoritosActualizados.length === 0) {
    renderizarListadoDeFavoritos();
  }
}

function renderizarListadoDeFavoritos() {
  seccionListadoFavoritos.innerHTML = "";

  let calzadosFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // verifico que haya algún calzado cargado en favoritos
  if (calzadosFavoritos && calzadosFavoritos.length > 0) {
    // por cada calzado favorito lo dibujo en la pantalla
    for (const calzado of calzadosFavoritos) {
      let calzadoArticle = document.createElement("article");

      calzadoArticle.setAttribute("class", "calzado");
      calzadoArticle.setAttribute("id", `calzado-favorito-${calzado.id}`);

      let descripcionCalzadoContainer = document.createElement("div");
      descripcionCalzadoContainer.innerHTML = `
      
        <h2>${calzado.marca} ${calzado.modelo}</h2>
        <button id="btn-favorito-${calzado.id}" type="button" class="btn btn-primary">Quitar</button>
      
    `;

      calzadoArticle.appendChild(descripcionCalzadoContainer);

      seccionListadoFavoritos.appendChild(calzadoArticle);

      document.getElementById(`btn-favorito-${calzado.id}`).onclick = () =>
        removerDeFavoritos(`${calzado.id}`);
    }
  } else {
    seccionListadoFavoritos.innerHTML = `<h2>No tienes ningún producto seleccionado como favorito.</h2><a href="../index.html">Ir a inicio</a>`;
  }
}
