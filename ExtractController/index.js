const express = require("express");
const router = express.Router();
var Tesseract = require("tesseract.js");
router.post("/", async (req, res) => {
  try {
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