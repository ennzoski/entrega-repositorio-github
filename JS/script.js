/* Ecommerce de calcetines compresivos - Colores disponibles a la venta */

function saludo(mensaje){
    alert("Gracias por visitar Calcetines Compresivos" + mensaje)
}

saludo("")

alert("Estos colores de calcetines tenemos disponibles: \n - Blanco $5.000 \n - Verde $4.500 \n - Azul $6.000 \n Presione ACEPTAR para continuar con la compra. \n Cuando ya no quiera comprar más escriba ESC.")

function Productos(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}   

let producto1 = new Productos ("Blanco", 5000);
let producto2 = new Productos ("Verde", 4500);
let producto3 = new Productos ("Azul", 6000);

let precioTotal = 0

function calcularPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

let elegirColor = prompt("¿Qué color de calcetín le gustaría comprar? \n Si no desea comprar escriba ESC para salir.")
while(elegirColor.toUpperCase() != "ESC"){
    let cantidadCalcetines = prompt("¿Cuántos pares de color " + elegirColor + " le gustaría comprar?")
    if(elegirColor.toUpperCase() == "BLANCO"){
        let totalBlanco = alert("El total a pagar de calcetines blancos es: " + cantidadCalcetines * producto1.precio)
        calcularPrecio(cantidadCalcetines, producto1.precio)
    }
    else if(elegirColor.toUpperCase() == "VERDE"){
        let totalVerde = alert("El total a pagar de calcetines verdes es: " + cantidadCalcetines * producto2.precio)
        calcularPrecio(cantidadCalcetines, producto2.precio)
    }
    else if(elegirColor.toUpperCase() == "AZUL"){
        let totalAzul = alert("El total a pagar de calcetines azules es: " + cantidadCalcetines * producto3.precio)
        calcularPrecio(cantidadCalcetines, producto3.precio)
    }
    else{
        alert("Si no desea comprar nada más escriba ESC")
    }
    elegirColor = prompt("¿Qué otro color de calcetín le gustaría comprar? \n Si no desea comprar más, escriba ESC para ver el total y salir.")
}

if(precioTotal != 0){
    alert("El precio total de todos los calcetines es " + precioTotal)
}

saludo(", vuelva pronto :)")