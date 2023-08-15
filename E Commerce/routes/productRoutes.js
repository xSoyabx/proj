import express from "express";
import { isAdmin, requireSignIn } from './../middleware/authMiddleware.js';
import { createProductController, deleteProduct, getProductController, productPhotoController, singleProductController, updateProductController} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router()

router.post("/create-product",
requireSignIn,isAdmin,
formidable(),
createProductController)

//get products
router.get("/get-product",getProductController)

//single product
router.get("/single-product/:slug",singleProductController)


//get photo
router.get('/product-photo/:pid',productPhotoController)

//delete product
router.delete("/product/:pid",deleteProduct)

//update product
router.put("/update-product/:pid",
requireSignIn,isAdmin,
formidable(),
updateProductController)
export default router