const express = require("express"); //on importe express
const home = require("./routes/home"); //on inclut le fichier home.js
const client = require("./routes/client");
const app = express();

//app.use(home);//on invoque l'instance app
app.use("/client",client);//Module client est prefixe par /client

app.set("views","./views");//on indique les vues
app.set("view engine","ejs");//on indique le moteur de template

app.use("/files",express.static("public"));

app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/index",(req,res)=>{
    d = new Date();
    slt = d.getHours()<17?"Bonjour":"Bonsoir";
    ob = {
        nom:["a","b","c","d"],
        salutation:slt
    }

    res.render("index");
})

app.get("/test",(req,res)=>{
    //res.send("<h1>Titre H1</1>");

    // console.log("message de la console");
    // res.end();

    // res.download(__dirname + "/routes/home.js");

    // res.json("{'nom':'TestNom'}");
    // ob = {
    //     nom:'Kiki',
    //     prenom:'Guigui'
    // }
    // res.json(ob);

    // res.redirect(301,"https://www.youtube.com/");//301 est une redirection permanente

    res.sendFile(__dirname+"/index.html");
})

// app.all(/.*/,(req,res)=>{
//     res.status(404).send("<h2>Page introuvable</h2>");
// });//Toutes les méthodes sont éligibles

app.listen(3000,()=>{
    console.log("Serveur en écoute...");
})

