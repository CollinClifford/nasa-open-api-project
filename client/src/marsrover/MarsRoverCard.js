import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./marsRover.css";

const MarsRoverCard = ({ mars }) => {
  let image = [];
  if (mars) {
    for (const [key, value] of Object.entries(mars)) {
      image.push(value.img_src);
    }
  }

  return (
    <>
      <Container className="con">
        <Row className="row">
          <Col>
            {(image.length > 0 && (
              <Carousel fade>
                {image.map((img, index) => (
                  <Carousel.Item key={img}>
                    <img className="img" src={img} alt={img} />
                    <Carousel.Caption>
                      <p>
                        {index + 1} of {image.length}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            )) || (
              <p className="options">
                There are no photos for these parameters yet.
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MarsRoverCard;
