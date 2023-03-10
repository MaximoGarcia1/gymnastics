const {model, Schema} = require('mongoose')

const UserSchema = new Schema({
    nombre: {type: String, Required:true},
    correo: {type: String, Required:true, unique: true},
    contraseña: {type: String, Required:true},
    gimnastas:[{
        type:Schema.Types.ObjectId,
        ref:'Gymnast'
    }]
})

module.exports = model('User', UserSchema)
