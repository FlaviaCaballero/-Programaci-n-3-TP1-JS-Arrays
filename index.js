import fetch from "node-fetch"; // instalar con: npm install node-fetch
import fs from "fs";

const FILE_PATH = "./productos.json";

/* --------------------- API FETCH --------------------- */

// 1. Recuperar todos los productos
async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log("✅ Todos los productos:", data.length);
  return data;
}

// 2. Recuperar productos limitados
async function getLimitedProducts(limit) {
  const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
  const data = await res.json();
  console.log(`✅ ${limit} productos:`, data.map(p => p.title));
  return data;
}

// 3. Agregar un producto (POST)
async function addProductAPI(product) {
  const res = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" }
  });
  const data = await res.json();
  console.log("✅ Producto agregado en API:", data);
  return data;
}

// 4. Buscar producto por ID
async function getProductById(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  console.log(`✅ Producto con ID ${id}:`, data);
  return data;
}

// 5. Eliminar producto (DELETE)
async function deleteProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE"
  });
  const data = await res.json();
  console.log(`🗑️ Producto con ID ${id} eliminado:`, data);
  return data;
}

// 6. Modificar producto (PUT)
async function updateProduct(id, updates) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(updates),
    headers: { "Content-Type": "application/json" }
  });
  const data = await res.json();
  console.log(`✏️ Producto con ID ${id} actualizado:`, data);
  return data;
}

/* --------------------- FILE SYSTEM --------------------- */

// Guardar productos en archivo
function saveToFile(data) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
  console.log("💾 Datos guardados en productos.json");
}

// Leer archivo
function readFromFile() {
  if (!fs.existsSync(FILE_PATH)) return [];
  return JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
}

// Agregar producto al archivo local
function addProductToFile(product) {
  const products = readFromFile();
  products.push(product);
  saveToFile(products);
  console.log("✅ Producto agregado al archivo local");
}

// Eliminar productos mayores a cierto precio
function removeExpensiveProducts(limit) {
  let products = readFromFile();
  products = products.filter(p => p.price <= limit);
  saveToFile(products);
  console.log(`✅ Eliminados productos con precio > ${limit}`);
}

/* --------------------- MAIN --------------------- */

async function main() {
  // --- API ---
  const all = await getAllProducts();
  const limited = await getLimitedProducts(5);
  saveToFile(limited);

  const newProduct = await addProductAPI({
    title: "Mouse Gamer",
    price: 150,
    description: "Ratón ergonómico RGB",
    image: "https://i.pravatar.cc",
    category: "electronics"
  });

  await getProductById(1);
  await updateProduct(1, { title: "Producto actualizado", price: 99.99 });
  await deleteProduct(2);

  // --- FILESYSTEM ---
  addProductToFile(newProduct);
  removeExpensiveProducts(500);
}

main();
