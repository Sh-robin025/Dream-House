import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="">
      <div className="container">
        <div className="row text-md-start my-5 text-sm-center">
          <div className="col-md-3">
            <h4 className="" style={{ color: "#fff" }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </h4>
            <p>
              H#340(4th Floor), Road #24,
              <br /> New DOHS, Mohakhali, Dhaka, Bangladesh <br />
              Phone: +8801xxxxxxxxx <br /> Email: info@company.com
            </p>
          </div>
          <div className="col-md-3">
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li>
                <a to="/">About</a>
              </li>
              <li>
                <a to="/">Site Map</a>
              </li>
              <li>
                <a to="/">Support Center</a>
              </li>
              <li>
                <a to="/">Terms Conditions</a>
              </li>
              <li>
                <a to="/">Submit Listing</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a to="/">Quick Links</a>
              </li>
              <li>
                <a to="/">Rentals </a>
              </li>
              <li>
                <a to="/">Sales</a>
              </li>
              <li>
                <a to="/">Contact</a>
              </li>
              <li>
                <a to="/">Terms Conditions</a>
              </li>
              <li>
                <a to="/">Our Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>About US</h4>
            <p>
              We are the top real estate agency in Sydney, with agents available
              to answer any question 24/7.
            </p>
            <div className="socialIcon">
              <a
                href={`https://www.facebook.com`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.instagram.com/`}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.linkedin.com/}`}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a target="_blank" rel="noreferrer" href={`https://youtube.com`}>
                <FontAwesomeIcon icon={faYoutubeSquare} />
              </a>
            </div>
          </div>
        </div>
        <p className="copyright text-center">
          © Team 2021, all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
