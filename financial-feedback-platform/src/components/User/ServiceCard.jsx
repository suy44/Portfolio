import { useState } from 'react';
import { Rating } from '../ui/Rating';
import { Button } from '../ui/Button';

export const ServiceCard = ({ society }) => {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const feedback = {
      societyId: society.id,
      rating,
      comment,
      serviceType: society.services[0],
      timestamp: new Date().toISOString()
    };

    try {
      await fetch('http://localhost:3001/feedbacks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback)
      });
      
      setShowForm(false);
      setRating(0);
      setComment('');
      alert('Thank you for your feedback!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
        <span style={{ fontSize: '2rem' }}>{society.logo}</span>
        <div>
          <h3 style={{ margin: 0, color: '#1f2937' }}>{society.name}</h3>
          <p style={{ color: '#6b7280', margin: 0 }}>{society.description}</p>
        </div>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Services:</strong>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '5px' }}>
          {society.services.map(service => (
            <span key={service} className="service-tag">
            {service}
            </span>
          ))}
        </div>
      </div>

      {!showForm ? (
        <Button onClick={() => setShowForm(true)}>
          Give Feedback
        </Button>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Your Rating:
            </label>
            <Rating onRatingChange={setRating} />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Comment:
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                minHeight: '80px'
              }}
              placeholder="Share your experience..."
            />
          </div>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button type="submit">Submit Feedback</Button>
            <Button type="button" onClick={() => setShowForm(false)} variant="outline">
              Cancel
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};