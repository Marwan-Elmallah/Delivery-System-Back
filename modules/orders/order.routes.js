const { getAllOrders, addOrder } = require("./order.controller")
const router = require("express").Router()

router.get("/allOrders", getAllOrders)
router.post("/addOrder", addOrder)
router.delete("deleteOrderById/:id",)
router.put("/updateOrderById/:id",)

module.exports = router