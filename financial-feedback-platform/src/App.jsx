import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { UserHome } from './pages/User/UserHome';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { FeedbackManager } from './pages/Dashboard/FeedbackManager';
import { SocietiesManager } from './pages/Dashboard/SocietiesManager';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import { Login } from './pages/Auth/Login';
import './styles/index.css';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={
          <MainLayout>
            <UserHome />
          </MainLayout>
        } />
        <Route path="/login" element={<Login />} />
        {/* Dashboard Routes */}
        <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="feedback" element={<FeedbackManager />} />
          <Route path="societies" element={<SocietiesManager />} />
          <Route path="analytics" element={
            <div className="card">
              <h2 style={{ color: 'white', marginBottom: '20px' }}>Analytics Dashboard</h2>
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.9)', 
                padding: '30px', 
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: 'var(--text-dark)', marginBottom: '15px' }}>Advanced Analytics Coming Soon</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                  This section will include detailed analytics, charts, and insights about feedback trends, 
                  customer satisfaction metrics, and performance comparisons between financial societies.
                </p>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '20px', 
                  marginTop: '30px' 
                }}>
                  <div style={{ padding: '20px', background: 'var(--primary-gradient)', color: 'white', borderRadius: '8px' }}>
                    <h4>Planned Features</h4>
                    <ul style={{ textAlign: 'left', marginTop: '10px' }}>
                      <li>Rating Trends Over Time</li>
                      <li>Service-wise Performance</li>
                      <li>Sentiment Analysis</li>
                      <li>Comparison Reports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          } />
        </Route>
        </Route>
        {/* 404 Route */}
        <Route path="*" element={
          <MainLayout>
            <div style={{ 
              textAlign: 'center', 
              padding: '100px 20px',
              minHeight: '60vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <h1 style={{ 
                color: 'white', 
                fontSize: '6rem', 
                marginBottom: '20px',
                background: 'var(--primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold'
              }}>
                404
              </h1>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '1.5rem',
                marginBottom: '30px'
              }}>
                Oops! Page not found
              </p>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.6)', 
                fontSize: '1.1rem',
                marginBottom: '40px',
                maxWidth: '500px'
              }}>
                The page you are looking for doesn't exist or has been moved.
              </p>
              <a 
                href="/" 
                className="btn btn-primary"
                style={{
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Return to Home
              </a>
            </div>
          </MainLayout>
        } />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;