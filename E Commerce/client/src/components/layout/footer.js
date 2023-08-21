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
import { BiSolidUpArrow } from "react-icons/bi";
import "../../styles/footer.css";

const Footer = () => {
  return (
    //     <div>
    //       {/* <div className="container-footer"> */}
    //       <div className="col-md-14 col-lg-13">
    //         <div className="container-footer">
    //           <NavLink to="/" style={{ textDecoration: "none" }}>
    //             <span
    //               className="footer-logo"
    //               style={{
    //                 color: "Red",
    //                 fontSize: "29px",
    //                 fontFamily: "lost-treasure",
    //                 cursor: "pointer",
    //                 marginLeft: "40px",
    //               }}
    //             >
    //               Rohini Helmets
    //             </span>
    //           </NavLink>
    //           <p className="footer-info-text">
    //             Reference site about Lorem Ipsum, giving information on its origins,
    //             as well as a random Lipsum generator.
    //           </p>
    //           <div className="col-md-12">
    //             <div className="footer-menu">
    //               <ul>
    //                 <li>
    //                   <NavLink to="/" className="nav-link" aria-current="page">
    //                     Home
    //                   </NavLink>
    //                 </li>
    //                 <li>
    //                   <NavLink to="#" className="nav-link" aria-current="page">
    //                     Terms
    //                   </NavLink>
    //                 </li>
    //                 <li>
    //                   <NavLink
    //                     to="/policy"
    //                     className="nav-link"
    //                     aria-current="page"
    //                   >
    //                     Privacy Policy
    //                   </NavLink>
    //                 </li>
    //                 <li>
    //                   <NavLink
    //                     to="/contact"
    //                     className="nav-link"
    //                     aria-current="page"
    //                   >
    //                     Contact
    //                   </NavLink>
    //                 </li>
    //               </ul>
    //             </div>
    //             <div className="footer-social-link">
    //               <h3>Follow us</h3>
    //               <ul className="ul-1">
    //                 <li>
    //                   <Link
    //                     className="li-1 footer-social-link facebook"
    //                     to="https://www.facebook.com/HelmetMusic/"
    //                   >
    //                     <FaFacebook /> : Facebook
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link
    //                     className="li-1 footer-social-link instagram"
    //                     to="https://www.instagram.com/helmets_for_india/?hl=en"
    //                   >
    //                     <FaInstagram /> : Instagram
    //                   </Link>
    //                   <li>
    //                     <Link
    //                       className="li-1 footer-social-link whatsapp"
    //                       to="Whatsapp"
    //                     >
    //                       <FaWhatsapp /> : Whatsapp
    //                     </Link>
    //                   </li>
    //                   <li className="li-1">
    //                     <BiMailSend /> : dummy@email.com
    //                   </li>
    //                   <li className="li-1">
    //                     <BiPhoneCall /> : 012-3456789
    //                   </li>
    //                   <li className="li-1">
    //                     <BiSupport /> : 1800-0000-0000 (toll free)
    //                   </li>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //           {/* </div> */}
    //           {/* </div> */}
    //         </div>

    //         <div className="copyright">
    //           <div className="container-end-footer">
    //             <div className="row">
    //               <div className="col-md-12">
    //                 <span>Copyright © 2019, All Right Reserved Seobin</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div id="back-to-top" className="back-to-top">
    //         <button
    //           className="btn btn-dark"
    //           title="Back to Top"
    //           style={{ display: "block" }}
    //         >
    //           <BiSolidUpArrow />
    //         </button>
    //       </div>
    //     </div>
    //   );
    // };
    <div className="parent-footer">
      <div className="angry-grid">
        <div id="item-0">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <span
              className="footer-logo"
              style={{
                color: "Red",
                fontSize: "40px",
                fontFamily: "lost-treasure",
                cursor: "pointer",
              }}
            >
              Rohini Helmets
            </span>
          </NavLink>
        </div>
        <div id="item-1">
          <p className="footer-info-text">
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator.
          </p>
        </div>
        <div id="item-2">
          <div className="footer-social-link">
            <h3>Follow us</h3>
            <ul className="ul-1">
              <li>
                <Link
                  className="li-1 footer-social-link facebook"
                  to="https://www.facebook.com/HelmetMusic/"
                >
                  <FaFacebook /> : Facebook
                </Link>
              </li>
              <li>
                <Link
                  className="li-1 footer-social-link instagram"
                  to="https://www.instagram.com/helmets_for_india/?hl=en"
                >
                  <FaInstagram /> : Instagram
                </Link>
                <li>
                  <Link
                    className="li-1 footer-social-link whatsapp"
                    to="Whatsapp"
                  >
                    <FaWhatsapp /> : Whatsapp
                  </Link>
                </li>
                <li className="li-1">
                  <BiMailSend /> : dummy@email.com
                </li>
                <li className="li-1">
                  <BiPhoneCall /> : 012-3456789
                </li>
                <li className="li-1">
                  <BiSupport /> : 1800-0000-0000 (toll free)
                </li>
              </li>
            </ul>
          </div>
        </div>
        <div id="item-3">
          <div className="footer-menu">
            <h3>USEFUL LINKS</h3>
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
                <NavLink to="/policy" className="nav-link" aria-current="page">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-link" aria-current="page">
                  Contact
                </NavLink>
              </li>
            </ul>
            {/* FORM KA INPUT TYPE */}
          </div>
        </div>
        <div id="item-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.676014414946!2d77.1250143752211!3d28.729226875612085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d016a4902905d%3A0xe26f6b10a8901011!2sROHINI%20Helmets!5e0!3m2!1sen!2sin!4v1692607916253!5m2!1sen!2sin"
            width="100%"
            height="100%"
            // style="border:0;"
            // className="item-4-map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div id="item-5">
        <div className="copyright">
          <span>Copyright © 2019, All Right Reserved Seobin</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
