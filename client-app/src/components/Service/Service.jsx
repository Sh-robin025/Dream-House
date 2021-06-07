import React from "react";
import apartment from "../../Images/apartment.png";
import affordable from "../../Images/affordable.png";
import lessee from "../../Images/lessee.png";
import "./Service.css";

const Service = () => {
  return (
    <div id="service">
      <h4 className="text-center">Service</h4>
      <h1 className="serviceHeadline text-center">
        We're an agency tailored to all <br />
        clients needs that always delivers
      </h1>
      <div className="serviceCard container">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={apartment} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Wide Range of Properties</h5>
                <p className="card-text">
                  With a robust selection of popular properties on hand, as well
                  as leading properties from experts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={affordable} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Financing Made Easy</h5>
                <p className="card-text">
                  Our stress-free finance department that can find financial
                  solutions to save you money.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={lessee} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Trusted by Thousands</h5>
                <p className="card-text">
                  10 new offers every day, 350 offers on site, trusted by a
                  community of thousands of users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
