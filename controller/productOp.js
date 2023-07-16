const productModel = require("../model/product")
const jwt = require('jsonwebtoken');


const addProduct = async(req,res)=>{
    const {Name,Description,Price,isActive} = req.body
    try{
    await productModel.create({Name:Name,Description:Description,Price:Price,isActive:isActive})
    res.send("Product Succesfully Added")
    }catch(error){
        res.send(error)
    }

}
const retrieveAll = async (req,res) => {
    //Query all docs in the collection
    const allData = await productModel.find({ isActive: true})
    //send the data as the response
    res.json(allData);
}
const retrieveOne = async (req,res) => {
    const dataId = req.params.id;
    const data = await productModel.findOne({_id: dataId});
    if (!data) {
        return res.status(404).send('Data not found');
      }
  
      // Send the data document as the response
      res.json(data);
}


const updateOne = async (req, res) => {
    const dataId = req.params.id;
    const {Name, Description, Price, isActive} = req.body;
    const updatedData = await productModel.findOneAndUpdate(
        { _id: dataId },
        { Name: Name, Description: Description, Price: Price, isActive: isActive }
      );
  
      if (!updatedData) {
        return res.status(404).send('Data not found');
      }
  
      // Send the updated data document as the response
      res.json(updatedData);
}
const archiveOne = async (req, res) => {
    const dataId = req.params.id;
    const updatedData = await productModel.findOneAndUpdate(
        { _id: dataId },
        { isActive: false }
    );

    if (!updatedData) {
        return res.status(404).send('Data not found');
    }

    // Send the updated data document as the response
    res.json(updatedData);
}
module.exports = {addProduct, retrieveAll, retrieveOne, updateOne, archiveOne}