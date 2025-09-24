import { Link, useLocation, Outlet } from 'react-router-dom';
import { BarChart3, MessageSquare, Users, Building, Settings, Sun, Moon, Menu, X } from 'lucide-react';
import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const DashboardLayout = () => {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { path: '/dashboard', icon: BarChart3, label: 'Overview' },
    { path: '/dashboard/feedback', icon: MessageSquare, label: 'Feedback Management' },
    { path: '/dashboard/societies', icon: Building, label: 'Societies Management' },
    { path: '/dashboard/analytics', icon: Users, label: 'Analytics' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const NavLink = ({ item, isActive, onClick }) => {
    const Icon = item.icon;
    return (
      <Link
        to={item.path}
        onClick={onClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '14px 15px',
          marginBottom: '8px',
          borderRadius: '10px',
          textDecoration: 'none',
          color: isActive ? 'white' : '#94a3b8',
          background: isActive ? 'rgba(37, 99, 235, 0.3)' : 'transparent',
          border: isActive ? '1px solid rgba(37, 99, 235, 0.5)' : '1px solid transparent',
          transition: 'all 0.3s ease',
          fontWeight: '500'
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
            e.target.style.color = 'white';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.target.style.background = 'transparent';
            e.target.style.color = '#94a3b8';
          }
        }}
      >
        <Icon size={20} />
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    <div className="dashboard-container">
      {/* Mobile Sidebar Toggle */}
      <button 
        className="mobile-sidebar-toggle"
        onClick={toggleSidebar}
        style={{
          display: 'none',
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: '1001',
          background: 'var(--primary-gradient)',
          border: 'none',
          borderRadius: '10px',
          padding: '12px 15px',
          color: 'white',
          cursor: 'pointer',
          fontSize: '1.2rem',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }}
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div 
          className="mobile-sidebar-backdrop"
          onClick={closeSidebar}
          style={{
            display: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)',
            zIndex: '999'
          }}
        />
      )}

      {/* Sidebar */}
      <aside 
        className="dashboard-sidebar"
        style={{
          width: '280px',
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          padding: '20px 0',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
        <div className="dashboard-sidebar-content" style={{ padding: '0 20px 20px', height: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'var(--primary-gradient)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              FE
            </div>
            <h2 style={{ color: 'white', margin: 0, fontSize: '1.3rem' }}>FinEval</h2>
          </div>

          {/* Dark Mode Button */}
          <button
            onClick={toggleTheme}
            style={{
              marginBottom: '20px',
              padding: '8px 12px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              background: isDarkMode ? '#2563eb' : '#ddd',
              color: isDarkMode ? 'white' : '#111',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: '500',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          
          <nav>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink 
                  key={item.path} 
                  item={item} 
                  isActive={isActive} 
                  onClick={closeSidebar}
                />
              );
            })}
          </nav>

          {/* Footer Section */}
          <div style={{ 
            marginTop: 'auto', 
            padding: '20px 0 0 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: '20px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              color: '#94a3b8',
              fontSize: '0.9rem'
            }}>
              <Settings size={16} />
              <span>Admin Panel v1.0</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main 
        className="dashboard-main"
        style={{ 
          flex: 1, 
          padding: '30px',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)',
          minHeight: '100vh',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
        <Outlet />
      </main>

      {/* Mobile CSS Classes for Responsive Behavior */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-sidebar-toggle {
            display: block !important;
          }
          
          .dashboard-sidebar {
            position: fixed !important;
            top: 0 !important;
            left: ${isSidebarOpen ? '0' : '-280px'} !important;
            width: 280px !important;
            height: 100vh !important;
            z-index: 1000 !important;
            transition: left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
          }
          
          .dashboard-main {
            width: 100% !important;
            padding: 70px 15px 15px 15px !important;
            transform: ${isSidebarOpen ? 'translateX(140px) scale(0.95)' : 'none'} !important;
            filter: ${isSidebarOpen ? 'blur(2px)' : 'none'} !important;
            pointer-events: ${isSidebarOpen ? 'none' : 'auto'} !important;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
          }
          
          .mobile-sidebar-backdrop {
            display: ${isSidebarOpen ? 'block' : 'none'} !important;
          }
          
          .mobile-sidebar-toggle {
            left: ${isSidebarOpen ? '240px' : '20px'} !important;
            z-index: 1002 !important;
            transform: ${isSidebarOpen ? 'rotate(90deg)' : 'none'} !important;
          }
        }
        
        @media (max-width: 480px) {
          .dashboard-sidebar {
            width: 260px !important;
            left: ${isSidebarOpen ? '0' : '-260px'} !important;
          }
          
          .dashboard-main {
            padding: 60px 10px 10px 10px !important;
            transform: ${isSidebarOpen ? 'translateX(130px) scale(0.95)' : 'none'} !important;
          }
          
          .mobile-sidebar-toggle {
            left: ${isSidebarOpen ? '220px' : '20px'} !important;
          }
        }
      `}</style>
    </div>
  );
};