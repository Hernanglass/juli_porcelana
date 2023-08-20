class Producto {
    constructor(id, nombre, descripcion, precio, imagen) {
        this.id = id,
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.precio = precio,
        this.imagen = imagen
    }
}


let productos = []


let productosDePorcelana = fetch('../data.json')
.then((response) => response.json())
.then((data) => {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        const producto = data[i];
        const {id, nombre, descripcion, precio, imagen} = producto;
        
        productos.push(
            new Producto(
                id, nombre, descripcion, precio, imagen
            )
        )
        
    }
    return productos;
}
)




export default productosDePorcelana;


