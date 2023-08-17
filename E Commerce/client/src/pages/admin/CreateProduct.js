import React,{useState, useEffect} from 'react'
import Layout from '../../components/layout/layout';
import AdminMenu from '../../components/layout/AdminMenu';
import toast from "react-hot-toast";
import axios from "axios";
import {Select} from 'antd'
const {Option} = Select

const CreateProduct = () => {
    const [categories, setCategories] = useState([])
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [quantity,setQuantity] = useState("")
    const [shipping,setShipping] = useState("")

    // get all categories
    const getAllCategory = async () => {
        try {
          const { data } = await axios.get("/api/v1/category/get-category");
          if (data?.success) {
            setCategories(data?.category);
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong in getting category");
        }
      };

      useEffect(() => {
        getAllCategory();
      }, []);

    return (
        <Layout title={"Dashboard - Create Product"}>
            <div className="conatiner-fluid m-3 p3">
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu/>
                </div>
                <div className="col-md-9">
                    <h1>Create Product</h1>
                    
                </div>
            </div>
            </div>
        </Layout>
    );
};

export default CreateProduct;