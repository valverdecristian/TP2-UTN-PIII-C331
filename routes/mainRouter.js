// importamos express para manejar solicitudes
const express = require ("express");
const router = express.Router();

const {index} = require ("../controllers/mainControllers.js");

router.get("/", index)

module.exports = router;