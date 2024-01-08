const express = require('express');
const app = express();
const routerProductos = require('./routes/productos')



app.use(express.json());



app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});



app.use('/productos', routerProductos);

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor Express.js en funcionamiento en el puerto ${port}`);
});