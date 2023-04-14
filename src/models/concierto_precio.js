const mongoose= require("mongoose");

const conciertoPrecioSC= mongoose.Schema({

    idConciertoPrecio: {
        type: String,
        required: true
     },

     idZona: {
        type: String,
        required: true
     },

     idConcierto: {
        type: String,
        required: true
     },

     precio: {
        type: String,
        required: true
     },

});

module.exports=moongose.model('ConciertoPrecio',conciertoPrecioSC);