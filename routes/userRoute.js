const express = require('express')
const router = express.Router()
const order = require("../controller/userOrders")
const authenticate = require("../controller/auth")

router.post("/checkout", authenticate.authenticateToken, authenticate.isnotAdmin, order.createOrder)
module.exports = router