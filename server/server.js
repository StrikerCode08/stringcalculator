require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const StringCalculator = require("./index");

const app = express();
const calculator = new StringCalculator();

app.use(cors());
app.use(bodyParser.json());

app.post("/api/calculate", (req, res) => {
  try {
    const { input } = req.body;
    if (typeof input !== "string") {
      return res.status(400).json({ error: "Input must be a string" });
    }
    const result = calculator.add(input);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
