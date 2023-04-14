const mongoose=require("mongoose");

const zonaSchema = mongoose.Schema({
   
    nombreZona: {
        type: String,
        required: true
    },
    


});

module.exports=mongoose.model('Zona',zonaSchema);


