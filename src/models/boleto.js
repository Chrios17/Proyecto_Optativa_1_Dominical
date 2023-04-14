const mongoose= require("mongoose");

const boletoSC= mongoose.Schema({

    idBoleto: {
        type: String,
        required: true
     },

     idConcierto: {
        type: String,
        required: true
     },

     idConcierto_Precio: {
        type: String,
        required: true
     },

     idUsuario: {
        type: String,
        required: true
     },

});

module.exports=moongose.model('Boleto',boletoSC);