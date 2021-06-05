import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { addToCart } from '../../Redux/actions/cartAction';

const SingleService = ({ service }) => {
    const { image, title, location, price, id } = service;
    // const dispatch = useDispatch()

    return (
        <Col md={3} className="mt-4">
            <Card style={{ width: '16rem' }} className="card">
                <Card.Img variant="top" src={image} className="img-fluid"
                    style={{ height: '160px' }} />
                <Card.Body>
                    <Card.Title> <b>{title}</b> </Card.Title>
                    <Card.Text>
                        <FontAwesomeIcon icon={faMapMarked} /> {location}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5><b>$ {price}</b></h5>
                        <Link to={`/details/${id}`}>
                            <button><b>Details</b></button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleService;