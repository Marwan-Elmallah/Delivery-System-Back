const { getAllProducts, addProduct } = require("./product.controller")
const router = require("express").Router()

router.get("/allProducts", getAllProducts)
router.post("/addProduct", addProduct)
router.delete("/deleteProductById/:id",)
router.put("/updateProductById/:id",)

module.exports = router