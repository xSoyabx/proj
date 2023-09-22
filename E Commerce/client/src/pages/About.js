import React from "react";
import Layout from "../components/layout/layout";

const About = () => {
  return (
    <Layout title={"About us"}>
      <div className="row about ">
        <div className="col-md-6 ">
          <img
            src="/images/contact-2.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="c-text bg-dark p-2 text-white text-center">
            ABOUT US
          </h1>
          <p className="text-white text-justify mt-3">
            <b>
              ALL TYPES OF HELMETS AND RIDING ACCESSORIES ARE AVAILABLE IN YOUR
              REGION AT REASONABLE PRICES.
            </b>
          </p>
          <p className="text-white text-justify mt-2">
            WE DEAL IN STUDDS , SMK, STEELBIRD, VEGA, AXOR, ASCONE,MT, GLIDERS ,
            BSDDP, PROBIKER AND MORE BRANDS FOR HELMETS AND ACCESSORIES
          </p>
          <p className="text-white text-justify mt-2">
            <b>TYPES OF HELMETS</b>
          </p>
          <p className="text-white text-justify mt-2">
            FULL FACE HELMETS, HALF FACE/OPEN FACE HELMETS,
          </p>
          <p className="text-white text-justify mt-2">
            GRAPHIC HELMETS, FLIP UP HELMETS, KIDS HELMETS, WOMEN HELMETS, MEN
            HELMETS, LIGHT WEIGHT HELMETS, ISI MARKED , DOT PROTECTION , ECE
            CERTIFIED HELMETS
          </p>
          <p className="text-white text-justify mt-2">
            <b>RIDING ACCESSORIES</b>
          </p>
          <p className="text-white text-justify mt-2">
            GLOVES, RIDING JACKETS, BOOTS, SIDE LUGGAGE ARE ALSO AVAILABLE
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
