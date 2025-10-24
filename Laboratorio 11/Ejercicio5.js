let billetes100, billetes50, billetes20, billetes10, resto;
let repetir;

do {
    repetir = false
    console.log("--- Cajero Automático ---");
    let monto = parseInt(prompt("Ingrese el monto a retirar:"));
    console.log("Monto ingresado: " + monto + " soles");
    billetes100 = parseInt(monto/100);
    resto = monto%100;
    billetes50 = parseInt(resto/50);
    resto %= 50;
    billetes20 = parseInt(resto/20);
    resto %= 20;
    billetes10 = parseInt(resto/10);
    console.log("--- Billetes Recibidos ---");
    console.log("Billetes de 100 soles: " + billetes100
        +"\nBilletes de 50 soles: " + billetes50
        +"\nBilletes de 20 soles: " + billetes20
        +"\nBilletes de 10 soles: " + billetes10
    );
    let respuesta = prompt("¿Desea ingresar otro monto? (SÍ / NO)");
    console.log("Respuesta: " + respuesta);
    if(respuesta.toLowerCase() === "sí") {
        repetir = true;
    } else {
        console.log("Cerrando el sistema...");
    }
} while(repetir)   