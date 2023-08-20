import React, { useState,useEffect } from 'react'
import { useAuth } from '../../context/Auth';
import UserMenu from './../../components/layout/UserMenu';
import Layout from '../../components/layout/layout';
import axios from "axios";
import { toast } from 'react-hot-toast';

const Profile = () => {
  //context
 const [auth,setAuth]=useAuth()
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data 
  useEffect(()=>{
    const {email,name,address,phone}=auth?.user
    setName(name)
    setAddress(address)
    setEmail(email)
    setPhone(phone)
  },[auth?.user])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
       
      });
     
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Your Profile"}>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
            <div className='col-md-3'></div>
            <UserMenu/>
            <div className='col-md-9'></div>
            <h1>
            <section
  className="body"
  style={{
    backgroundColor: "black",
  }}
>

        <section>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="box">
            <div className="square" style={{ "--i": 0 }}></div>
            <div className="square" style={{ "--i": 1 }}></div>
            <div className="square" style={{ "--i": 2 }}></div>
            <div className="square" style={{ "--i": 3 }}></div>
            <div className="square" style={{ "--i": 4 }}></div>
            <div className="container-register ">
              <div className="form">
                <h2 className="title">USER PROFILE</h2>

                <form onSubmit={handleSubmit}>
                  <div className="inputBox">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Your Name"
                      required
                      autoFocus
                      autocomplete="off"
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Your Email "
                      required
                      autocomplete="off"
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter Your Password"
                      required
                      autocomplete="off"
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Your Phone"
                      required
                      autocomplete="off"
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Your Address"
                      required
                      autocomplete="off"
                    />
                  </div>

                  <div class="inputBox">
                    <input type="submit" value="UPDATE" />
                  </div>
                  {/* <button className="inputBox-button" type="submit">
                    REGISTER
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
            </h1>
        </div>
      </div>

    </Layout>
  )
}

export default Profile
