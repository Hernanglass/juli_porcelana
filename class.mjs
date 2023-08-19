// let data = [
//     {
//         id: 1,
//         nombre: "plato verduras",
//         descripcion: "Plato hondo de verduras",
//         precio: 5900,
//         imagen: "plato-verduras.jpeg",

//     },

//     {
//         id: 2,
//         nombre: "Taza gato negro",
//         descripcion: "Tazas gatos, los tamaños son...",
//         precio: 4599,
//         imagen: "taza-gato.jpeg",

//     },
    
//     {
//         id: 3,
//         nombre: "Plato mariposas",
//         descripcion: "Plato pintado con flores y mariposas. hay distintos tamaños..",
//         precio: 5900,
//         imagen: "plato-flores-mariposas.jpeg",

//     },

//     {
//         id: 4,
//         nombre: "Plato verduras segundo modelo",
//         descripcion: "Plato hondo de verduras..",
//         precio: 5900,
//         imagen: "platos-verduras-2.jpeg",

//     },

//     {
//         id: 5,
//         nombre: "Taza de flores",
//         descripcion: "Taza de flores, los tamaños son...",
//         precio: 4599,
//         imagen: "taza-flores.jpeg",

//     },

//     {
//         id: 6,
//         nombre: "Plato de hojas",
//         descripcion: "Plato pintado con hojas de colores. hay distintos tamaños..",
//         precio: 5900,
//         imagen: "Plato-hojas.jpeg",

//     },

//     {
//         id: 7,
//         nombre: "Plato de flores con borde celeste",
//         descripcion: "Plato pintado con flores de colores. hay distintos tamaños..",
//         precio: 5900,
//         imagen: "plato-flores-borde-celeste.jfif",

//     },

//     {
//         id: 8,
//         nombre: "Taza con mujer de cabello rubio",
//         descripcion: "Taza con una mujer de cabello rubio, se pueden personalizar y hacerlo sobre la persona que gustes",
//         precio: 4599,
//         imagen: "taza-mujer-rubia.jfif",

//     },

//     {
//         id: 9,
//         nombre: "Plato de flores",
//         descripcion: "Plato pintado con flores rosas",
//         precio: 5900,
//         imagen: "plato-flores-rosas.jfif",

//     },

//     {
//         id: 10,
//         nombre: "Plato con mariposa grande",
//         descripcion: "Plato pintado con una mariposa grande. podes enviarme la foto de la mariposa que te guste y tener tu plato personalizado",
//         precio: 5900,
//         imagen: "plato-mariposa-grande.jfif",

//     },


//     {
//         id: 11,
//         nombre: "Taza de ciervo",
//         descripcion: "Taza pintada con un ciervo, tambien podes elegir el animal que quieras y obtener tu producto personalizado",
//         precio: 4599,
//         imagen: "taza-ciervo.jfif",

//     },

//     {
//         id: 12,
//         nombre: "Fuente de flores con abejas",
//         descripcion: "Fuente pintada con flores y abejas, colores varios.",
//         precio: 5900,
//         imagen: "fuente-flores-abeja.jfif",

//     },


// ]




fetch('./data.json')
.then((response) => response.json())
.then((data) => {
    productosCard(data)
    console.log(data)
}

)




class Producto {
    constructor(id, nombre, descripcion, precio, imagen) {
        this.id = id,
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.precio = precio,
        this.imagen = imagen
    }
}


let productosDePorcelana = []

for (let i = 0; i < data.length; i++) {
    const producto = data[i];
    const {id, nombre, descripcion, precio, imagen} = producto;
    
    productosDePorcelana.push(
        new Producto(
            id, nombre, descripcion, precio, imagen
        )
    )
    
}



export default productosDePorcelana;


