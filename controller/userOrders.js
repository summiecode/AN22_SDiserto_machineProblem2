const orderModel = require("../model/orderModel")
const jwt = require('jsonwebtoken');

const createOrder = async (req, res) => {
     // Verify and decode the JWT
     const decodedToken = jwt.verify(token, secretKey);
     const { userId } = decodedToken;
     const user = await User.findById(userId);
     const {products = [productId, quantity], Description, Price, isActive } = req.body
     
    try {
        await productModel.create({ UserID: user, products: [productId, quantity], Description: Description, Price: Price, isActive: isActive })
        res.send("Order Succesfully Added")
    } catch (error) {
        res.send(error)
    }
}

module.exports = { createOrder }