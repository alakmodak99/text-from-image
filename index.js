const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8081;
app.get("/", (req, res) => {
  res.send(`
  <div>
  <h1>Welcome !!</h1>
    <h3>routes----> </h3>
    <br>
     Post: <br>
     /extract-text <br>
     payload : {imageUrl : Your Image url}
  </div>
  `);
});

app.use("/extract-text", require("./ExtractController/index"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});