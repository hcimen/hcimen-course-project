const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('This route points to the Home page');
});

app.get('/about', (req, res) => {
  res.send('This route points to the About page');
});

app.get('/login', (req, res) => {
  res.send('This route points to the Login page');
});

app.get('/admin-console', (req, res) => {
  res.send('This route points to the Admin Console page');
});

app.get('/admin-console/create-book', (req, res) => {
  res.send('This route points to the Create page');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
