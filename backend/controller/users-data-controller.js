const Users = require("../model/users_model")
const mongoose = require("mongoose")

// Method: GET
// Get All data
const get_all_data = async (request, response, next) => {

    try {
        const data = await Users.find({});
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json({ message: error.message});
    }
    
}


// Method : POST
// Add single data
const add_Data = async (request, response, next) => {

    const { firstName, lastName, course } = request.body;

    try {
        const data = await Users.create({ firstName, lastName, course });
        response.status(201).json(data);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
}

// method : Get
// get single data
const get_Single = async (request, response, next) => {

    const { id } = request.params;
    
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(404).json({ message: "Invalid Id" });
        }

        const data = await Users.findById(id);

        if (!data) {
            return response.status(404).json({ message: "No Data found" });
        }

        response.status(200).json(data);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}


// method : Delete
// delete single data
const delete_Data = async (request, response, next) => {

    const { id } = request.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(404).json({ message: "Invalid Id" });
        }

        const deletedData = await Users.findByIdAndDelete(id);

        if (!deletedData) {
            return response.status(404).json({ message: "No Data found" });
        }

        response.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }

}


// method : Patch
// update single data
const updateData = async (request, response, next) => {

    const { id } = request.params;
    const { firstName, lastName, course } = request.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(404).json({ message: "Invalid Id" });
        }

        const updatedData = await Users.findByIdAndUpdate(id, { firstName, lastName, course }, { new: true });

        if (!updatedData) {
            return response.status(404).json({ message: "No Data found" });
        }

        response.status(200).json(updatedData);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}



module.exports = {
    get_all_data,
    add_Data,
    get_Single,
    delete_Data,
    updateData
}