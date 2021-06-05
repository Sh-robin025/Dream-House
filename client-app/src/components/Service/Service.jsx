import React from "react";
import { Row } from "react-bootstrap";
import SingleService from "./SingleService";
import ServiceStyle from "../../Styles/HomePage/ServiceStyle";
import data from '../../service.json';

const Service = () => {
  return (
    <ServiceStyle>
      <div className="container pt-3 pb-5">
        <div className="text-center">
          <h6>House Rent</h6>
          <h2><b>Discover Your Choice</b></h2>
        </div>
        <Row>
          {data.map(e => <SingleService service={e} key={e.id} />)}
        </Row>
      </div>
    </ServiceStyle>
  );
};

export default Service;
