const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(cors()); // allows frontend to connect
app.use(express.json());

const DB_FILE = './reviews.json';

// helper to read reviews
const readReviews = () => {
  if (!fs.existsSync(DB_FILE)) return [];
  return JSON.parse(fs.readFileSync(DB_FILE));
};

// helper to save reviews
const saveReviews = (reviews) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(reviews, null, 2));
};

// GET all reviews
app.get('/api/reviews', (req, res) => {
  res.json(readReviews());
});

// POST new review
app.post('/api/reviews', (req, res) => {
  const { name, rating, comment } = req.body;
  const reviews = readReviews();
  const newReview = { name, rating, comment, time: new Date().toLocaleString() };
  reviews.unshift(newReview);
  saveReviews(reviews);
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
