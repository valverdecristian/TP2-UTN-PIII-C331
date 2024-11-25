const express = require("express");
const router = express.Router();

/* Importar el controlador correspondiente */
const {traerPrincipales, traerUnPrincipal, crearPrincipal, actualizarPrincipal, eliminarPrincipal} = require("../controllers/principalController");

/* Definir las rutas */
router.get("/", traerPrincipales); // Ruta para obtener todos los registros
router.get("/:id", traerUnPrincipal); // Ruta para obtener un registro por ID
router.post("/", crearPrincipal); // Ruta para crear un nuevo registro
router.put("/:id", actualizarPrincipal); // Ruta para actualizar un registro por ID
router.delete("/:id", eliminarPrincipal); // Ruta para eliminar un registro por ID

// Manejo de errores en rutas
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

/* Exportar el enrutador para que pueda ser utilizado en otros módulos */
module.exports = router;