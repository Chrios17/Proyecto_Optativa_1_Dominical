const mongoose=require("mongoose");

const conciertoSchema = mongoose.Schema({
   
    artista: {
        type: String,
        required: true
    },
    lugar: {
        type: String,
        required: true
    },

    fecha: {
        type: String,
        required: false
    }


});

module.exports=mongoose.model('Concierto',conciertoSchema);

