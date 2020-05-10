var express = require('express');
var router = express.Router();

messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini message board', messages: messages });
});

router.get('/new', function(req, res) {
  res.render('form', {heading: 'New message'});
});

router.post('/new', function(req, res) {
  name = req.body.name;
  text = req.body.text;
  messages.push({
    text: text,
    user: name,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;
