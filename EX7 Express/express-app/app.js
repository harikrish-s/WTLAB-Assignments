const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.json());

let langs = [
  { 1: 'Javascript' },
  { 2: 'Python' },
  { 3: 'C' },
];

app.get('/langs', (req, res) => {
  res.json(langs);
});

app.post('/langs', (req, res) => {
  const newLang = req.body;
  const newId = Object.keys(newLang)[0];
  langs.push(newLang);
  res.status(201).json({ message: 'Programming Language added successfully', id: newId });
});

app.delete('/langs/:id', (req, res) => {
  const id = req.params.id;
  const index = langs.findIndex((item) => Object.keys(item)[0] === id);

  if (index !== -1) {
    langs.splice(index, 1);
    res.json({ message: ' Programming Language deleted successfully' });
  } else {
    res.status(404).json({ message: 'Programming Language not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});