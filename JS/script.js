/* Ecommerce de calcetines compresivos - Colores disponibles a la venta */

// ARRAYS

productos = [
    {
        "id":1,
        "nombre": "Amarillo",
        "precio": "1000",
        "stock": 10,
        "img": "amarillo.png"
    },
    {
        "id":2,
        "nombre": "Celeste",
        "precio": "500",
        "stock": 10,
        "img": "celeste.png"
    },
    {
        "id":3,
        "nombre": "Naranjo",
        "precio": "3990",
        "stock": 10,
        "img": "naranjo.png"
    },
    {
        "id":4,
        "nombre": "Verde",
        "precio": "4990",
        "stock": 10,
        "img": "verde.png"
    }
]

//////////// Crea un catalogo y se llena con los productos de arriba//////////////////

let catalogo = document.getElementById("catalogo")
function rederizar(lista) {
    catalogo.innerHTML = ""
    for (const prod of lista) {
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `<div class="card" style="width: 18rem;">
        <img src=img/${prod.img} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p>Precio: $${prod.precio}</p>
            </div>
        </div>`


    let cardButton = document.createElement("a")
    cardButton.classList.add('btn', 'botonAgregar')
    cardButton.innerText = `Comprar`
    cardButton.setAttribute('mark', prod.id)
    cardButton.setAttribute('name', prod.nombre)
    cardButton.addEventListener('click', agregarAlCarrito)
    card.append(cardButton);
        catalogo.append(card)
    }
}
rederizar(productos)



////////////Inicio de Variables ///

let catalog = document.getElementById('items')
let cartList = document.getElementById('carrito')
let buttonEmpty = document.getElementById('boton-vaciar')
let totalValue = document.getElementById('total')
let cart = []

buttonEmpty.addEventListener('click', emptyButtonHandler)

loadCartFromStorage()
mostrarCarro()


//////////////////////// Funcion agregar al carrito/////////

function agregarAlCarrito(event){
    let id = event.target.getAttribute('mark')
    let name = event.target.getAttribute('name')
    cart.push(id)
    mostrarCarro()

    Toastify({
        text: `Agregaste correctamente el calcetín ${name} al carrito`,
        className: "success",
        duration: 3000,
        gravity: 'bottom',
        position: "right",
      }).showToast();
}


function mostrarCarro(){

    saveCartToStorage()

    cartList.innerHTML = ''

    let cartWithoutRepeatedElements = [...new Set(cart)]

    cartWithoutRepeatedElements.forEach((itemId) => {
        let item = productos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })
        let quantity = cart.reduce((total, id) => {
            return id === itemId ? total += 1 : total
        }, 0)
    

    let linea = document.createElement('li')
    linea.classList.add('list-group-item', 'text-right', 'mx-2')
    linea.innerText = `${quantity} x ${item[0].nombre} - $${item[0].precio}`

    let buttonDelete = document.createElement('button')
    buttonDelete.classList.add('btn', 'btn-danger', 'mx-5')
    buttonDelete.innerText = 'X'
    buttonDelete.dataset.item = itemId
    buttonDelete.addEventListener('click', eliminarProducto)

    linea.append(buttonDelete)
    cartList.append(linea)
    })

    totalValue.innerText = calculateTotalPrice()
}

// Funcion eliminar carro

function eliminarProducto(event){
    let id = event.target.dataset.item
    cart = cart.filter((cartId) => {
       return cartId != id
    })
    mostrarCarro()


    Swal.fire({
       title: "Eliminaste correctamente el producto!",
       icon: 'warning'
    })
    
   }
   

function emptyButtonHandler(){
    cart = []
    cartList.innerHTML = ''
    totalValue.innerText = 0
    mostrarCarro()
}

// Funcion calcular precio

function calculateTotalPrice(){
    return cart.reduce((total, itemId) => {
        let item = productos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })
        return total + parseInt(item[0].precio)
    }, 0)
}

// Funcion localStorage

function saveCartToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

function loadCartFromStorage(){
    if(localStorage.getItem('cart') !== null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}