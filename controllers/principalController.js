const principalModel = require("../models/principal");

// Función que trae todos los registros. Read - método GET
const traerPrincipales = async (req, res) => {
    try {
        const principales = await principalModel.findAll();
        res.json(principales);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Función para traer un registro por ID. Read - método GET
const traerUnPrincipal = async (req, res) => {
    try {
        const principal = await principalModel.findByPk(req.params.id);
        if (principal) {
            res.json(principal);
        } else {
            res.status(404).json({ message: "Principal no encontrado" });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Función que crea un registro. Create - método POST
const crearPrincipal = async (req, res) => {
    try {
        const nuevoPrincipal = await principalModel.create(req.body);
        res.status(201).json(nuevoPrincipal);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Función para actualizar un registro por ID. Update - método PUT
const actualizarPrincipal = async (req, res) => {
    try {
        const [actualizado] = await principalModel.update(req.body, {
            where: { id: req.params.id }
        });
        if (actualizado) {
            const principalActualizado = await principalModel.findByPk(req.params.id);
            res.json(principalActualizado);
        } else {
            res.status(404).json({ message: "Principal no encontrado" });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Función para eliminar un registro por ID. Delete - método DELETE
const eliminarPrincipal = async (req, res) => {
    try {
        const eliminado = await principalModel.destroy({
            where: { id: req.params.id }
        });
        if (eliminado) {
            res.json({ message: "Principal eliminado correctamente" });
        } else {
            res.status(404).json({ message: "Principal no encontrado" });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
}

module.exports = { traerPrincipales, traerUnPrincipal, crearPrincipal, actualizarPrincipal, eliminarPrincipal };