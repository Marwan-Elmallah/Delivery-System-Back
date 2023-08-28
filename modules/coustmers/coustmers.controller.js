const { nanoid } = require("nanoid")
const fs = require("fs")
const path = require("path")
const coustmersFilePath = path.join(__dirname, "../../DB/coustmers.json")

let coustmers = JSON.parse(fs.readFileSync(coustmersFilePath))
const noData = "No Data To Show :("

const getAllCoustmers = (req, res) => {
    res.send(coustmers)
}

const addCoutmer = (req, res) => {
    const { name, mobile1, mobile2, address } = req.body
    const isExist = coustmers.find((CST) => CST.mobile1 === mobile1)
    if (isExist) {
        res.json({
            message: "This Mobile is Already Registered",
            data: noData
        })
        return
    }
    let addedCST = {
        id: nanoid(),
        name,
        mobile1,
        mobile2: mobile2 || mobile1,
        address
    }
    coustmers.push(addedCST)
    fs.writeFileSync(coustmersFilePath, JSON.stringify(coustmers))
    res.json({
        message: "Costmer Added Successfully",
        data: coustmers
    })
}

module.exports = { getAllCoustmers, addCoutmer }