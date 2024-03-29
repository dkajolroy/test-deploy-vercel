import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "successfully done" });
});
app.listen(5000, () => {
  console.log("dev: http://localhost:5000");
});
