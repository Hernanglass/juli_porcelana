import productosDePorcelana from "./class.mjs";


console.log(productosDePorcelana)
productosDePorcelana.then(data => {
    productosCard(data);
})
    
        
let productosEnCarrito = [];


productosEnCarrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : (localStorage.setItem("carrito", JSON.stringify(productosEnCarrito)), productosEnCarrito);





const productosCard = (data) => {
    for (let i = 0; i < data.length; i++) {
        let producto = data[i]
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
    <button id="producto${producto.id}" class="card__button">Agregar al carrito</button>`

    productosContainer.append(card)
    let btnAgregar = document.getElementById(`producto${producto.id}`)
    btnAgregar.addEventListener("click", () => {
        agregarAlCarrito(producto)

    
        Toastify({
            text: "Añadido al carrito",
            duration: 2500,
            gravity: "bottom",
            position: "center",
            style: {
            background: "linear-gradient(to right, #e76480, #f12652)",
            },
        }).showToast();
    }) 

}


}



let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")

function agregarAlCarrito(producto){
        productosEnCarrito.push(producto)
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
        cargarProductosCarrito(productosEnCarrito);
}

cargarProductosCarrito(productosEnCarrito);


function cargarProductosCarrito(array) {
    modalBody.innerHTML = ""

    array.forEach(productoCarrito => {
        modalBody.innerHTML += `<div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
      <img class="card-img-top" height="300px" src="../assets/images/${productoCarrito.imagen}" alt="${productoCarrito.nombre}">
      <div class="card-body">
              <h4 class="card-title">${productoCarrito.nombre}</h4>
              <p class="card-description">${productoCarrito.descripcion}</p>
              <p class="card-text">$${productoCarrito.precio}</p>
              <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
      </div>    
  </div>
`

    });

    array.forEach((productoCarrito, indice) => {
        document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () => {
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
            cardProducto.remove()
            productosEnCarrito.splice(indice, 1)
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))


        })

    });

}


botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosEnCarrito)
    
})

botonFinalizarCompra.addEventListener("click", () => {
productosEnCarrito = []

Swal.fire({
    title: 'Compra finalizada',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  
})