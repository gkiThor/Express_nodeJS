const express = require("express");

router = express.Router();

//Page d'accueil
router.get("/",(req,res)=>{
    console.log("Accueil");
    res.send("<h1>Page d'accueil de l'application</h1>");
})

module.exports = router;