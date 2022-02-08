import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

// import Header from "./Header";
import MarsRoverCard from "./MarsRoverCard";

const API_KEY = process.env.REACT_APP_API_KEY;

const MarsRover = () => {
  const [marsRover, setMarsRover] = useState({});
  const [sol, setSol] = useState("");
  const [rover, setRover] = useState("");
  const [camera, setCamera] = useState("");
  const [click, setClick] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then(setMarsRover)
      .then(setClick(true))
      .catch((error) => {
        console.log(error);
      });
  };

  const cameraHandler = (event) => {
    setCamera(event.target.value);
  };

  const roverHandler = (event) => {
    setRover(event.target.value);
  };

  const solHandler = (event) => {
    setSol(event.target.value);
  };

  return (
    <>
      <Container>
        <Row style={{ textAlign: "center", margin: "20px" }}>
          <Form onSubmit={submitHandler}>
            <Col>
              <Form.Group className="mb-3" controlId="formSelectRover">
                <Form.Select
                  aria-label="Select a Rover"
                  value={rover}
                  onChange={roverHandler}
                >
                  <option>Select a Rover</option>
                  <option value="curiosity">Curiosity</option>
                  <option value="opportunity">Opportunity</option>
                  <option value="spirit">Spirit</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formSelectCamera">
                <Form.Select
                  aria-label="Select a Camera Angle"
                  value={camera}
                  onChange={cameraHandler}
                >
                  <option>Select a Camera Angle</option>
                  <option value="FHAZ">Front Hazard Avoidance Camera</option>
                  <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                  <option value="MAST">Mast Camera</option>
                  <option value="CHEMCAM">Chemistry and Camera Complex</option>
                  <option value="MAHLI">Mars Hand Lens Imager</option>
                  <option value="MARDI">Mars Descent Imager</option>
                  <option value="NAVCAM">Navigation Camera</option>
                  <option value="PANCAM">Panoramic Camera</option>
                  <option value="MINITES">
                    Miniature Thermal Emission Spectrometer
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Position of Sun</Form.Label>
                <Form.Range
                  min="1"
                  max="1000"
                  value={sol}
                  onChange={solHandler}
                />
              </Form.Group>
            </Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>

      <div className="row">
        <div>
          {click && (
            <MarsRoverCard mars={marsRover.photos} marsInfo={marsRover} />
          )}
        </div>
      </div>
    </>
  );
};

export default MarsRover;
