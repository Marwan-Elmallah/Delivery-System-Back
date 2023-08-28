const { getAllCoustmers, addCoutmer } = require("./coustmers.controller")
const router = require("express").Router()

router.get("/allCoustmers", getAllCoustmers)
router.post("/addCoustmer", addCoutmer)
router.delete("/deleteCoustmerById/:id",)
router.put("/updateCoustmerById/:id",)

module.exports = router