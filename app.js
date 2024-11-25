const express = require("express");
const cors = require("cors");
const path = require("path");
const { sequelize } = require("./data/db");

const port = 3030;
const app = express();

// Importar las rutas
const mainRouter = require("./routes/mainRouter");
const autorRouter = require("./routes/autorRouter");
const principalRouter = require("./routes/principalRouter");

// Configurar el motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Habilitar el intercambio de información de origen cruzado
app.use(cors());
// Analizar los request [función middleware] > me llega la info en un formato y lo transformo a json
app.use(express.json());

app.use("/", mainRouter);
app.use("/autores", autorRouter);
app.use("/peliculas", principalRouter);

app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexión a la base de datos exitosa");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }

    console.log(`Servidor corriendo en el puerto ${port}`);
});