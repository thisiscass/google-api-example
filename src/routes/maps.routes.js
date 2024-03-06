const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/studios", async (req, res) => {
  try {
    // console.log('req.query', req.query);
    // console.log('res', res);

    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    const radius = req.query.radius;

    const body = {
      textQuery: "Estúdio de gravação",
      openNow: false,
      locationBias: {
        circle: {
          center: { latitude: latitude, longitude: longitude },
          radius: radius,
        },
      },
    };

    let response = await axios.post(
      "https://places.googleapis.com/v1/places:searchText",
      body,
      { headers: { "X-Goog-FieldMask": "*",
      "X-Goog-Api-Key": "" }}
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
