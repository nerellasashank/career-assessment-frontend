import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminHome.css'; // Import the new CSS file
import { FaSignOutAlt } from 'react-icons/fa';

function AdminHome() {
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState(null); // Track the active section (initially null)
  const navigate = useNavigate();

  // Function to get a dynamic greeting based on time of day
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good Morning';
    if (hours < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const handleNavClick = (section) => {
    setActiveSection(section); // Change active section when a navbar link is clicked
  };

  return (
    <div className="admin-home">
      <nav>
        <h1>Career Assessment</h1>
        <button className="fab-sign-out" onClick={handleSignOut}>
          <FaSignOutAlt />
        </button>
      </nav>

      {/* Vertical Dashboard (Sidebar) */}
      <div className="dashboard">
        <h2> DashBoard</h2>
        <ul>
       
                 <li><a href="#manageUsers" onClick={() => handleNavClick('manage-users')}>MANAGE USERS</a></li>

                <li><a href="#manageArtworks" onClick={() => handleNavClick('manage-artworks')}>MANAGE - Assessments</a></li>
          
               <li><a href="#Adminsettings" onClick={() => handleNavClick('settings')}>SETTINGS</a></li>

               <li><a href="#adminupdate" onClick={() => handleNavClick('')}>UPDATE MY DETAILS</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-frame">
        {user ? (
          <h2>{getGreeting()}, {user.username}!</h2>
        ) : (
          <h2>Loading...</h2>
        )}

        {/* Conditional rendering of different sections */}
        <div className={`section ${activeSection === 'dashboard' ? 'active' : ''}`}>
          {activeSection === 'dashboard' && <div>Dashboard Content</div>}
        </div>

        <div className={`section ${activeSection === 'manage-artworks' ? 'active' : ''}`}>
          {activeSection === 'manage-artworks' && <div>Manage Artworks Content</div>}
        </div>

        <div className={`section ${activeSection === 'manage-users' ? 'active' : ''}`}>
          {activeSection === 'manage-users' && <div>Manage Users Content</div>}
        </div>

        <div className={`section ${activeSection === 'settings' ? 'active' : ''}`}>
          {activeSection === 'settings' && <div>Settings Content</div>}
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
