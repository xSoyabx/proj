import React,{useState,useEffect} from 'react'
import Layout from '../components/layout/layout';
import axios from "axios";
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
    const params=useParams()
    const [product,setProduct] = useState({})

    //initial details
    useEffect(()=>{
        if(params?.slug) getProduct()
    },[params?.slug])
    //get Product
    const getProduct=async()=>{
        try{
            const {data }= await axios.get(`/api/v1/product/get-product/${params.slug}`)
            setProduct(data?.product)
        } catch(error)
        {
            console.log(error)
        }
    }
  return (
    <Layout>
     <div className='row'>
        <div className='col-md-5'>image</div>
        <div className='col-md-5'>Details</div>
        <div className='row'>
            Similar Products
        </div>
     </div>
    </Layout>
  )
}

export default ProductDetails
