import React,{useState,useEffect} from 'react'
import Layout from './../components/layout/layout';
import axios from "axios";
import { useParams } from 'react-router-dom';
const CategoryProduct = () => {
  const params=useParams()
  const [products,setProducts]=useState([])
  const [category,setCategory]=useState([])

  useEffect(()=>{
      if(params?.slug) getProductsByCat()
  },[params?.slug])
  const getProductsByCat = async()=>{
    try{
      const {data} = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
        )
      setProducts(data?.products)
      setCategory(data?.category)
    } catch(error){
      console.log(error)
    }
  }
  return (
    <Layout>
      <div className='container mt-3'>
        <h1>{category?.name}</h1>
        
          
      </div>
    </Layout>
  )
}

export default CategoryProduct
