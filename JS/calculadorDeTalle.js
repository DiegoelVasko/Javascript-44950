/*const zapatillas = [
  {modelo: "adidas one", genero: "FEMENINO", talle: 38},
  {modelo: "Nike Running", genero: "MASCULINO", talle: 44},
  {modelo: "Puma deluxe", genero: "MASCULINO", talle: 42},
  {modelo: "adidas one", genero: "MASCULINO", talle: 45},
  {modelo: "adidas running", genero: "FEMENINO", talle: 35},
  {modelo: "Puma running", genero: "FEMENINO", talle: 40}, 
  {modelo: "adidas one", genero: "FEMENINO", talle: 34},
  {modelo: "Puma deluxe", genero: "MASCULINO", talle: 39},
  {modelo: "adidas one", genero: "MASCULINO", talle: 43.5},
  {modelo: "adidas running", genero: "INFANTIL", talle: 34},
  {modelo: "Nike Running", genero: "INFANTIL", talle: 32},
  {modelo: "Puma running", genero: "FEMENINO", talle: 40},
  {modelo: "Nike Running", genero: "INFANTIL", talle: 29},
]*/

document.getElementById("par").innerHTML =
  "Para medir la longitud en cm de sus pies correctamente, coloca su pie contra la pared sobre una hoja de papel. Recuerda siempre descalzo y de pie. Sitúa bien el talón contra la pared asegurándote que tiene la planta del pie totalmente plana y recta. Haz una marca donde finaliza el dedo más largo. Mide en cm la distancia desde el final del papel hasta la marca del dedo, en línea recta.";

function calculadorTalle() {
  document.getElementById("mensaje").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  let mensajeStock= "";
  const GENERO = document.getElementById("genero").value;
  const CM = Number(document.getElementById("centimetros").value);

  if (isNaN(CM)) {
    document.getElementById("mensaje").innerHTML =
      "La medida ingresada no es válida, intente de nuevo";
  } else {    
    let talleUsa= Math.round((CM +2 *0.847) / 0.847 -24);
    let talleArg = Math.round((CM + 2 * 0.0667) / 0.667) ;
      if (GENERO === "FEMENINO") {
        let talleUsa= Math.round((CM + 2 * 0.847) / 0.847 -23);
        let talleArg =Math.round((CM + 2 * 0.0667) / 0.667);
      } else if (GENERO === "INFANTIL"){
        let talleArg= Math.round((CM * 1.08) / 0.667);
        let talleUsa= Math.round(CM * 1.08 / 0.847 - 11.5 + 0.4);
         
      }
    /*for (let i= 0; i < zapatillas.length; i++){
      if(zapatillas[i].genero === GENERO && zapatillas[i].talle === talleArg) {
        mensajeStock= "Hay Stock";
        break;
      }  
      mensajeStock= "No hay Stock";
    }*/  
    document.getElementById("resultado").innerHTML = `Tu número de calzado para ${GENERO} es:<br> Talle Arg ${talleArg}<br> Talle USA ${talleUsa}. ${mensajeStock}`;
}
  }