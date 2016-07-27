/**
 * Created by Thomas on 7/26/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');



router.get("/", function(req,res){
    //var file = req.params[0] || "../public/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", "assets/views/index.html"));
});

module.exports = router;