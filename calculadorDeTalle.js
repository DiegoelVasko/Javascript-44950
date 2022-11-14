const PULGADA = 2.54;

document.getElementById("par").innerHTML =
  "Para medir la longitud en cm de sus pies correctamente, coloca su pie contra la pared sobre una hoja de papel. Recuerda siempre descalzo y de pie. Sitúa bien el talón contra la pared asegurándote que tiene la planta del pie totalmente plana y recta. Haz una marca donde finaliza el dedo más largo. Mide en cm la distancia desde el final del papel hasta la marca del dedo, en línea recta.";

// ESTO FUNCIONA

function calculadorTalle() {
  document.getElementById("mensaje").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";

  const genero = document.getElementById("genero").value;
  const cm = parseInt(document.getElementById("centimetros").value);

  if (isNaN(cm)) {
    document.getElementById("mensaje").innerHTML =
      "La medida ingresada no es válida, intente de nuevo";
  } else {
    let talleUsa = parseInt((cm - 1) / PULGADA);
    let talleArg = (cm / 2) * 3;
    if (genero === "FEMENINO") {
      talleUsa = parseInt((cm - 1) / PULGADA + 2);
    }

    document.getElementById(
      "resultado"
    ).innerHTML = `Tu número de calzado para ${genero} es:\n Talle Arg ${talleArg}\n Talle USA ${talleUsa}`;
  }
}