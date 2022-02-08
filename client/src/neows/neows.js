import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NeowsCard from "./NeowsCard";
import "./neowsCard.css";
const API_KEY = process.env.REACT_APP_API_KEY;

const Neows = () => {
  const [nasa, setNasa] = useState([]);
  const [click, setClick] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then(setNasa)
      .then(setClick(true))
      .catch((error) => {
        console.log(error);
      });
  };

  const startDateHandler = (event) => {
    setStartDate(event.target.value);
  };

  const endDateHandler = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <>
      <Container>
        <Row className="row">
          <Form onSubmit={submitHandler}>
            <Col>
              <Form.Label>Select a Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                placeholder="Start Date"
                value={startDate}
                onChange={startDateHandler}
              />
            </Col>
            <Col className="mt-3">
              <Form.Label>Select an End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                placeholder="End Date"
                value={endDate}
                onChange={endDateHandler}
              />
            </Col>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
      <div className="row">
        <div>{click && <NeowsCard neowsInfo={nasa} />}</div>
      </div>
    </>
  );
};

export default Neows;
