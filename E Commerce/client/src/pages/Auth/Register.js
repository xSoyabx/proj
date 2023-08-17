import React, { useState } from "react";
import Layout from "./../../components/layout/layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
import "../../styles/login-register-forget.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  //   return (
  //     <Layout title="Register - Ecommer App">
  //       <div className="form-container ">
  //         <form onSubmit={handleSubmit}>
  //           <h4 className="title">REGISTER FORM</h4>
  //           <div className="mb-3">
  //             <input
  //               type="text"
  //               value={name}
  //               onChange={(e) => setName(e.target.value)}
  //               className="form-control"
  //               id="exampleInputEmail1"
  //               placeholder="Enter Your Name"
  //               required
  //               autoFocus
  //             />
  //           </div>
  //           <div className="mb-3">
  //             <input
  //               type="email"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //               className="form-control"
  //               id="exampleInputEmail1"
  //               placeholder="Enter Your Email "
  //               required
  //             />
  //           </div>
  //           <div className="mb-3">
  //             <input
  //               type="password"
  //               value={password}
  //               onChange={(e) => setPassword(e.target.value)}
  //               className="form-control"
  //               id="exampleInputPassword1"
  //               placeholder="Enter Your Password"
  //               required
  //             />
  //           </div>
  //           <div className="mb-3">
  //             <input
  //               type="text"
  //               value={phone}
  //               onChange={(e) => setPhone(e.target.value)}
  //               className="form-control"
  //               id="exampleInputEmail1"
  //               placeholder="Enter Your Phone"
  //               required
  //             />
  //           </div>
  //           <div className="mb-3">
  //             <input
  //               type="text"
  //               value={address}
  //               onChange={(e) => setAddress(e.target.value)}
  //               className="form-control"
  //               id="exampleInputEmail1"
  //               placeholder="Enter Your Address"
  //               required
  //             />
  //           </div>
  //           <div className="mb-3">
  //             <input
  //               type="text"
  //               value={answer}
  //               onChange={(e) => setAnswer(e.target.value)}
  //               className="form-control"
  //               id="exampleInputEmail1"
  //               placeholder="What Is Your Favorite Movie ?"
  //               required
  //             />
  //           </div>
  //           <button type="submit" className="btn btn-primary">
  //             REGISTER
  //           </button>
  //         </form>
  //       </div>
  //     </Layout>
  //   );
  // };

  return (
    <Layout title="Register - Ecommerce App">
      <section
        className="body"
        style={{
          /* backgroundImage: `url(${backgroundImage})` */ backgroundColor:
            "black",
        }}
      >
        <section>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="box">
            <div className="square" style={{ "-i": 0 }}></div>
            <div className="square" style={{ "-i": 1 }}></div>
            <div className="square" style={{ "-i": 2 }}></div>
            <div className="square" style={{ "-i": 3 }}></div>
            <div className="square" style={{ "-i": 4 }}></div>
            <div className="container ">
              <div className="form">
                <h2 className="title">Register</h2>

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
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="What Is Your Favorite Movie ?"
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <button type="submit">REGISTER</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Register;
