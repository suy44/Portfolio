import { useState, useEffect } from 'react';
import { Star, MessageCircle, TrendingUp, Users, Plus, Trash2, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [societies, setSocieties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddSociety, setShowAddSociety] = useState(false);
  const [newSociety, setNewSociety] = useState({ name: '', description: '', logo: '🏦', services: [] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [fbRes, socRes] = await Promise.all([
        fetch('http://localhost:3001/feedbacks'),
        fetch('http://localhost:3001/financialSocieties')
      ]);
      const [fb, soc] = await Promise.all([fbRes.json(), socRes.json()]);
      setFeedbacks(fb);
      setSocieties(soc);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteFeedback = async (feedbackId) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      try {
        await fetch(`http://localhost:3001/feedbacks/${feedbackId}`, {
          method: 'DELETE'
        });
        setFeedbacks(feedbacks.filter(fb => fb.id !== feedbackId));
      } catch (error) {
        console.error('Error deleting feedback:', error);
      }
    }
  };

  const addSociety = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/financialSocieties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newSociety,
          id: Date.now(),
          services: newSociety.services.split(',').map(s => s.trim())
        })
      });
      
      if (response.ok) {
        const society = await response.json();
        setSocieties([...societies, society]);
        setNewSociety({ name: '', description: '', logo: '🏦', services: [] });
        setShowAddSociety(false);
      }
    } catch (error) {
      console.error('Error adding society:', error);
    }
  };

  const deleteSociety = async (societyId) => {
    if (window.confirm('Are you sure? This will also delete all associated feedback!')) {
      try {
        // Delete society
        await fetch(`http://localhost:3001/financialSocieties/${societyId}`, {
          method: 'DELETE'
        });
        
        // Delete associated feedbacks
        const feedbacksToDelete = feedbacks.filter(fb => fb.societyId === societyId);
        await Promise.all(
          feedbacksToDelete.map(fb => 
            fetch(`http://localhost:3001/feedbacks/${fb.id}`, { method: 'DELETE' })
          )
        );
        
        setSocieties(societies.filter(s => s.id !== societyId));
        setFeedbacks(feedbacks.filter(fb => fb.societyId !== societyId));
      } catch (error) {
        console.error('Error deleting society:', error);
      }
    }
  };

  const getSocietyName = (id) => {
    const society = societies.find(s => s.id === id);
    return society ? society.name : 'Unknown Society';
  };

  const averageRating = feedbacks.length > 0 
    ? (feedbacks.reduce((sum, fb) => sum + fb.rating, 0) / feedbacks.length).toFixed(1)
    : 0;

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ color: 'white', marginBottom: '10px' }}>Dashboard Overview</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Manage financial societies and customer feedback</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <Users size={32} />
          <h3>Total Feedback</h3>
          <p style={{ fontSize: '2rem', margin: '10px 0' }}>{feedbacks.length}</p>
        </div>
        <div className="stat-card">
          <Star size={32} />
          <h3>Average Rating</h3>
          <p style={{ fontSize: '2rem', margin: '10px 0' }}>{averageRating}</p>
        </div>
        <div className="stat-card">
          <MessageCircle size={32} />
          <h3>Societies</h3>
          <p style={{ fontSize: '2rem', margin: '10px 0' }}>{societies.length}</p>
        </div>
        <div className="stat-card">
          <TrendingUp size={32} />
          <h3>This Month</h3>
          <p style={{ fontSize: '2rem', margin: '10px 0' }}>
            {feedbacks.filter(fb => {
              const feedbackDate = new Date(fb.timestamp);
              const monthAgo = new Date();
              monthAgo.setMonth(monthAgo.getMonth() - 1);
              return feedbackDate > monthAgo;
            }).length}
          </p>
        </div>
      </div>

      {/* Financial Societies Management */}
      <div className="card" style={{ marginBottom: '25px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0 }}>Financial Societies</h2>
          <button 
            className="btn btn-primary"
            onClick={() => setShowAddSociety(!showAddSociety)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Plus size={18} />
            Add Society
          </button>
        </div>

        {showAddSociety && (
          <form onSubmit={addSociety} className="card" style={{ background: 'rgba(37, 99, 235, 0.05)', marginBottom: '20px' }}>
            <h3 style={{ marginBottom: '15px' }}>Add New Financial Society</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Name</label>
                <input
                  type="text"
                  value={newSociety.name}
                  onChange={(e) => setNewSociety({...newSociety, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Logo (Emoji)</label>
                <input
                  type="text"
                  value={newSociety.logo}
                  onChange={(e) => setNewSociety({...newSociety, logo: e.target.value})}
                  maxLength="2"
                />
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Description</label>
              <input
                type="text"
                value={newSociety.description}
                onChange={(e) => setNewSociety({...newSociety, description: e.target.value})}
                required
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Services (comma separated)</label>
              <input
                type="text"
                placeholder="Savings Accounts, Loans, Credit Cards"
                value={newSociety.services}
                onChange={(e) => setNewSociety({...newSociety, services: e.target.value})}
                required
              />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" className="btn btn-primary">Add Society</button>
              <button type="button" className="btn btn-outline" onClick={() => setShowAddSociety(false)}>Cancel</button>
            </div>
          </form>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
          {societies.map(society => (
            <div key={society.id} className="card" style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '2rem' }}>{society.logo}</span>
                  <div>
                    <h4 style={{ margin: 0 }}>{society.name}</h4>
                    <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.9rem' }}>{society.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => deleteSociety(society.id)}
                  className="btn btn-outline"
                  style={{ padding: '5px 10px', fontSize: '0.8rem' }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
              <div>
                <strong>Services:</strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '5px' }}>
                  {society.services.map(service => (
                    <span key={service} className="service-tag">{service}</span>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                Feedback: {feedbacks.filter(fb => fb.societyId === society.id).length} reviews
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Feedback */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0 }}>Recent Feedback</h2>
          <Link to="/dashboard/feedback">
            <button className="btn btn-outline">View All Feedback</button>
          </Link>
        </div>
        
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {feedbacks.slice(0, 5).map(feedback => (
            <div key={feedback.id} className="feedback-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <strong style={{ color: 'var(--text-dark)' }}>{getSocietyName(feedback.societyId)}</strong>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', margin: '5px 0' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < feedback.rating ? '#fbbf24' : 'none'}
                        color={i < feedback.rating ? '#fbbf24' : '#d1d5db'}
                      />
                    ))}
                    <span style={{ color: 'var(--text-light)' }}>({feedback.rating}/5)</span>
                  </div>
                  <p style={{ color: 'var(--text-light)', margin: 0 }}>{feedback.comment}</p>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                    {new Date(feedback.timestamp).toLocaleDateString()}
                  </span>
                  <button
                    onClick={() => deleteFeedback(feedback.id)}
                    className="btn btn-outline"
                    style={{ padding: '5px 8px', fontSize: '0.8rem' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};