const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const isEmail = require('validator/lib/isEmail');
const isLength = require('validator/lib/isLength');
const morgan = require('morgan');
const jsonfile = require('jsonfile');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json()); // for parsing application/json

app.get('/home', (req, res) => (
    res.sendFile(path.join(__dirname, 'build', 'home.html'))
));

app.get('/about', (req, res) => (
    res.sendFile(path.join(__dirname, 'build', 'about.html'))
));

app.get('/skills', (req, res) => (
    res.sendFile(path.join(__dirname, 'build', 'skills.html'))
));

app.get('/projects', (req, res) => (
    res.sendFile(path.join(__dirname, 'build', 'projects.html'))
));

app.get('/contact', (req, res) => (
    res.sendFile(path.join(__dirname, 'build', 'contact.html'))
));

app.get('/', (req, res) => (
    res.sendFile(path.join(__dirname, 'build', 'home.html'))
));

app.get('*', (req, res) => (
    res.sendFile(path.join(__dirname, 'build', 'home.html'))
));

app.post('/contact-request', (req, res) => {
  const data = req.body;

  const validationResults = {};

  if (!isLength(data.subject, {min: 3, max: 50})) {
    validationResults['subject'] = 'A subject is required.';
  }

  if (!isLength(data.message, {min: 3, max: 50})) {
    validationResults['message'] = 'A message is required.';
  }

  if (!isLength(data.name, {min: 2, max: 50})) {
    validationResults['name'] = 'Your name is required.';
  }

  if (!isEmail(data.email)) {
    validationResults['email'] = 'Your email address is required.';
  }

  res.setHeader('Content-Type', 'application/json');

  if (Object.keys(validationResults).length) {
    res.json({error: validationResults});
  } else {

    // logging form data as mail
    jsonfile.writeFile(path.join(__dirname, 'mail', `form-data-${Date.now()}.json`), data, (err) => {
      console.error(err);
    });

    res.json({success: true});
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
