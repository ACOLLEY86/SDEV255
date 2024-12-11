var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render("clients");   // display clients.jade view 
                           // (.jade extension is enabled by 
                           // default)
});
module.exports = router;