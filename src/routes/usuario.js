const express=require("express");
const Usuarios=require("../models/Usuario");

const router=express.Router();


//Crear usuario
router.post ("/usuario",(req,res)=>{
    const nuevoUsuario = Usuarios(req.body); 

nuevoUsuario.save()
.then((data)=>{
    console.log(data);
    res.json(data);
})
.catch((error)=>{
    console.error(error);
    res.json(error);
})
});

//Listar usuarios
router.get("/usuario",(req,res)=>{
   Usuarios.find().select({nombreUsuario: 1, correo: 1, _id: 0})
   .then((data)=>{
      console.log(data);
      res.json(data);
  })
  .catch((error)=>{
      console.error(error);
      res.json(error);
  })
  });

//Listar un usuario
router.get("/usuario/:nombreUsuario",(req,res)=>{

      const {nombreUsuario} = req.params;

     Usuarios.findOne({nombreUsuario:nombreUsuario}).select({nombreUsuario: 1, correo: 1, _id:0})
     .then((data)=>{
      console.log(data);
      res.json(data);
  })
  .catch((error)=>{
      console.error(error);
      res.json(error);
  })
  });

//Modificar un usuario 
router.put("/usuario/:nombreUsuario",(req,res)=>{
   const { nombreUsuario } = req.params;

   const nuevoNombreUsuario = req.body.nombreUsuario;
   const nuevoCorreo = req.body.correo;

   Usuarios.updateOne({nombreUsuario:nombreUsuario},{$set: {nombreUsuario: nuevoNombreUsuario, correo: nuevoCorreo}})
   .then((data)=>{
      console.log(data);
      res.json(data);
  })
  .catch((error)=>{
      console.error(error);
      res.json(error);
  })
  });

//Eliminar un usuario
router.delete("/usuario/:nombreUsuario",(req,res)=>{
const { nombreUsuario } = req.params;

   Usuarios.deleteOne({nombreUsuario:nombreUsuario})
   .then((data)=>{
      console.log(data);
      res.json(data);
  })
  .catch((error)=>{
      console.error(error);
      res.json(error);
  })
  });

module.exports = router
