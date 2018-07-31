const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const cors = require('cors');
//const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
