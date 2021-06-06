import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productDetails } from "../../Redux/actions/actions";

const SingleService = ({ product }) => {
  const { image, title, location, price, id } = product;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDetails = (p) => {
    history.push(`/details/${p.id}`);
    dispatch(productDetails(p));
  };

  return (
    <Col md={3} className="mt-4 d-flex justify-content-center">
      <Card style={{ width: "16rem" }} className="card">
        <Card.Img
          variant="top"
          src={image}
          className="img-fluid"
          style={{ height: "160px" }}
        />
        <Card.Body>
          <Card.Title>
            {" "}
            <b>{title}</b>{" "}
          </Card.Title>
          <Card.Text>
            <FontAwesomeIcon icon={faMapMarked} /> {location}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <h5>
              <b>$ {price}</b>
            </h5>
            <button onClick={() => handleDetails(product)}>
              <b>Details</b>
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleService;
