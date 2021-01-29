const express = require("express");
const router = express.Router();
const mapdata = require("../public/js/matrix");
const fs = require("fs");
router.get("/", (req, res) =>
  res.render("dashboard", {
    user: req.user
  })
);
router.get("/mapdata", async (req, res) => {
  const data =  mapdata.mapdata();
  console.log(JSON.stringify(data));
  res.send(JSON.stringify(data));
});
router.post("/exportdata", (req, res) => {
  fs.writeFileSync("./public/js/mapdata.json", JSON.stringify(req.body));
  res.end();
});
module.exports = router;
