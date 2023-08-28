const express = require("express")
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())

const port = process.env.PORT || 7000

const { usersRoutes, productsRoutes, ordersRoutes, coustmersRoutes } = require("./routes/allRoutes")

app.use(express.json())
app.use(usersRoutes, productsRoutes, ordersRoutes, coustmersRoutes)

app.listen(port, () => console.log(`Back-End is Running at http://localhost:${port}`))