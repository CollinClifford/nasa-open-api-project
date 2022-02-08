import React, { useState, useEffect } from "react";
import { Accordion, Container, Row, Col, Image } from "react-bootstrap";

const API_KEY =
  process.env.REACT_APP_API_KEY

function POD() {
  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    )
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
      <Row style={{ textAlign: "center", margin: "20px" }}>
        <Col>
          <h1>Astrology Picture of the Day</h1>
          <h2>{date}</h2>
        </Col>
      </Row>
      <Row style={{ margin: "20px" }}>
        <Col>
          {(!image && <p>loading...</p>) || splitImage.includes("youtube") ? (
            <>{YouTubeEmbed(image)}</>
          ) : (
            <Image src={image} alt={nasa.title} style={{maxWidth: "100%", maxHeight: "100%"}}/>
          )}
        </Col>
        <Col>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{nasa.title}</Accordion.Header>
              <Accordion.Body>{nasa.explanation}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default POD;
