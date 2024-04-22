const { Schema, model } = require("mongoose")

const data = Schema({
    
    firstName: 
        {
            type: String, 
            required: true
        },

    lastName: {
        type: String, 
        required: true
    },

    course: {
        type: String, 
        required: true
    },
})

module.exports = model("UsersData", data)