"use client"
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero:React.FC = () => {
  return (
    <Container fluid className="p-0">
      <Carousel
        controls={true}
        indicators={false}
        fade={true}
        prevIcon={<FaChevronLeft className="custom-carousel-control-prev" />}
        nextIcon={<FaChevronRight className="custom-carousel-control-next" />}
      >
        <Carousel.Item>
          <div className="position-relative" style={{ height: '100vh' }}>
            <Image
              src="/img/carousel-1.jpg"
              alt="Carousel Image 1"
              layout="fill"
              objectFit="cover"
              className="img-fluid"
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(43, 57, 64, .5)' }}>
              <Container>
                <Row className="justify-content-start">
                  <Col xs={10} lg={8}>
                    <h1 className="display-3 text-white animated slideInDown mb-4">Find The Perfect Job That You Deserved</h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                    </p>
                    <Button variant="primary" className="py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</Button>
                    <Button variant="secondary" className="py-md-3 px-md-5 animated slideInRight">Find A Talent</Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="position-relative" style={{ height: '100vh' }}>
            <Image
              src="/img/carousel-2.jpg"
              alt="Carousel Image 2"
              layout="fill"
              objectFit="cover"
              className="img-fluid"
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(43, 57, 64, .5)' }}>
              <Container>
                <Row className="justify-content-start">
                  <Col xs={10} lg={8}>
                    <h1 className="display-3 text-white animated slideInDown mb-4">Find The Best Startup Job That Fit You</h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                    </p>
                    <Button variant="primary" className="py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</Button>
                    <Button variant="secondary" className="py-md-3 px-md-5 animated slideInRight">Find A Talent</Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Hero;
