const express = require("express"); //on importe express

const app = express();


//Route et middleware
//Page d'accueil
app.get("/",(req,res)=>{
    console.log("Accueil");
    res.send("<h1>Page d'accueil de l'application</h1>");
})

// Opérations CRUD sur les clients
app.get("/client/voir",(req,res)=>{
    console.log("Voir");
    res.send("<h1>Voir les informations du client</h1>");
})

app.post("/client/ajouter",(req,res)=>{
    console.log("Ajouter");
    res.send("<h1>Ajouter un nouveau client</h1>");
})

app.put("/client/modifier",(req,res)=>{
    console.log("Modifier");
    res.send("<h1>Modifier un client</h1>");
})

app.delete("/client/supprimer",(req,res)=>{
    console.log("Supprimer");
    res.send("<h1>Supprimer un client</h1>");
})

app.listen(3000,()=>{
    console.log("Serveur en écoute...");
})

