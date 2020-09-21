const Mongoose = require('mongoose');

const userStructure = {
    id: 1,
    isActivated: true,
    name: "String",
    userName: "String",
}

const userSchema = new Mongoose.Schema ({
    name: String,
    userName: String
})

const User = Mongoose.model ('User', userSchema);

module.exports  = {User, userSchema, userStructure}