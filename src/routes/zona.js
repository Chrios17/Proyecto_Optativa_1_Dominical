const express=require("express");
const Zonas=require("../models/Zona");

const router=express.Router();


//Crear zona
router.post ("/zona",(req,res)=>{
    const nuevoZona = Zonas(req.body); 

nuevoZona.save()
.then((data)=>{
    console.log(data);
    res.json(data);
})
.catch((error)=>{
    console.error(error);
    res.json(error);
})
});

//Listar zonas
router.get("/zona",(req,res)=>{
   Zonas.find().select({nombreZona: 1, _id: 0})
   .then((data)=>{
      console.log(data);
      res.json(data);
  })
  .catch((error)=>{
      console.error(error);
      res.json(error);
  })
  });

//Listar una zona
router.get("/zona/:nombreZona",(req,res)=>{

      const {nombreZona} = req.params;

     Zonas.findOne({nombreZona:nombreZona}).select({nombreZona: 1, _id:0})
     .then((data)=>{
      console.log(data);
      res.json(data);
  })
  .catch((error)=>{
      console.error(error);
      res.json(error);
  })
  });

//Modificar una zona
router.put("/zona/:nombreZona",(req,res)=>{
   const { nombreZona } = req.params;

   const nuevoNombreZona = req.body.nombreZona;
   
   Zonas.updateOne({nombreZona:nombreZona},{$set: {nombreZona: nuevoNombreZona}})
   .then((data)=>{
      console.log(data);
      res.json(data);
  })
  .catch((error)=>{
      console.error(error);
      res.json(error);
  })
  });

//Eliminar una zona
router.delete("/Zona/:nombreZona",(req,res)=>{
const { nombreZona } = req.params;

   Zonas.deleteOne({nombreZona:nombreZona})
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
