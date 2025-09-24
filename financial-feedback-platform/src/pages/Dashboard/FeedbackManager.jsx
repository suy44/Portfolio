import { useState, useEffect } from 'react';
import { Star, Search, Filter, Trash2, Eye, Download } from 'lucide-react';

export const FeedbackManager = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [societies, setSocieties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState(0);
  const [selectedSociety, setSelectedSociety] = useState('all');

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

  const deleteAllFeedback = async () => {
    if (window.confirm('Are you sure you want to delete ALL feedback? This action cannot be undone!')) {
      try {
        await Promise.all(
          feedbacks.map(fb => 
            fetch(`http://localhost:3001/feedbacks/${fb.id}`, { method: 'DELETE' })
          )
        );
        setFeedbacks([]);
      } catch (error) {
        console.error('Error deleting all feedback:', error);
      }
    }
  };

  const exportFeedback = () => {
    const csv = [
      ['Society', 'Rating', 'Comment', 'Service Type', 'Date'],
      ...filteredFeedbacks.map(fb => [
        getSocietyName(fb.societyId),
        fb.rating,
        `"${fb.comment.replace(/"/g, '""')}"`,
        fb.serviceType,
        new Date(fb.timestamp).toLocaleDateString()
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `feedback-export-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getSocietyName = (id) => {
    const society = societies.find(s => s.id === id);
    return society ? society.name : 'Unknown Society';
  };

  const filteredFeedbacks = feedbacks.filter(feedback => {
    const matchesSearch = 
      getSocietyName(feedback.societyId).toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.comment.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRating = filterRating === 0 || feedback.rating === filterRating;
    const matchesSociety = selectedSociety === 'all' || feedback.societyId.toString() === selectedSociety;

    return matchesSearch && matchesRating && matchesSociety;
  });

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ color: 'white', marginBottom: '10px' }}>Feedback Management</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Manage and review all customer feedback</p>
      </div>

      {/* Controls Card */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: '1', minWidth: '250px' }}>
            <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              type="text"
              placeholder="Search feedback by society or comment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '40px', width: '100%' }}
            />
          </div>
          
          <select 
            value={filterRating} 
            onChange={(e) => setFilterRating(parseInt(e.target.value))}
            style={{ minWidth: '120px' }}
          >
            <option value={0}>All Ratings</option>
            <option value={5}>5 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={2}>2 Stars</option>
            <option value={1}>1 Star</option>
          </select>

          <select 
            value={selectedSociety} 
            onChange={(e) => setSelectedSociety(e.target.value)}
            style={{ minWidth: '150px' }}
          >
            <option value="all">All Societies</option>
            {societies.map(society => (
              <option key={society.id} value={society.id}>{society.name}</option>
            ))}
          </select>

          <button 
            onClick={exportFeedback}
            className="btn btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Download size={18} />
            Export
          </button>

          <button 
            onClick={deleteAllFeedback}
            className="btn btn-outline"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', borderColor: '#ef4444' }}
          >
            <Trash2 size={18} />
            Delete All
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '20px' }}>
        <div className="card" style={{ textAlign: 'center', background: 'var(--primary-gradient)', color: 'white' }}>
          <h3 style={{ margin: 0, fontSize: '2rem' }}>{filteredFeedbacks.length}</h3>
          <p style={{ margin: 0 }}>Filtered Results</p>
        </div>
        <div className="card" style={{ textAlign: 'center', background: 'var(--secondary-gradient)', color: 'white' }}>
          <h3 style={{ margin: 0, fontSize: '2rem' }}>
            {filteredFeedbacks.length > 0 ? (filteredFeedbacks.reduce((sum, fb) => sum + fb.rating, 0) / filteredFeedbacks.length).toFixed(1) : 0}
          </h3>
          <p style={{ margin: 0 }}>Average Rating</p>
        </div>
      </div>

      {/* Feedback List */}
      <div className="card">
        <h2 style={{ marginBottom: '20px' }}>All Feedback ({filteredFeedbacks.length})</h2>
        <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
          {filteredFeedbacks.map(feedback => (
            <div key={feedback.id} className="feedback-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <strong style={{ color: 'var(--text-dark)', fontSize: '1.1rem' }}>
                      {getSocietyName(feedback.societyId)}
                    </strong>
                    <span style={{ 
                      background: 'var(--secondary-gradient)', 
                      color: 'white', 
                      padding: '2px 8px', 
                      borderRadius: '12px', 
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {feedback.serviceType}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', margin: '5px 0' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < feedback.rating ? '#fbbf24' : 'none'}
                        color={i < feedback.rating ? '#fbbf24' : '#d1d5db'}
                      />
                    ))}
                    <span style={{ color: 'var(--text-light)', fontWeight: '600' }}>
                      {feedback.rating}/5
                    </span>
                  </div>
                  
                  <p style={{ color: 'var(--text-light)', margin: '8px 0', lineHeight: '1.5' }}>
                    {feedback.comment}
                  </p>
                  
                  <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                    {new Date(feedback.timestamp).toLocaleString()}
                  </span>
                </div>
                
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => deleteFeedback(feedback.id)}
                    className="btn btn-outline"
                    style={{ padding: '8px', color: '#ef4444', borderColor: '#ef4444' }}
                    title="Delete Feedback"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {filteredFeedbacks.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-light)' }}>
              <p>No feedback found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};