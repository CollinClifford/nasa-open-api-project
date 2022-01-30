import React from "react";

import "./style.css";

const MarsRoverCard = ({ mars }) => {
  let image = [];
  if (mars) {
    for (const [key, value] of Object.entries(mars)) {
      image.push(value.img_src);
    }
  }

  return (
    <>
      <div className="container">
        {(image.length > 0 &&
          image.map((img) => {
            return <img src={`${img}`} alt={`rover`} />;
          })) || <p className="options">No image found</p>}
      </div>
    </>
  );
};

export default MarsRoverCard;
