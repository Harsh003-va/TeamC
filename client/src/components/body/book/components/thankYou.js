import React from "react";
import { Row, Col } from "reactstrap";

export default _ => {
  return (
    <div>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Thank You!</p>
          <i className="#"></i>
          <p className="thanks-subtext">
            booking confirmed
          </p>
        </Col>
      </Row>
    </div>
  );
};
