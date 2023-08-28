const { nanoid } = require("nanoid")
const fs = require("fs")
const path = require("path")
const productsFilePath = path.join(__dirname, "../../DB/products.json")

let products = JSON.parse(fs.readFileSync(productsFilePath))
const noData = "No Data To Show :("

const getAllProducts = (req, res) => {
    res.send(products)
}

const addProduct = (req, res) => {
    const { name, cost, price } = req.body
    let isExist = products.find((product) => product.name === name)
    if (isExist) {
        res.json({
            message: "Product is Already Exist",
            data: noData
        })
        return
    }
    const addedProduct = {
        id: nanoid(),
        name,
        cost,
        price,
        earn: price - cost
    }
    products.push(addedProduct)
    fs.writeFileSync(productsFilePath, JSON.stringify(products))
    res.json({
        message: "Product Added Successfully :D",
        data: products
    })
}


module.exports = { getAllProducts, addProduct }