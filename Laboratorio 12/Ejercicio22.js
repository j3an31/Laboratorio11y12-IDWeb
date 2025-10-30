function descargarArchivo(url, callback) {
  console.log("Descargando...");
  setTimeout(() => {
    callback(url);
  }, 2000); 
}

function mostrarCompletado(url) {
  console.log(`Descarga completa de ${url}`);
}

console.log("--- SIMULACIÓN DE DESCARGA ---");
descargarArchivo("https:ejemplo.com", mostrarCompletado);