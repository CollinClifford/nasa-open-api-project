const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
// const fetch = require('node-fetch');

async function list(req, res) {
  let data = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=uKhGhSdAakKNP5bkpWNEaMniMoyNrQAwtqLmNqXH`
  );
  res.json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
};
