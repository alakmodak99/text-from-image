const express = require("express");
const router = express.Router();
var Tesseract = require("tesseract.js");
router.post("/", async (req, res) => {
  try {
    if (!req?.body?.imageUrl) {
      res.status(400).send({
        message: "Image url is required",
      });
      return;
    }
    let data = await Tesseract?.recognize(req?.body?.imageUrl, "eng");
    res?.status(201).send({
      message: "success",
      data: data?.data?.text,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
