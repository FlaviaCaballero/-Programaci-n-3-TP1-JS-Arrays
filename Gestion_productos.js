/*Declarar un array llamado productos (o libros, turnos, etc.) que contenga al
menos 5 objetos JavaScript. Cada objeto debe representar un elemento con propiedades como id,
nombre, precio y stock.*/

productos = [
    { id: 1, nombre: "Portacelular", precio: 7000, cantidad: 30 },
    { id: 2, nombre: "Soporte notebook", precio: 20000, cantidad: 20 },
    { id: 3, nombre: "Soporte tablet", precio: 15000, cantidad: 25 },
    { id: 4, nombre: "Llavero", precio: 3000, cantidad: 100 },
    { id: 5, nombre: "Portalapices", precio: 10000, cantidad: 15
    }
]

//Imprimir la longitud total del array productos.

console.log("Longitud total del array productos:", productos.length);

//Acceder e imprimir por consola el nombre del segundo y cuarto elemento del array utilizando su índice.

console.log("Nombre del segundo producto:", productos[1].nombre);
console.log("Nombre del cuarto producto:", productos[3].nombre);


// Recorrer el array productos e imprimir el nombre y el precio de cada elemento
for (const producto of productos) {
    console.log(`Nombre del elemento: ${producto.nombre}, Precio: ${producto.precio}`);
}

// Recorrer el array productos utilizando forEach e imprimir información descriptiva
productos.forEach(producto => {
    console.log(`Información del producto: ${producto.nombre}, Precio del producto: ${producto.precio}`);
});

// Agregar dos nuevos productos al final del array
productos.push(
    { id: 6, nombre: "Soporte auricular de pared", precio: 15000, cantidad: 20 },
    { id: 7, nombre: "Cortantes repostería", precio: 3000, cantidad: 100 }
);

console.log("Productos agregados recientemente:", productos);

// Eliminar el último producto del array usando pop()
const productoEliminado = productos.pop();

// Verificar el producto eliminado y el estado actual del array
console.log("Producto eliminado:", productoEliminado);
console.log("Productos actualizados:", productos);

// Agregar un nuevo producto al inicio del array
productos.unshift({ id: 0, nombre: "Porta llaves de escritorio", precio: 13000, cantidad: 15 });

// Verificar que el producto fue agregado
console.log("Productos agregados:", productos);

// Eliminar el primer elemento del array PRODUCTOS usando shift()
const primerProductoEliminado = productos.shift();

// Verificar el producto eliminado y el estado actual del array
console.log("Primer producto eliminado:", primerProductoEliminado);
console.log("Listado actualizado de productos:", productos);

// Crear un nuevo array con productos que tengan stock mayor a 0
const productosConStock = productos.filter(producto => producto.cantidad > 0);

// Verificar el nuevo array
console.log("Productos con stock disponible:", productosConStock);

// Crear un nuevo array con los nombres de todos los productos
const nombresProductos = productos.map(producto => producto.nombre);

// Verificar el nuevo array
console.log("Nombres de los productos:", nombresProductos);

// Buscar el primer producto con un id específico (ej. id: 3)
const idBuscado = 5;
const productoEncontrado = productos.find(producto => producto.id === idBuscado);

// Verificar si se encontró el producto
if (productoEncontrado) {
    console.log("Producto encontrado:", productoEncontrado);
} else {
    console.log(`No existe un producto con id: ${idBuscado}`);
}

// Crear un nuevo array con los productos ordenados por precio en orden decreciente
const productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);

// Verificar el nuevo array
console.log("Productos ordenados por precio (de mayor a menor):", productosOrdenados);
