import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import DetailsPageStyle from "../Styles/DetailsPage/DetailsPageStyle";

const Details = () => {
  const [bookingInfo, setBookingInfo] = useState({});
  const product = useSelector((state) => state.product.selectedProduct);
  const { image, location, price, title, size, floor } = product;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookingInfo);
  };

  return (
    <DetailsPageStyle>
      <div className="cover text-light">
        <h2>APARTMENT</h2>
      </div>
      <Container>
        <Row className="my-5">
          <Col md={8}>
            <img
              src={image}
              alt=""
              style={{ width: "100%", height: "370px" }}
            />
            <div className="d-flex justify-content-between mt-4">
              <h2>
                <b>{title}</b>
              </h2>
              <h4>
                <b>$ {price}</b>
              </h4>
            </div>
            <h6>
              {size} sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing
              apartment for rent in {location}
            </h6>
            <h4 className="mt-4">
              <b>Price Details:-</b>
            </h4>
            <h6>Rent: $100/month (negotiable)</h6>
            <h6>Service Charge: $50/month</h6>
            <h6>Security Deposit: 3 month's rent</h6>
            <h6>Flat Release Policy: 3 month's earlier notice required</h6>
            <h4 className="mt-4">
              <b>Property Details:-</b>
            </h4>
            <h6>Address & Area: {location}</h6>
            <h6>Flat size: {size} sq-ft.</h6>
            <h6>Floor: {floor}</h6>
            <h6>
              Room Category: 3 large bedroom with 3 barandas spacious
              drawing,dinning and family living room.High decorated kitchen with
              store room.{" "}
            </h6>
            <h6>
              Facilities: 1 modern lift,All modern amenities and semi furnished.
            </h6>
            <h6>Additional facilities: </h6>
            <li>Electricity with full generator</li>
            <li>Central Gas Geyser</li>
            <li>2 Car Parking with 1 driver Accommondation</li>
            <li>Community Conference Hall</li>
            <li>Roof-top beautified garden and grassy ground</li>
            <li>Cloth hanging facilities with C.C camera</li>
          </Col>
          <Col md={4}>
            <form className="bg-light p-3" onSubmit={handleSubmit}>
              <h3 className="text-center">
                <b>Checkout</b>
              </h3>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={(e) =>
                  setBookingInfo({ ...bookingInfo, name: e.target.value })
                }
              />
              <input
                type="number"
                name="number"
                placeholder="Number"
                required
                onChange={(e) =>
                  setBookingInfo({ ...bookingInfo, number: e.target.value })
                }
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                required
                onChange={(e) =>
                  setBookingInfo({ ...bookingInfo, email: e.target.value })
                }
              />
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                rows="4"
                onChange={(e) =>
                  setBookingInfo({ ...bookingInfo, message: e.target.value })
                }
              />
              <button type="submit">
                <b>Booking Request</b>
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </DetailsPageStyle>
  );
};

export default Details;
