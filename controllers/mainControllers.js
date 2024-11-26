const principalModel = require("../models/principal");
const autorModel = require("../models/autor");

module.exports = {
    index: async (req, res) => {
        try {
            // Consultar todos los autores y películas desde la base de datos
            const autores = await autorModel.findAll();
            const peliculas = await principalModel.findAll();

            res.render("main", {
                title: "Autores y Peliculas",
                nombre: "Autores y Peliculas UTN",
                autores: autores,
                peliculas: peliculas,
            });
        } catch (error) {
            console.error("Error al recuperar los datos:", error);
            res.status(500).send("Error al recuperar los datos");
        }
    },
};