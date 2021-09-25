import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <div className="subtitle title">THIS IS</div>
      <Link to="/main">
        <div className="title">
          BLACK BEHAVIOUR<sup className="title">®</sup>
        </div>
      </Link>
      <div className="subtitle">MENTAL HEALTH FOR THE BLACK DIASPORA</div>
      <a href="https://www.instagram.com/blackbehavioursuk/">
        <img
          className="landingPage--image"
          alt="instagram"
          src="https://lh3.googleusercontent.com/proxy/_v6wfLCBVFFD_w6-oGyt5nF1tS4UV3pCIhUKSZsI4Sd3iEa3bMHQflMbeKV8WYGndDT1CHLR9_amjVH-DoA4KKCzAsR5yXU3QNge_BlQjC9PM01d3XD9"
        ></img>
      </a>
      <a
        href="mailto:info@blackbehaviours.co.uk"
        className="landingPage--email"
      >
        info@blackbehaviours.co.uk
      </a>
    </div>
  );
}
