import React from "react";
import { Link, NavLink } from "react-router-dom";
// import "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css";
// import"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js";
// import "cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
import Policy from "./../../pages/Policy";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
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
                marginLeft: "40px",
              }}
            >
              Rohini Helmets
            </span>
          </NavLink>
          <p className="footer-info-text">
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator.
          </p>
          <div className="col-md-12">
            <div className="footer-menu">
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
            <div className="footer-social-link">
              <h3>Follow us</h3>
              <ul>
                <li>
                  <Link
                    className="footer-social-link facebook"
                    to="https://www.facebook.com/HelmetMusic/"
                  >
                    <FaFacebook /> : Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-social-link instagram"
                    to="https://www.instagram.com/helmets_for_india/?hl=en"
                  >
                    <FaInstagram /> : Instagram
                  </Link>
                  <li>
                    <Link className="footer-social-link whatsapp" 
                          to="Whatsapp">
                      <FaWhatsapp /> : Whatsapp
                    </Link>
                  </li>
                  <li>
                    <BiMailSend /> : dummy@email.com
                  </li>
                  <li>
                    <BiPhoneCall /> : 012-3456789
                  </li>
                  <li>
                    <BiSupport /> : 1800-0000-0000 (toll free)
                  </li>
                </li>
              </ul>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>

        <div className="copyright">
          <div className="container-end-footer">
            <div className="row">
              <div className="col-md-12">
                <span>Copyright © 2019, All Right Reserved Seobin</span>
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
          <BiSolidUpArrow />
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

        