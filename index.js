const express = require("express")
const app = express();
const { connection } = require("./db")
const employeeRouter = require('./employeeRouter')

app.use(express.json())

app.use(employeeRouter)

app.listen(5400, () => {
    try {

        console.log("server started")
        connection()

    }
    catch {

    }
})