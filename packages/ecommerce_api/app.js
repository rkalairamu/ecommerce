const express = require("express");
const app = express();
const port = 3005;
const navConfig = require("./nav_config");
const cors = require("cors");

app.use(cors());

/**
 * get the list of navigation entries
 */
app.get("/config/nav", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(navConfig);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
