const fs = require("fs")
const { nanoid } = require("nanoid")
const path = require("path")
const userFilePath = path.join(__dirname, "../../DB/users.json")

let users = JSON.parse(fs.readFileSync(userFilePath)) || []
let noData = "No Data To Show :("

const getAllUsers = (req, res) => {
    res.json({
        message: "Done",
        data: users
    })
}

const addUser = (req, res) => {
    const { username, email, password } = req.body

    const isExist = users.find((user) => user.email === email)
    if (!isExist && username && email && password) {
        let addedUser = {
            id: nanoid(),
            username,
            email,
            password
        }
        users.push(addedUser)
        fs.writeFileSync(userFilePath, JSON.stringify(users))
        res.json({
            message: "Added",
            data: users
        })
    } else {
        res.json({
            message: "Wrong Data",
            data: noData
        })
    }

    // console.log(isExist, 'el find result');
    // if (!isExist) {
    //     res.json({
    //         message: "User is Already Exist",
    //         data: noData
    //     })

    //     return
    // }


    // let addedUser = {
    //     id: nanoid(),
    //     username,
    //     email,
    //     password
    // }
    // users.push(addedUser)
    // fs.writeFileSync(userFilePath, JSON.stringify(users))
    // res.json({
    //     message: "Added",
    //     data: users
    // })
}

const deleteUserById = (req, res) => {
    const { id } = req.params
    const isExist = users.find((user) => user.id === id)
    if (isExist) {
        users = users.filter((user) => user.id !== id)
        fs.writeFileSync(userFilePath, JSON.stringify(users))
        res.json({
            message: "Deleted",
            data: users
        })
    } else {
        res.json({
            message: "Invalid User !",
            data: noData
        })
    }
}

const updateUsernameById = (req, res) => {
    const { id } = req.params
    const { username, email, password } = req.body
    const isExist = users.find((user) => user.id === id)
    if (isExist && username) {
        users.map((user) => {
            if (user.id === id) {
                user.username = username
            }
        })
        fs.writeFileSync(userFilePath, JSON.stringify(users))
        res.json({
            message: "Username Updated",
            data: users
        })
    } else {
        res.json({
            message: "Invalid Data",
            data: noData
        })
    }
}

const updateEmailById = (req, res) => {
    const { id } = req.params
    const { username, email, password } = req.body
    const isExist = users.find((user) => user.id === id)
    if (isExist && email) {
        users.map((user) => {
            if (user.id === id) {
                user.email = email
            }
        })
        fs.writeFileSync(userFilePath, JSON.stringify(users))
        res.json({
            message: "Email Updated",
            data: users
        })
    } else {
        res.json({
            message: "Invalid Data",
            data: noData
        })
    }
}

const updatePasswordById = (req, res) => {
    const { id } = req.params
    const { username, email, password } = req.body
    const isExist = users.find((user) => user.id === id)
    if (isExist && password) {
        users.map((user) => {
            if (user.id === id) {
                user.password = password
            }
        })
        fs.writeFileSync(userFilePath, JSON.stringify(users))
        res.json({
            message: "Password Updated",
            data: users
        })
    } else {
        res.json({
            message: "Invalid Data",
            data: noData
        })
    }
}

module.exports = { getAllUsers, addUser, deleteUserById, updateUsernameById, updatePasswordById, updateEmailById }