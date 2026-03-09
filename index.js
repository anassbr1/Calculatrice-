const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques (index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Addition
app.get('/add/:a/:b', (req, res) => {
  const result = parseFloat(req.params.a) + parseFloat(req.params.b);
  res.json({ result });
});

// Soustraction
app.get('/subtract/:a/:b', (req, res) => {
  const result = parseFloat(req.params.a) - parseFloat(req.params.b);
  res.json({ result });
});

// Multiplication
app.get('/multiply/:a/:b', (req, res) => {
  const result = parseFloat(req.params.a) * parseFloat(req.params.b);
  res.json({ result });
});

// Division
app.get('/divide/:a/:b', (req, res) => {
  const b = parseFloat(req.params.b);
  if (b === 0) return res.status(400).json({ error: 'Division by zero' });
  res.json({ result: parseFloat(req.params.a) / b });
});

// Modulo
app.get('/modulo/:a/:b', (req, res) => {
  const b = parseFloat(req.params.b);
  if (b === 0) return res.status(400).json({ error: 'Division by zero' });
  res.json({ result: parseFloat(req.params.a) % b });
});

module.exports = app;