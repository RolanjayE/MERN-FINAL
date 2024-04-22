const express = require("express")

require("dotenv").config()

// add the connection in mongoose
const { connect } = require("mongoose")

// instance of express
const app = express()



// middleware to convert the request body to json
app.use(express.json())



// insert the routes of the applications
const webRoutes = require("./routes/web")
app.use("/api/user", webRoutes)



connect(process.env.MONGO_DB)
    .then( ()=> {
        app.listen(process.env.PORT, ()=> {
            console.log(`Server Start at PORT  ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })