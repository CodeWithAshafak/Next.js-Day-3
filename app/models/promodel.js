const mongoose = require("mongoose");
const proSchma = new mongoose.Schema({
  name :String,
  desc:String,
  price:Number,
  imgname:String

})


const Product = mongoose.models.productModel || mongoose.model("productModel", proSchma);
export default Product;