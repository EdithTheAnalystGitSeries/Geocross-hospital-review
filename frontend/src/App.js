import { useState, useEffect } from 'react';
import { getReviews, sendReview } from './appDodgeSend';
import './App.css'; // add this line

function App() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    getReviews().then(data => setReviews(data)).catch(() => alert('API is down'));
  }, []);

  const submitReview = async (e) => {
    e.preventDefault();
    await sendReview(name, rating, comment);
    setName(''); setRating(''); setComment('');
    getReviews().then(data => setReviews(data));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>🏥 Geocross Hospital Reviews</h1>
        <p>Your feedback helps us provide better care</p>
      </div>

      <div className="card">
        <h2>Leave a Review</h2>
        <form onSubmit={submitReview}>
          <input placeholder="Your Name" value={name} onChange={e=>setName(e.target.value)} required/>
          <select value={rating} onChange={e=>setRating(e.target.value)} required>
            <option value="">Select Rating</option>
            <option value="5">⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Very Good</option>
            <option value="3">⭐⭐⭐ Good</option>
            <option value="2">⭐⭐ Fair</option>
            <option value="1">⭐ Poor</option>
          </select>
          <textarea rows="4" placeholder="Tell us about your experience" value={comment} onChange={e=>setComment(e.target.value)} required/>
          <button type="submit">Submit Review</button>
        </form>
      </div>

      <h2 style={{color: '#0d47a1'}}>Patient Reviews</h2>
      {reviews.map((r,i) => (
        <div key={i} className="review-card">
          <h3>{r.name} - {'⭐'.repeat(r.rating)}</h3>
          <p>{r.comment}</p>
          <small>{r.time}</small>
        </div>
      ))}
    </div>
  );
}
export default App;
