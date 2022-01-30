import React, { useState, useEffect } from "react";

import "./POD.css";

function POD() {
  const [nasa, setNasa] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=uKhGhSdAakKNP5bkpWNEaMniMoyNrQAwtqLmNqXH`
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

  const clickHandler = () => {
    setClick(!click);
  };

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
    <div className="App today">
      <p>Today's date is</p>
      <p>{date}</p>
      {(!image && <p>loading...</p>) || splitImage.includes("youtube") ? (
        <>{YouTubeEmbed(image)}</>
      ) : (
        <img src={image} alt={nasa.title} />
      )}

      <p>{nasa.title}</p>
      <button onClick={clickHandler}>Click for more info</button>
      {click && <p>{nasa.explanation}</p>}
    </div>
  );
}

export default POD;
