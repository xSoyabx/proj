import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="dk-footer-box-info">
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <span
                  className="footer-logo"
                  style={{
                    color: "Red",
                    fontSize: "23px",
                    fontFamily: "lost-treasure",
                    cursor: "pointer",
                    marginRight: "30px",
                    marginLeft: "20px",
                  }}
                >
                  Rohini Helmets
                </span>
              </NavLink>
                  <p class="footer-info-text">
                     Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      /* <h4 className="text-center">
        2023 Bike Helmets & Accessories. All rights reserved &copy; Rohini
        Helmet.
        <p className="text-center mt-3">
          <Link to="/about">About </Link> |<Link to="/contact">Contact </Link> |
          <Link to="/policy">Privacy Policies </Link> |
        </p>
      </h4> 
        </div>*/
  );
};

export default Footer;
