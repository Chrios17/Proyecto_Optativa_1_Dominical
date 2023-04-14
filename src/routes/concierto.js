const express=require("express");
const Conciertos=require("../models/Concierto");

const router=express.Router();


//Crear concierto
router.post ("/concierto",(req,res)=>{
    const nuevoConcierto = Conciertos(req.body); 

nuevoConcierto.save()
.then((data)=>{
    console.log(data);
    res.json(data);
})
.catch((error)=>{
    console.error(error);
    res.json(error);
})
});

//Listar conciertos
router.get("/concierto",(req,res)=>{
   Conciertos.find().select({artista: 1, lugar: 1, fecha:1, _id: 0})
   .then((data)=>{
      console.log(data);
      res.json(data);
  })
  .catch((error)=>{
      console.error(error);
      res.json(error);
  })
  });

//Listar un concierto
router.get("/concierto/:artista",(req,res)=>{

      const {artista} = req.params;

     Conciertos.findOne({artista:artista}).select({artista: 1, lugar: 1, fecha:1, _id:0})
     .then((data)=>{
      console.log(data);
      res.json(data);
  })
  .catch((error)=>{
      console.error(error);
      res.json(error);
  })
  });

//Modificar un concierto
router.put("/concierto/:artista",(req,res)=>{
   const { artista } = req.params;

   const nuevoArtista = req.body.artista;
   const nuevoLugar = req.body.lugar;

   Conciertos.updateOne({artista:artista},{$set: {artista: nuevoArtista, lugar: nuevoLugar}})
   .then((data)=>{
      console.log(data);
      res.json(data);
  })
  .catch((error)=>{
      console.error(error);
      res.json(error);
  })
  });

//Eliminar un concierto
router.delete("/concierto/:artista",(req,res)=>{
const { artista } = req.params;

   Conciertos.deleteOne({artista:artista})
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
