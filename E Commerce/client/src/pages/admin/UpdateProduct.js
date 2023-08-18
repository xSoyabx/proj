import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import AdminMenu from "../../components/layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate,useParams } from "react-router-dom";
const { Option } = Select;

const UpdateProduct = () => {
    const navigate = useNavigate();
    const params=useParams();
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [photo, setPhoto] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [quantity, setQuantity] = useState("");
    const [shipping, setShipping] = useState("");
    const [id,setId] = useState("")

    //get single product
    const getSingleProduct = async () => {
        try {
          const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
          // (`/api/v1/product/get-product/${params.slug}`);
          setName(data.product.name);
          setId(data.product._id);
          setBrand(data.product.brand);
          setDescription(data.product.description);
          setPrice(data.product.price);
          setQuantity(data.product.quantity);
        } catch (error) {
          console.log(error);
          // toast.error("Something went wrong in getting single product");
        }
      };
      

    useEffect(()=>{
        getSingleProduct()
        //eslint-disable-next-line
    },[])
  
    // get all categories
    const getAllCategory = async () => {
      try {
        const { data } = await axios.get("/api/v1/category/get-category");
        if (data?.success) {
          setCategories(data?.category);
        }
      } catch (error) {
        console.log(error);
        // toast.error("Something went wrong in getting category");
      }
    };
  
    useEffect(() => {
      getAllCategory();
    }, []);
    const handleCreate = async (e) => {
        e.preventDefault();
        try {
          const productData = new FormData();
          productData.append("name", name);
          productData.append("description", description);
          productData.append("price", price);
          productData.append("quantity", quantity);
          productData.append("photo", photo);
          productData.append("brand", brand);
          productData.append("category", category);
          const { data } = await axios.post(
            "/api/v1/product/create-product",
            productData
          );
          if (data?.success) {
            toast.error(data?.message);
          } else {
            toast.success("Product Created Successfully");
            navigate("/dashboard/admin/products");
          }
        } catch (error) {
          console.log(error);
          toast.error("something went wrong");
        }
      };
    
  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="conatiner-fluid m-3 p3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Update Product</h1>
            <div className="m-1 w-75">
            <Select
  bordered={false}
  placeholder="Select a category"
  size="large"
  showSearch
  className="form-select mb-3"
  onChange={(value) => {
    setCategory(value);
  }}
>
  {categories?.map((c) => (
    <Select.Option key={c._id} value={c._id}>
      {c.name}
    </Select.Option>
  ))}
</Select>

              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="Product-Photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={brand}
                  placeholder="write a Brand name"
                  className="form-control"
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="write a Price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="write a quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
              <Select
                bordered={false}
                placeholder="Select Shipping"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setShipping(value);
                }}
                value={shipping ? "Yes" : "No"}
              >
                <Select.Option value="0">No</Select.Option>
                <Select.Option value="1">Yes</Select.Option>
              </Select>

              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  UPDATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UpdateProduct
