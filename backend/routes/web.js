const express = require("express")

// add the controller
const { get_all_data, add_Data, get_Single, updateData } = require("../controller/users-data-controller")

// router instance
const router = express.Router()


router.get("/", get_all_data)
router.post("/", add_Data)
router.get("/:id", get_Single)
router.delete("/:id", get_Single)
router.patch("/:id", updateData)

module.exports = router