import React from "react";
import { Row, Card } from "react-bootstrap";
import apartment from "../../Images/apartment.png";
import affordable from "../../Images/affordable.png";
import lessee from "../../Images/lessee.png";
import "./Services.css";

const Service = () => {
  return (
    <div id="service">
      <h5 className="text-center">
        <b>Service</b>
      </h5>
      <h2 className="serviceHeadline text-center">
        <b>
          We're an agency tailored to all <br />
          clients needs that always delivers
        </b>
      </h2>
      <div className="serviceCard container">
        <Row className="justify-content-center">
          <Card className="col-md-4" style={{ width: "23rem" }}>
            <div className="d-flex justify-content-center">
              <Card.Img
                variant="top"
                src={apartment}
                className="img-fluid"
                style={{ height: "130px", width: "130px" }}
              />
            </div>
            <Card.Body className="text-center">
              <Card.Title>
                {" "}
                <b>Wide Range of Properties</b>{" "}
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-md-4" style={{ width: "23rem" }}>
            <div className="d-flex justify-content-center">
              <Card.Img
                variant="top"
                src={affordable}
                className="img-fluid"
                style={{ height: "130px", width: "130px" }}
              />
            </div>
            <Card.Body className="text-center">
              <Card.Title>
                {" "}
                <b>Financing Made Easy</b>{" "}
              </Card.Title>
              <Card.Text>
                Our stress-free finance department that can find financial
                solutions to save you money.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-md-4" style={{ width: "23rem" }}>
            <div className="d-flex justify-content-center">
              <Card.Img
                variant="top"
                src={lessee}
                className="img-fluid"
                style={{ height: "130px", width: "130px" }}
              />
            </div>
            <Card.Body className="text-center">
              <Card.Title>
                {" "}
                <b>Trusted by Thousands</b>
              </Card.Title>
              <Card.Text>
                10 new offers every day, 350 offers on site, trusted by a
                community of thousands of users.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </div>
  );
};

export default Service;
