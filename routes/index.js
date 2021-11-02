const express = require("express");
const dummyData = require("../dummyData")

let router = express.Router();

router.get("/", function (req, res, next) {
        try {
            return res.status(200).send({data: dummyData});
        } catch (err){
            console.log(err)
            return res.status(500).send({error: '!Oops something went wrong, we are looking at it'})
        }
  });

module.exports = router;
