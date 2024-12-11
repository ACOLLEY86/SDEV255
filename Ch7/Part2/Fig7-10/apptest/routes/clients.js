var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render("clients", { 
    clients: [
        { firstname: "Bill", lastname: "Clinton" },
        { firstname: "George", lastname: "Bush" },
        { firstname: "Barack", lastname: "Obama" },
        { firstname: "Donald", lastname: "Trump" },
        { firstname: "Joe", lastname: "Biden" },
        { firstname: "Donald", lastname: "Trump" }
    ]
  });
});
module.exports = router;