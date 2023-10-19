import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
  return (
    <div style={{ display: 'grid', maxHeight: 600, overflow: 'hidden' }}>
      <StaticImage
        src={`../../images/background.webp`}
        layout="fullWidth"
        objectFit="cover"
        alt=""
        style={{ gridArea: '1/1' }}
      />
      <div
        style={{ gridArea: '1/1', position: 'relative' }}
        className="text-uppercase text-white container"
      >
        <Row className="h-100">
          <Col>
            <Row className="align-items-center h-100 text-center">
              <p className="display-1 fw-bold opacity-50">IT ME</p>
              <p className="display-1 fw-bold opacity-75">IT ME</p>
              <h2 className="display-1 fw-bold">IT ME</h2>
              <p className="display-1 fw-bold opacity-75">IT ME</p>
              <p className="display-1 fw-bold opacity-50">IT ME</p>
            </Row>
          </Col>
          <Col>
            <Row className="align-items-center justify-content-center h-100">
              <h5 className="bg-dark display-5 bg-opacity-75">
                I am yours truly,
                <br />
                Wojciech Jagielnicki
                <br />
                React/Node.js developer
              </h5>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Hero;
