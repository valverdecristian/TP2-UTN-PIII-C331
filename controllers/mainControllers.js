const fs = require("fs");

// Leer los archivos JSON
const autoresJSON = JSON.parse(
    fs.readFileSync("./data/autores.json", "utf-8")
);

const peliculasJSON = JSON.parse(
    fs.readFileSync("./data/peliculas.json", "utf-8")
);

module.exports = {
    index: (req, res) => {
        res.render("main", {
            title: "Autores y Peliculas",
            nombre: "Autores y Peliculas UTN",
            autores: autoresJSON,
            peliculas: peliculasJSON,
        });
    },
};