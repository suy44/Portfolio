import { useState, useEffect } from 'react';
import { ServiceCard } from '../../components/User/ServiceCard';

export const UserHome = () => {
  const [societies, setSocieties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/financialSocieties')
      .then(res => res.json())
      .then(data => {
        setSocieties(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching societies:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <div className="container">
          <h1 style={{ color: 'white', textAlign: 'center', fontSize: '2.5rem' }}>
            Financial Societies Feedback Platform
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', textAlign: 'center', marginTop: '15px', fontSize: '1.1rem' }}>
            Share your experience and help improve financial services
          </p>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-3">
          {societies.map(society => (
            <ServiceCard key={society.id} society={society} />
          ))}
        </div>
      </div>
    </div>
  );
};