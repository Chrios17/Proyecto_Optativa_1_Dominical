const express=require("express");
var cors = require('cors');
const mongoose=require("mongoose");
const zonaRoutes=require("./routes/zona");

//Configuracion
const app=express();
const port= process.env.PORT || 4000;
const MONGO_URI="mongodb+srv://hsuazo:8E895F08E3@cluster0.9ifpwdv.mongodb.net/BoleteriaDB?retryWrites=true&w=majority"

//rutas

app.use(express.json());
app.use(cors())

app.use("/api",zonaRoutes);

app.get("/",(req,res)=>{
    res.send("<h1>APP BOLETERIA CONCIERTOS</h1>");
})

//Conexion Mongodb
mongoose
    .connect(MONGO_URI)
    .then(()=>console.log("Conectado a MongoDB"))
    .catch((error)=>console.error(error));


//servidor
app.listen(port,()=>{
    console.log("Applicacion corriendo en puerto ",port);
})

