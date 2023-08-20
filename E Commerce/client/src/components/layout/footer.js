import React from "react";
import { Link, NavLink } from "react-router-dom";
// import "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css";
// import"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js";
// import "cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
import Policy from "./../../pages/Policy";
import {BiSolidUpArrow} from "react-icons/bi";

const Footer = () => {
  return (
    <div>
        {/* <div className="container-footer"> */}
            <div className="col-md-14 col-lg-13">
              <div className="container-footer">
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <span
                    className="footer-logo"
                    style={{
                      color: "Red",
                      fontSize: "29px",
                      fontFamily: "lost-treasure",
                      cursor: "pointer",
                      marginLeft: "20px",
                    }}
                  >
                    Rohini Helmets
                  </span>
                </NavLink>
                <p className="footer-info-text">
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum generator.
                </p>
                {/* <div className="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            {/* </div> */}
          {/* </div> */}
      </div>

      <div className="copyright">
        <div className="container-end-footer">
          <div className="row">
            <div className="col-md-6">
              <span>Copyright © 2019, All Right Reserved Seobin</span>
            </div>
            <div className="col-md-6">
              <div className="copyright-menu">
                <ul>
                  <li>
                    <NavLink to="/" className="nav-link" aria-current="page">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="nav-link" aria-current="page">
                      Terms
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/policy"
                      className="nav-link"
                      aria-current="page"
                    >
                      Privacy Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className="nav-link"
                      aria-current="page"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="back-to-top" className="back-to-top">
        <button
          className="btn btn-dark"
          title="Back to Top"
          style={{ display: "block" }}
        >
          <BiSolidUpArrow/>
        </button>
      </div>
    </div>
    
  );
};

export default Footer;

/* <h4 className="text-center">
        2023 Bike Helmets & Accessories. All rights reserved &copy; Rohini
        Helmet.
        <p className="text-center mt-3">
          <Link to="/about">About </Link> |<Link to="/contact">Contact </Link> |
          <Link to="/policy">Privacy Policies </Link> |
        </p>
      </h4> 
        </div>*/

        