
const product = require("../controller/productOp")
const authenticate = require("../controller/auth")
const express = require('express')
const router = express.Router()

router.post("/",authenticate.authenticateToken,authenticate.isAdmin,product.addProduct)
router.post("/retrieve", authenticate.authenticateToken, product.retrieveAll)
router.post("/retrieve/:id", authenticate.authenticateToken, product.retrieveOne)
router.put("/update/:id", authenticate.authenticateToken, authenticate.isAdmin, product.updateOne)
router.put("/update/:id/archive", authenticate.authenticateToken, authenticate.isAdmin, product.archiveOne)
module.exports = router