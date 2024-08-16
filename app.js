const express = require("express"); //on importe express

const app = express();


//Route et middleware
app.get("/",(req,res)=>{
    console.log("Get");
    res.send("GET");
})

app.get("/contact",(req,res)=>{
    console.log("Contact");
    res.send("Contact");
})

app.post("/envoyer",(req,res)=>{
    console.log("envoyer");
    res.send("envoyer");
})

app.put("/modifier",(req,res)=>{
    console.log("Modifier");
    res.send("Modifier");
})

app.delete("/supprimer",(req,res)=>{
    console.log("Supprimer");
    res.send("Supprimer");
})

app.listen(3000,()=>{
    console.log("Serveur en écoute...");
})

