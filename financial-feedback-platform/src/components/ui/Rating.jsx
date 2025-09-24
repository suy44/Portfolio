import { useState } from 'react';
import { Star } from 'lucide-react';

export const Rating = ({ onRatingChange, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    onRatingChange(value);
  };

  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`star ${star <= (hover || rating) ? 'active' : ''}`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          fill={star <= (hover || rating) ? '#fbbf24' : 'none'}
        />
      ))}
    </div>
  );
};