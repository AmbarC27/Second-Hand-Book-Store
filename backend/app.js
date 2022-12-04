const express = require('express');
const router = require('./routes/book-routes.js');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/books', router);

mongoose
  .connect(
    'mongodb+srv://admin:xgxjKUO8xTOKJ0aQ@cluster0.lhkuv98.mongodb.net/bookStore?retryWrites=true&w=majority'
  )
  .then(() => console.log('Database connected'))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

// xgxjKUO8xTOKJ0aQ
