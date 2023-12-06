const mongoose = require('mongoose')

const connection = () => {
    try {
        mongoose.connect("mongodb+srv://ranik10245:ranik10245@cluster0.amponrd.mongodb.net/human3").then(() => {
            console.log("connection sucess")
        }).catch(() => console.log("not connected"))

    }
    catch {
        console.log("error get")
    }
}
module.exports = { connection }