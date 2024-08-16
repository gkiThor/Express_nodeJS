const express = require("express");

router = express.Router();

// Opérations CRUD sur les clients
router.get("/voir",(req,res)=>{
    console.log("Voir");
    res.send("<h1>Voir les informations du client</h1>");
})

router.post("/ajouter",(req,res)=>{
    console.log("Ajouter");
    res.send("<h1>Ajouter un nouveau client</h1>");
})

router.put("/modifier",(req,res)=>{
    console.log("Modifier");
    res.send("<h1>Modifier un client</h1>");
})

router.delete("/supprimer",(req,res)=>{
    console.log("Supprimer");
    res.send("<h1>Supprimer un client</h1>");
})

module.exports = router;