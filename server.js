const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  const data = JSON.parse(fs.readFileSync("data/contacts.json", "utf8"));
  data.push({ name, email, message, date: new Date() });

  fs.writeFileSync("data/contacts.json", JSON.stringify(data, null, 2));
  res.status(200).send("Saved");
});

app.get("/api/contacts", (req, res) => {
  const data = fs.readFileSync("data/contacts.json", "utf8");
  res.json(JSON.parse(data));
});

app.listen(3000, () => {
  console.log("PrimeSlides server running on http://localhost:3000");
});
