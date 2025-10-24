let sumaNotas = 0;
let notaIngresada;
let notaInvalida

for(let i=1;i<=5;i++) {
    do {
        notaInvalida = false;
        notaIngresada = parseFloat(prompt("Ingrese la nota " + (i) + ":"));
        console.log("Nota ingresada: " + notaIngresada);
        if(notaIngresada<0 || notaIngresada>20) {
            console.log("¡Nota inválida! Ingrese otra nota");
            notaInvalida = true;
        }
    } while(notaInvalida);
    sumaNotas+=notaIngresada;
}

let promNotas = sumaNotas / 5;
console.log("Promedio de las notas ingresadas: " + promNotas.toFixed(2));