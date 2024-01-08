const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());



app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});


app.get('/productos', (req, res) => {
    const authToken = req.header('Authorization');
    // Aquí puedes usar el authToken para autenticar al usuario o realizar validaciones adicionales
    res.send(`Token de autorización: ${authToken}`);
});



app.get('/productos', (req, res) => {
    const categoria = req.query.categoria;
    const stock = req.query.stock;
    // Aquí puedes usar el parámetro de categoría para realizar una búsqueda de productos en esa categoría
    res.send(`Realizar búsqueda de productos en la categoría "${categoria}" y Stock"${stock}"`);
});


app.post('/productos', (req, res) => {
    const producto = req.body;
    // Aquí puedes guardar el nuevo producto en la base de datos o realizar otras operaciones relacionadas con el producto
    res.send(`Guardar nuevo producto: ${JSON.stringify(producto)}`);
});

app.get('/productos/:id', (req, res) => {
    const productoId = req.params.id;
    // Lógica para obtener información del usuario con el ID especificado
    res.send(`Información del producto con ID ${productoId}`);
});


app.post('/productos', (req, res) => {
    // Lógica para crear un nuevo usuario
    res.send('Producto creado correctamente');
});



app.listen(port, () => {
    console.log(`Servidor Express.js en funcionamiento en el puerto ${port}`);
});