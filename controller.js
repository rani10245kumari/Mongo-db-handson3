const employeeShema = require("./model")

//const { database } = require("./db")
const employees = []
const createEmployee = async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        if (!data.contactInfo || !data.department || !data.lastCompany) {
            res.status(200).json({ msg: "Please fill" })
        }


        const isExist = await employeeShema.findOne({ contactInfo: data.contactInfo })
        if (isExist) {
            return res.status(500).json({ msg: "This Employee already Registered" })
        }
        else {
            const employee = await employeeShema.create(data)
            res.status(200).json({ success: true, msg: "Employee created successfully", data: employee })
        }
    }
    catch (error) {
        console.log("404  error")
    }
}

const AllEmployee = async (req, res) => {
    try {
        const employee = await employeeShema.find().toArray()
        res.status(200).json({ success: true, data: employee })
    } catch (error) {
        console.log(error);
    }

}
const FilterEmployee = async (req, res) => {
    try {
        const { salary, experience, graduation } = req.query
        if (salary) {
            console.log(typeof (salary))
            const data = await employees.find({ salary: { $gt: 3000 } }).toArray();


            res.send(data)
        }
        else {
            console.log("not found")
        }
    }
    catch {
        console.log("error")
    }
}
module.exports = { createEmployee, AllEmployee, FilterEmployee }