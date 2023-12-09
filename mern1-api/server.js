const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');    
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // Fixed typo, added useUnifiedTopology

const connection = mongoose.connection; // Fixed typo
connection.once('open', () => {
  console.log(`MongoDB connected`);
});
connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});