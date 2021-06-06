import React from "react";
import { Row } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import ProductStyle from "../../Styles/HomePage/ProductStyle";
import data from '../../products.json';

const Service = () => {
  return (
    <ProductStyle>
      <div className="container pt-3 pb-5">
        <div className="text-center">
          <h5>House Rent</h5>
          <h2><b>Discover Your Choice</b></h2>
        </div>
        <Row>
          {data.map(e => <SingleProduct product={e} key={e.id} />)}
        </Row>
      </div>
    </ProductStyle>
  );
};

export default Service;
