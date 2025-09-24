import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const MainLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="body-pattern">
      <nav style={{ 
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        padding: '1rem 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px',
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 style={{ margin: 0, color: 'white', fontSize: '1.8rem' }}>
              FinEval
            </h1>
          </Link>
          
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link to="/">
              
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {children}
      </main>
    </div>
  );
};