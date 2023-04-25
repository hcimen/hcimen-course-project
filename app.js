const express = require('express');
const morgan = require('morgan');
const path = require('node:path');

const app = express();

app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render ('pages/index');
});

app.get('/about', (req, res) => {
  res.render ('pages/about');
});

app.get('/login', (req, res) => {
  res.render ('pages/login');
});

app.get('/admin-console', (req, res) => {
  res.render ('pages/admin');
});

app.get('/admin-console/create-book', (req, res) => {
  res.render ('pages/create');
});

app.get('/books/:id', (req, res) => {
  res.render ('pages/book');
});

app.get('/create', (req, res) => {
  res.render ('pages/create');
});

app.get('/admin-console/update-book/:id', (req, res) => {
  res.render ('pages/update');
});

const port = 3000; 
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

