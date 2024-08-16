const express = require("express"); //on importe express
const home = require("./routes/home"); //on inclut le fichier home.js
const client = require("./routes/client");
const app = express();

app.use(home);//on invoque l'instance app
app.use("/client",client);//Module client est prefixe par /client

app.listen(3000,()=>{
    console.log("Serveur en écoute...");
})

