"use client"
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const About:React.FC= () => {
  return (
    <div className="py-5">
      <Container>
        <Row className="g-5 align-items-center">
          <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
            <Row className="g-0 about-bg rounded overflow-hidden">
              <Col xs={6} className="text-start">
                <Image
                  className="img-fluid w-100"
                  src="/img/about-1.jpg"
                  alt="About 1"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </Col>
              <Col xs={6} className="text-start">
                <Image
                  className="img-fluid"
                  src="/img/about-2.jpg"
                  alt="About 2"
                  layout="responsive"
                  width={425}
                  height={500}
                  style={{ marginTop: '15%' }}
                />
              </Col>
              <Col xs={6} className="text-end">
                <Image
                  className="img-fluid"
                  src="/img/about-3.jpg"
                  alt="About 3"
                  layout="responsive"
                  width={425}
                  height={500}
                />
              </Col>
              <Col xs={6} className="text-end">
                <Image
                  className="img-fluid w-100"
                  src="/img/about-4.jpg"
                  alt="About 4"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4">We Help To Get The Best Job And Find A Talent</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
            <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
            <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
            <Button variant="primary" className="py-3 px-5 mt-3">Read More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
