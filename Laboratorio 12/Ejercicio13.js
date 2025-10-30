function procesarTexto(texto) {
  function limpiarEspacios(str) {
    return str.trim().replace(/\s+/g, ' ');
  }

  function contarPalabras(str) {
    if (str === "") return 0; 
    return str.split(" ").length;
  }

  const textoLimpio = limpiarEspacios(texto);
  const totalPalabras = contarPalabras(textoLimpio);
  
  return {
    textoLimpio,
    totalPalabras
  };
}

console.log("--- CONTADOR DE PALABRAS ---");
let oracionIngresada = prompt("Ingrese una oración:");
console.log("Oración ingresada: " + oracionIngresada);
let oracionProc = procesarTexto(oracionIngresada);
console.log("Oración procesada (limpia): " + oracionProc.textoLimpio);
console.log("Cantidad de palabras: " + oracionProc.totalPalabras);