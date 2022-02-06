import React, { useState, useEffect } from "react";

// import { listAllNEO } from "../utils/api";

const Neows = () => {
  const [nasa, setNasa] = useState([]);
  const [error, setError] = useState(null);
  const [click, setClick] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=uKhGhSdAakKNP5bkpWNEaMniMoyNrQAwtqLmNqXH`
    )
      .then((response) => response.json())
      .then(setNasa)
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(nasa);
  return <>here</>;
};

export default Neows;
