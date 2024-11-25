const autorModel = require("../models/autor");
const principalModel = require("../models/principal");

// Función que trae todos los autores. Read - método GET
const traerAutores = async (req, res) => {
    try {
        const autores = await autorModel.findAll();
        res.json(autores);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Función para traer un autor por ID junto con sus películas. Read - método GET
const traerUnAutor = async (req, res) => {
    try {
        const autor = await autorModel.findByPk(req.params.id);
        if (autor) {
            const peliculas = await principalModel.findAll({ where: { director: autor.id } });
            res.json({
                autor,
                peliculas
            });
        } else {
            res.status(404).json({ message: "Autor no encontrado" });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Función que crea un autor. Create - método POST
const crearAutor = async (req, res) => {
    try {
        const nuevoAutor = await autorModel.create(req.body);
        res.status(201).json(nuevoAutor);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Función para actualizar un autor por ID. Update - método PUT
const actualizarAutor = async (req, res) => {
    try {
        const [actualizado] = await autorModel.update(req.body, {
            where: { id: req.params.id }
        });
        if (actualizado) {
            const autorActualizado = await autorModel.findByPk(req.params.id);
            res.json(autorActualizado);
        } else {
            res.status(404).json({ message: "Autor no encontrado" });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Función para eliminar un autor por ID. Delete - método DELETE
const eliminarAutor = async (req, res) => {
    try {
        const eliminado = await autorModel.destroy({
            where: { id: req.params.id }
        });
        if (eliminado) {
            res.json({ message: "Autor eliminado correctamente" });
        } else {
            res.status(404).json({ message: "Autor no encontrado" });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
}

module.exports = { traerAutores, traerUnAutor, crearAutor, actualizarAutor, eliminarAutor };