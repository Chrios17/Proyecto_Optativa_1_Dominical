const {json } = require("express");
const express=require("express");
const Zonas=require("../models/Zona");

const router=express.Router();

//Listar zonas

router.get("/zona",(req,res)=>{
   Zonas.find().select({nombreZona: 1, precioZona: 1, _id: 0})
    .then((data)=>{
        res.json(data);
   })
   .catch((error)=>res.send(error));
})

router.get("/zona/:nombreZona",(req,res)=>{
    const { nombreZona }=req.params;

    Zonas.find({nombreZona:nombreZona}).select({nombreZona: 1, precioZona: 1, _id: 0})
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>res.send(error));
})



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


//Modificar una zona

router.put("/zona/:nombreZona", (req,res)=>{
    const { nombreZona } = req.params;

    const nuevoNombreZona = req.body.nombreZona;
    const nuevoPrecioZona = req.body.precioZona;
 
    Zonas.updateOne({nombreZona:nombreZona}, {$set: { nombreZona:nuevoNombreZona,precioZona: nuevoPrecioZona  }})
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
router.delete("/zona/:nombreZona",(req,res)=>{
const { nombreZona } = req.params;

   Zonas.deleteOne({nombreZona:nombreZona})
   .then((data)=>res.json(data))
   .catch((error)=>res.send(error));
})

module.exports = router;


