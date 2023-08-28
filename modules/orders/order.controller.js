const { nanoid } = require("nanoid")
const fs = require("fs")
const path = require("path")
const ordersFilePath = path.join(__dirname, "../../DB/orders.json")

let orders = JSON.parse(fs.readFileSync(ordersFilePath))
let noData = "No Data to Show :("

const getAllOrders = (req, res) => {
    res.send(orders)
}

const addOrder = (req, res) => {
    const { products, shipping, CST } = req.body
    let arr = []
    let totalCost = parseInt(shipping)
    let date = new Date()
    for (const p in products) {
        let obj = {}
        obj[p] = products[p]["qty"]
        arr.push(obj)
        totalCost += parseInt(products[p]["price"]) * parseInt(products[p]["qty"])
    }
    const addedOrder = {
        id: nanoid(),
        products: arr,
        shipping: parseInt(shipping),
        CST,
        totalCost,
        createdAt: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} || ${date.getHours() + 1}:${date.getMinutes()}:${date.getSeconds()}`,
        shipedAt: `${date.getDate() + 5}/${date.getMonth() + 1}/${date.getFullYear()}`,
        status: "pendding approval"
    }
    orders.push(addedOrder)
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders))
    console.log(orders);
}

module.exports = { getAllOrders, addOrder }