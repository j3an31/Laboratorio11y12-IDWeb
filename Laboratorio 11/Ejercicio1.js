let sumaNotas = 0;

for(let i=1;i<=5;i++) {
    let notaValida = false;
    let notaIngresada;
    do {
        notaIngresada = parseFloat(prompt("Ingrese la nota " + (i) + ":"));
        console.log("Nota ingresada: " + notaIngresada);
        if(notaIngresada<0 || notaIngresada>20) {
            console.log("¡Nota inválida! Ingrese otra nota");
            notaValida = true;
        }
    } while(notaValida);
    sumaNotas+=notaIngresada;
}

let promNotas = sumaNotas / 5;
console.log("Promedio de las notas ingresadas: " + promNotas.toFixed(2));


