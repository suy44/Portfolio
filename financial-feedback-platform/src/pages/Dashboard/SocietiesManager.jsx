import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit, Building } from 'lucide-react';

export const SocietiesManager = () => {
  const [societies, setSocieties] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingSociety, setEditingSociety] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '', logo: '🏦', services: '' });

  useEffect(() => {
    fetchSocieties();
  }, []);

  const fetchSocieties = async () => {
    try {
      const response = await fetch('http://localhost:3001/financialSocieties');
      const data = await response.json();
      setSocieties(data);
    } catch (error) {
      console.error('Error fetching societies:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const societyData = {
        ...formData,
        services: formData.services.split(',').map(s => s.trim()),
        id: editingSociety ? editingSociety.id : Date.now()
      };

      const url = editingSociety 
        ? `http://localhost:3001/financialSocieties/${editingSociety.id}`
        : 'http://localhost:3001/financialSocieties';

      const method = editingSociety ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(societyData)
      });

      if (response.ok) {
        await fetchSocieties();
        resetForm();
      }
    } catch (error) {
      console.error('Error saving society:', error);
    }
  };

  const deleteSociety = async (societyId) => {
    if (window.confirm('Are you sure? This will permanently delete this society!')) {
      try {
        await fetch(`http://localhost:3001/financialSocieties/${societyId}`, {
          method: 'DELETE'
        });
        setSocieties(societies.filter(s => s.id !== societyId));
      } catch (error) {
        console.error('Error deleting society:', error);
      }
    }
  };

  const editSociety = (society) => {
    setEditingSociety(society);
    setFormData({
      name: society.name,
      description: society.description,
      logo: society.logo,
      services: society.services.join(', ')
    });
    setShowAddForm(true);
  };

  const resetForm = () => {
    setFormData({ name: '', description: '', logo: '🏦', services: '' });
    setEditingSociety(null);
    setShowAddForm(false);
  };

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ color: 'white', marginBottom: '10px' }}>Societies Management</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Manage financial societies and their services</p>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0 }}>Financial Societies</h2>
          <button 
            className="btn btn-primary"
            onClick={() => setShowAddForm(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Plus size={18} />
            {editingSociety ? 'Edit Society' : 'Add Society'}
          </button>
        </div>

        {showAddForm && (
          <form onSubmit={handleSubmit} className="card" style={{ background: 'rgba(37, 99, 235, 0.05)', marginBottom: '20px' }}>
            <h3 style={{ marginBottom: '15px' }}>
              {editingSociety ? 'Edit Financial Society' : 'Add New Financial Society'}
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Logo (Emoji) *</label>
                <input
                  type="text"
                  value={formData.logo}
                  onChange={(e) => setFormData({...formData, logo: e.target.value})}
                  maxLength="2"
                  required
                />
              </div>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Description *</label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
              />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Services (comma separated) *</label>
              <input
                type="text"
                placeholder="Savings Accounts, Loans, Credit Cards"
                value={formData.services}
                onChange={(e) => setFormData({...formData, services: e.target.value})}
                required
              />
            </div>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" className="btn btn-primary">
                {editingSociety ? 'Update Society' : 'Add Society'}
              </button>
              <button type="button" className="btn btn-outline" onClick={resetForm}>
                Cancel
              </button>
            </div>
          </form>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {societies.map(society => (
            <div key={society.id} className="card" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ fontSize: '2.5rem' }}>{society.logo}</span>
                  <div>
                    <h3 style={{ margin: 0, color: 'var(--text-dark)' }}>{society.name}</h3>
                    <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.9rem' }}>
                      {society.description}
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => editSociety(society)}
                    className="btn btn-outline"
                    style={{ padding: '6px 8px' }}
                    title="Edit Society"
                  >
                    <Edit size={14} />
                  </button>
                  <button
                    onClick={() => deleteSociety(society.id)}
                    className="btn btn-outline"
                    style={{ padding: '6px 8px', color: '#ef4444', borderColor: '#ef4444' }}
                    title="Delete Society"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              
              <div>
                <strong style={{ color: 'var(--text-dark)' }}>Services:</strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                  {society.services.map(service => (
                    <span key={service} className="service-tag" style={{ fontSize: '0.8rem' }}>
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  <span>ID: {society.id}</span>
                  <span>Services: {society.services.length}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {societies.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-light)' }}>
            <Building size={48} style={{ marginBottom: '15px', opacity: 0.5 }} />
            <p>No financial societies found. Add your first society to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};