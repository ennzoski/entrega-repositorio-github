/* Colores de calcetines disponibles */

function saludo(mensaje){
    alert("Gracias por visitarnos" + mensaje)
}

saludo("")

let nombreProductoA = 'Blanco'
let precioProductoA = 5000
let stockProductoA = 25

let nombreProductoB = 'Verde'
let precioProductoB = 4500
let stockProductoB = 30

let nombreProductoC = 'Azul'
let precioProductoC = 6000
let stockProductoC = 15

let productoCompra = prompt("Ingrese que color de calcetin quiere comprar:\n - Blanco\n - Verde\n - Azul")
let precioTotal = 0


 if(productoCompra.toUpperCase() == 'BLANCO'){
    let cantidadProductoBlanco = prompt("ingrese cuantos pares de calcetin de color " + nombreProductoA + " desea comprar:")
    if(cantidadProductoBlanco <= stockProductoA){
        precioTotal = cantidadProductoBlanco * precioProductoA
    }
    else{
        alert("Actualmente tenemos " + stockProductoA + " unidades de este producto")
    }
}

else if(productoCompra.toUpperCase() == 'VERDE'){
    let cantidadProductoVerde = prompt("ingrese cuantos pares de calcetin de color " + nombreProductoB + " desea comprar:")
    if(cantidadProductoVerde <= stockProductoB){
        precioTotal = cantidadProductoVerde * precioProductoB
    }
    else{
        alert("Actualmente tenemos " + stockProductoB + " unidades de este producto")
    }
}

else if(productoCompra.toUpperCase() == 'AZUL'){
    let cantidadProductoAzul = prompt("ingrese cuantos pares de calcetin de color " + nombreProductoC + " desea comprar:")
    if(cantidadProductoAzul <= stockProductoC){
        precioTotal = cantidadProductoAzul * precioProductoC
    }
    else{
        alert("Actualmente tenemos " + stockProductoC + " unidades de este producto")
    }
}

else{
    alert("No tenemos ese producto a la venta")
}

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}

saludo(", vuelve pronto :)")

//alert("Gracias por su visita")