const express=require("express");
const mongoose=require("mongoose");
const usuarioRouter = require("./routes/usuario");
const conciertoRouter = require("./routes/concierto");
const zonaRouter = require("./routes/zona");

//Configuracion
const app=express();
const port=4000;
const MONGO_URI="mongodb+srv://hsuazo:8E895F08E3@cluster0.9ifpwdv.mongodb.net/BoleteriaDB?retryWrites=true&w=majority"


//midlewares
app.use(express.json());
app.use("/api",usuarioRouter);
app.use("/api",conciertoRouter);
app.use("/api",zonaRouter);

//rutas

app.get("/",(req,res)=>{
    res.send("<h1>Hola</h1>");
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

