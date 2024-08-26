console.time('cold-start');
import express from "express";

const app = express();
const port = 3000;

app.get("/plaintext", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.timeEnd('cold-start');
});
