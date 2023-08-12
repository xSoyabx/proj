// import React from "react";
// import Layout from "../components/layout/layout";

// const Contact = () => {
//   return (
//     <Layout>
//       <h1>Contact Page</h1>
//     </Layout>
//   );
// };

// export default Contact;

import React from "react";
import Layout from "../components/layout/layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact-1.jpg"
            alt="contact-us"
            x
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="c-text bg-dark p-2 text-white text-center">
            CONTACT US
          </h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <Link
              className="social-link instagram"
              to="https://www.instagram.com/helmets_for_india/?hl=en"
            >
              <FiInstagram /> : Instagram
            </Link>
          </p>
          <p className="mt-3">
            <Link
              className="social-link facebook"
              to="https://www.facebook.com/HelmetMusic/"
            >
              <FaSquareFacebook /> : Facebook
            </Link>
          </p>
          <p className="mt-3">
            <Link className="social-link whatsapp" to="Whatsapp">
              <FaWhatsapp /> : Whatsapp
            </Link>
          </p>
          <p className="mt-3">
            <BiMailSend /> : dummy@email.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
