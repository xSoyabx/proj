import React from 'react'
import Layout from '../components/layout/layout'
import { useCart } from '../context/cart'
import { useAuth } from '../context/Auth'
import { useNavigate } from 'react-router-dom'
const CartPage = () => {
    const [cart,setCart] = useCart()
    const [auth,setAuth] = useAuth()
    const navigate = useNavigate()

//total price
const totalPrice=()=>{
    try{
let total=0
cart?.map(item=>{total = total+item.price})
return total.toLocaleString("en-IN",{
    style : "currency",
    currency:"INR"
})
    } catch(error){
        console.log(error)
    }
}

    //delete item
    const removeCartItem = (pid)=>{
        try{
            let myCart=[...cart]
            let index = myCart.findIndex(item=>item._id===pid)
            myCart.splice(index,1)
            setCart(myCart)
            localStorage.setItem("cart",JSON.stringify(myCart))
         }
         catch(error){
            console.log(error)
         }
    }
  return (
    <Layout>
      <div className='container'>
      </div>
        <div className='row'>
        <div className='col-md-12'>
    <h1 className='text-center bg-light p-2 mb-1'>
        {`Hello ${auth?.token && auth?.user?.name}`}
    </h1>
    <h4 className='text-center'>
        {cart?.length === 0 
            ? "Your Cart is empty"
            : `You Have ${cart.length} item${cart.length > 1 ? 's' : ''} in your cart ${auth?.token ? "" : "please login to checkout"}`}
    </h4>
</div>

        </div>
        <div className='row'>
            <div className='col-md-6'>
                <div className='row'>
                    {
                        cart?.map(p=>(
                            <div className='row mb-2 card'>
                                <div className='col-md-4'>
                                <img
                      className="product-image"
                      src={`/api/v1/product/product-photo/${p._id}`}
                      alt={p.name}
                      width="100px"
                      height="100px"
                    />
                                </div>
                                <div className='col-md-8'>
                                    <h4>{p.name}</h4>
                                    {console.log(p.description)}
                                    <h6>{p.description.substring(0,30)}</h6>
                                <h6>Price : {p.price}</h6>
                                <button className='btn btn-danger' onClick={()=> removeCartItem(p._id)}>
                                    Remove
                                </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='col-md-4 text-center'>
                <h2>
                    Cart Summary
                </h2>
                <h6>
                    Total |Checkut |Payment
                </h6>
                <hr/>
                <h4>Total : {totalPrice()}</h4>
            </div>
        </div>
      
    </Layout>
  )
}

export default CartPage
