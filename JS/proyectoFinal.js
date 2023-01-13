/*class calzado {
    constructor(marca, modelo, precio, color, stock) {
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
  */
  const IVA = 0.21;
  
  let arreglo_calzado = new Array();
  
  arreglo_calzado.push(new calzado("ADIDAS", "D.O.N ISSUE 3 'SAY CHEESE'", 38500, "Azul", 3));
  arreglo_calzado.push(new calzado("NIKE", "KD 14 'KY-D'", 39000, "Negro", 5));
  arreglo_calzado.push(new calzado("ADIDAS", "DAME 8 '4TH QUARTER KO'", 36000, "Verde Lima", 0));
  arreglo_calzado.push(new calzado("NIKE", "ZOOM FREAK 3 'FREEZING TIME'", 41000, "Blanco", 1));
  arreglo_calzado.push(new calzado("JORDAN", "ZOOM SEPARATE 'MAVS'", 42600, "Azul", 3));
  arreglo_calzado.push(new calzado("NIKE", "KYRIE 8 'FIRE & ICE'", 40000, "Negro", 4));
  arreglo_calzado.push(new calzado("NEW BALANCE", "KAWHI 'POWER SOURCE'", 39800, "Naranja", 2));
  arreglo_calzado.push(new calzado("UNDER ARMOUR","Curry 9 Sesame Street 'Count It'", 42800, "Negro", 3));
  arreglo_calzado.push(new calzado("NIKE", "LEBRON 19 'MINNEAPOLIS LAKERS'", 44500, "Blanco", 3));
  arreglo_calzado.push(new calzado("JORDAN", "Air Jordan 36 'Black Infrared'", 46300, "Negro", 6));
  arreglo_calzado.push(new calzado("ADIDAS", "TRAE YOUNG 1 'PIXELS'", 37800, "Negro", 2));
  arreglo_calzado.push(new calzado("ADIDAS", "HARDEN VOL.6 'HIGHLIGHTER''", 39200, "Celeste", 1));
  
  const listarProductos = function (arreglo) {
    let modelos = "";
    for (let i = 0; i < arreglo.length; i++) {
      modelos = modelos + arreglo[i].mostrarDescripcion() + " \n";
    }
  
    alert("Modelos: \n" + modelos);
  };
  
  const quitarIva = function (precio) {
    return precio - precio * IVA;
  };
  
  let respuesta = prompt(
    "Qué quieres hacer? \n A) Ver todos los modelos \n B) Ordenarlos por precio \n C)Buscar por marca \n D) Ver precios en efectivo"
  ).toUpperCase();
  
  if (respuesta === "A") {
    listarProductos(arreglo_calzado);
  } else if (respuesta === "B") {
    arreglo_calzado.sort(function (a, b) {
      var precioA = a.precio;
      var precioB = b.precio;
      if (precioA < precioB) {
        return -1;
      }
      if (precioA > precioB) {
        return 1;
      }
  
      return 0;
    });
    listarProductos(arreglo_calzado);
  } else if (respuesta === "C") {
    let buscarDeVuelta = false;
  
    do {
      let marcaIngresada = prompt("Ingrese la marca:").toUpperCase();
      const calzadosEncontrados = arreglo_calzado.filter((calzado) => calzado.marca == marcaIngresada);
      console.log("calzadosEncontrados --> ", calzadosEncontrados);
  
      if (calzadosEncontrados && calzadosEncontrados.length !== 0) {
        listarProductos(calzadosEncontrados);
        buscarDeVuelta = false;
      } else {
        alert("Lo sentimos, no trabajamos con esa marca. Por favor, ingrese otra marca.");
        buscarDeVuelta = true;
      }
    } while (buscarDeVuelta);
  } else if (respuesta === "D") {
    const preciosEfvo = arreglo_calzado.map((cal) => {
      return new calzado(
        cal.marca,
        cal.modelo,
        quitarIva(cal.precio),
        cal.color,
        cal.stock);
    });
  
    listarProductos(preciosEfvo);
  } else {
    alert(
      "No ingresaste una opcion válida, refresca el navegador y vuelve a intentar"
    );
  }