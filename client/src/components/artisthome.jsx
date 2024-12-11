import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './artisthome.css';
import { FaSignOutAlt } from 'react-icons/fa';
import ArtistProfile from './artistprofile';

function ArtistHome() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    if (section === 'career-paths') {
      navigate('/careerpaths'); // Navigate to CareerPaths component
    } else if (section === 'take-assessment') {
      navigate('/assessmentquiz'); // Navigate to AssessmentQuiz component
    }
  };

  return (
    <div className="artisthome">
      <nav>
        <h1>Career Assessment</h1>
        <button className="fab-sign-out" onClick={handleSignOut}>
          <FaSignOutAlt />
        </button>
      </nav>

      <div className="dashboard">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <a onClick={() => handleNavClick('career-paths')}>
              Career Paths
            </a>
          </li>
          <li>
            <a onClick={() => handleNavClick('take-assessment')}>
              Take Assessment
            </a>
          </li>
          <li>
            <a onClick={() => handleNavClick('my-profile')}>
              My Profile
            </a>
          </li>
        </ul>
      </div>

      <div className="main-frame">
        {user ? <h2>Good Morning, {user.username}!</h2> : <h2>Loading...</h2>}
      </div>
    </div>
  );
}

export default ArtistHome;
