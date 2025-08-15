/*Declarar un array llamado productos (o libros, turnos, etc.) que contenga al
menos 5 objetos JavaScript. Cada objeto debe representar un elemento con propiedades como id,
nombre, precio y stock.*/

productos = [
    { id: 1, nombre: "Portacelular", precio: 7000, cantidad: 30 },
    { id: 2, nombre: "Soporte notebook", precio: 20000, cantidad: 20 },
    { id: 3, nombre: "Soporte tablet", precio: 15000, cantidad: 0 },
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
    console.log(`Nombre del producto: ${producto.nombre}, Precio: ${producto.precio}`);
}

/*Recorre el array productos utilizando el método forEach() e imprimir la misma información que en el
punto anterior, pero agregando una frase descriptiva (ej. "Producto: [nombre], Precio: [precio]").*/

productos.forEach(producto => {
    console.log(`Información del producto: ${producto.nombre}, Precio del producto: ${producto.precio}`);
});

// Agregar dos elementos al final del array productos utilizando push()
productos.push(
    { id: 6, nombre: "Soporte auricular", precio: 15000, cantidad: 20 },
    { id: 7, nombre: " Cortante", precio: 3000, cantidad: 100 }
);

console.log("Productos agregados al stock:", productos);

// Eliminar el último producto del array usando pop()
const productoEliminado = productos.pop();

console.log("Producto eliminado:", productoEliminado);
console.log("Productos actualizados:", productos);

// Agregar un nuevo elemento al inicio del array productos utilizando unshift().
productos.unshift({ id: 0, nombre: "Llavero desk", precio: 13000, cantidad: 15 });

console.log("Productos agregados:", productos);

// Elimina el primer elemento del array productos utilizando shift().
const primerProductoEliminado = productos.shift();

console.log("Primer producto eliminado:", primerProductoEliminado);
console.log("Listado actualizado de productos:", productos);

/* Crear un nuevo array llamado productosConStock que contenga solo los elementos del array productos
donde el stock sea mayor que 0 utilizando filter(). */

const productosConStock = productos.filter(producto => producto.cantidad > 0);

console.log("Productos con stock disponible:", productosConStock);

/*Crear un nuevo array llamado nombresProductos que contenga solo los nombres de todos los
productos en el inventario utilizando map(). */

const nombresProductos = productos.map(producto => producto.nombre);

console.log("Nombres de los productos:", nombresProductos);

/*Encontrar y guardar en una variable el primer producto en productos que tenga un id específico (ej. id:3)
utilizando find(). Si no lo encuentra, indicar que no existe. */

const idBuscado = 5;
const productoEncontrado = productos.find(producto => producto.id === idBuscado);

if (productoEncontrado) {
    console.log("Producto encontrado:", productoEncontrado);
} else {
    console.log(`No existe un producto con id: ${idBuscado}`);
}

/*Crear un nuevo array llamado productosOrdenados que contenga los productos ordenados por precio
en orden decreciente. (investigar método sort()).*/

const productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);

console.log("Productos ordenados por precio en orden decreciente:", productosOrdenados);
