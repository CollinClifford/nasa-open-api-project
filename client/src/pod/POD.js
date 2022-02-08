import React, { useState, useEffect } from "react";
import { Accordion, Container, Row, Col, Image } from "react-bootstrap";
import "./pod.css";

const API_KEY = process.env.REACT_APP_API_KEY;

function POD() {
  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then(setNasa)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const image = nasa.url;

  let splitImage;
  if (image) {
    splitImage = image.split(".");
  }

  const date = new Date().toString().split(" ").slice(0, 4).join(" ");

  const YouTubeEmbed = (embedId) => (
    <div className="video-container">
      <iframe
        width="853"
        height="480"
        src={embedId}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );

  return (
    <Container>
      <Row className="row">
        <Col>
          <h1>Astrology Picture of the Day</h1>
          <h2>{date}</h2>
        </Col>
      </Row>
      <Row className="row">
        <div className="col-sm-12 col-lg-6">
          {(!image && <p>loading...</p>) || splitImage.includes("youtube") ? (
            <>{YouTubeEmbed(image)}</>
          ) : (
            <Image className="img" src={image} alt={nasa.title} />
          )}
        </div>
        <div className="col-sm-12 col-lg-6">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{nasa.title}</Accordion.Header>
              <Accordion.Body>{nasa.explanation}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Row>
    </Container>
  );
}

export default POD;
