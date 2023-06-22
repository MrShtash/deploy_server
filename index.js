const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors());

app.get("/api/:name", (req, res) => {
  res.json({ message: `Hello ${req.params.name}, from server!` });
});
// if u have no env file - del
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on ${process.env.PORT || 3001} RIGHT NOW`);
});
