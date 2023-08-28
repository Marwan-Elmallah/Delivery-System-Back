const router = require("express").Router()
const { getAllUsers, addUser, deleteUserById, updateUsernameById, updateEmailById, updatePasswordById } = require("./users.controller")

router.get("/allUsers", getAllUsers)
router.post("/addUser", addUser)
router.delete("/deleteUserById/:id", deleteUserById)
router.put("/updateUsernameById/:id", updateUsernameById)
router.put("/updateEmailById/:id", updateEmailById)
router.put("/updatePasswordById/:id", updatePasswordById)

module.exports = router