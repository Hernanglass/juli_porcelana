let productosEnCarrito = []

// if (localStorage.getItem("carrito")) {
//     productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
// } else {
//     localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
// }

import productosDePorcelana from "./class.mjs";
console.log(productosDePorcelana);

const productosCard = () => {
    for (let i = 0; i < productosDePorcelana.length; i++) {
        let producto = productosDePorcelana[i]
        let productosContainer = document.querySelector(".productos__cards")
        let card = document.createElement("article");
        card.className = "card"
         card.innerHTML = `<div class="card__header">
        <small>Nuevo</small>
        <img src="../assets/images/${producto.imagen}" alt="Plato de verduras" width="360" height="215" />
    </div>
    <h2 class="card__title">${producto.nombre}</h2>
    <p class="card__description">${producto.descripcion}</p>
    <p class="card__precio">Precio: ${producto.precio}</p>
    <button class="card__button">Agregar al carrito</button>`

    productosContainer.append(card)
    let btnAgregar = document.getElementsByClassName(`card__button${data.id}`)

    btnAgregar.addEventListener("click", () => {
        agregarAlCarrito(data)
    })
    }
}

productosCard()


function agregarAlCarrito(data){
    productosEnCarrito.push(data)
}

function cargarProductosCarrito(data) {

}

