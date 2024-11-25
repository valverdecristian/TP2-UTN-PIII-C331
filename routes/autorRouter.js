const express = require("express");
const router = express.Router();

/* Importar el controlador correspondiente */
const {traerAutores,traerUnAutor,crearAutor,actualizarAutor,eliminarAutor,} = require("../controllers/autorController");

/* Definir las rutas */
router.get("/", traerAutores); // Ruta para obtener todos los autores 3
router.get("/:id", traerUnAutor); // Ruta para obtener un autor por ID 4
router.post("/", crearAutor); // Ruta para crear un nuevo autor 1
router.put("/:id", actualizarAutor); // Ruta para actualizar un autor por ID 2
router.delete("/:id", eliminarAutor); // Ruta para eliminar un autor por ID 5

// Manejo de errores en rutas
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

/* Exportar el enrutador para que pueda ser utilizado en otros módulos */
module.exports = router;
