import React, { useState, useEffect } from "react";

// import Header from "./Header";
import MarsRoverCard from "./MarsRoverCard";

import "./style.css";

const MarsRover = () => {
  const [marsRover, setMarsRover] = useState({});
  const [sol, setSol] = useState("");
  const [rover, setRover] = useState("");
  const [camera, setCamera] = useState("");
  const [click, setClick] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=uKhGhSdAakKNP5bkpWNEaMniMoyNrQAwtqLmNqXH`
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
      <div className="options">
        <div className="row">
          <div className="col">
            <h1>Select rover and camera angle you would like to view</h1>
          </div>
        </div>
        <div className="row">
          <form onSubmit={submitHandler}>
            <div className="col">
              <select value={rover} onChange={roverHandler}>
                <option value="null">Select a Rover</option>
                <option value="curiosity">Curiosity</option>
                <option value="opportunity">Opportunity</option>
                <option value="spirit">Spirit</option>
              </select>
            </div>
            <div className="col">
              <select value={camera} onChange={cameraHandler}>
                <option value="null">Select a Camera Angle</option>
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
              </select>
            </div>
            <div className="col">
              <input
                id="sol"
                type="number"
                name="sol"
                placeholder="Sol Number"
                min="1"
                max="1000"
                value={sol}
                onChange={solHandler}
                className="form-control"
                required
              />
            </div>
            <div className="col">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        </div>
        <div className="row">
          <div>{click && <MarsRoverCard mars={marsRover.photos} />}</div>
        </div>
      
    </>
  );
};

export default MarsRover;
