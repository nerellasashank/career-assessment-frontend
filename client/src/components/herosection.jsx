import React from 'react';
import { FaUsers, FaGraduationCap, FaUserTie, FaSchool, FaChartPie, FaHeart, FaLightbulb, FaRegClock, FaTrophy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './herosection.css';

const CareerFit = () => {
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate('/signup');
  };

  return (
    <div className="careerfit-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h2>Find your dream career, not just a job.</h2>
          <p className="intro-text">
            <strong className="highlight-text">Feeling lost and unsure about your career path?</strong>
            <br />
            CareerFit takes the guesswork out of career exploration by providing a
            <span className="highlight"> scientifically validated career assessment</span> to match you with 16 careers
            tailored to your strengths and preferences.
          </p>
          <button className="hbtn-assessment" onClick={handleStartAssessment}>
            Start your personalised assessment
          </button>
        </div>
      </section>

      {/* More About Us */}
      <section className="careerfit-info">
        <div className="info-text">
          <h3>What is CareerFit?</h3>
          <p>
            CareerFit is here to take the guesswork out of career exploration! It is a scientifically-validated career assessment
            that gives you a personalized report with 16 careers to help you find the right career for you and spend your days doing what you love.
          </p>
          <button className="btn-more-about" onClick={() => navigate('/aboutus')}>
            More About Us
          </button>
        </div>
      </section>

     {/* Who is it for Section */}
<section className="who-is-it-for">
  <h2>Who is it for?</h2>
  <div className="icon-list">
    {/* Admin Block */}
    <div className="icon-item admin">
      <FaUsers size={80} />
      <h3>Admin</h3>
      <p>Manage assessment tools, update test data, and provide career recommendations.</p>
    </div>

    {/* User (Student) Block */}
    <div className="icon-item student">
      <FaGraduationCap size={80} />
      <h3>Student</h3>
      <p>Take career assessments, view results, and explore career options.</p>
    </div>
  </div>
</section>



      {/* How It Works */}
      <section className="how-it-works">
        <div className="how-it-works-left">
          <h3>How It Works</h3>
          <p className="intro-text">
            CareerFit is here to take the guesswork out of career exploration. It provides a scientifically-validated career assessment
            that gives you a personalised report with 16 careers tailored to your strengths and preferences.
          </p>
          <button className="btn-start-now" onClick={handleStartAssessment}>
            Start Now
          </button>
        </div>
        <div className="how-it-works-right">
          <div className="steps">
            <div className="step">
              <h4>Step #1</h4>
              <p>Create and confirm your account.</p>
            </div>
            <div className="step">
              <h4>Step #2</h4>
              <p>Complete the 3 Aptitude Tests.</p>
            </div>
            <div className="step">
              <h4>Step #3</h4>
              <p>Complete the Interest Inventory.</p>
            </div>
            <div className="step">
              <h4>Step #4</h4>
              <p>Receive and download your personalised report.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="feedback-section">
        <h3>Feedback & Insights</h3>
        <div className="feedback-charts">
          {['94% Personalized', '96% Easy to Use', '92% Useful', '89% Engaging'].map((feedback, index) => (
            <div key={index} className="chart-item">
              <FaChartPie size={50} />
              <p>{feedback}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discover the Benefits Section */}
      <section className="discover-benefits">
        <h3>Discover the Benefits</h3>
        <div className="benefit-grid">
          <div className="benefit-item">
            <FaHeart size={50} />
            <h4>Gain Self-Awareness</h4>
            <p>Uncover your hidden strengths, talents, and preferences, leading to a clearer understanding of your ideal career path.</p>
          </div>
          <div className="benefit-item">
            <FaLightbulb size={50} />
            <h4>Explore Diverse Options</h4>
            <p>Discover exciting career possibilities you may never have considered, broadening your horizons and igniting your passion.</p>
          </div>
          <div className="benefit-item">
            <FaChartPie size={50} />
            <h4>Boost Your Confidence</h4>
            <p>Make informed decisions backed by data-driven insights, eliminating career confusion and doubt.</p>
          </div>
          <div className="benefit-item">
            <FaRegClock size={50} />
            <h4>Save Time & Effort</h4>
            <p>Ditch the endless research and trial-and-error approach. Get targeted career guidance that aligns with your unique aspirations.</p>
          </div>
          <div className="benefit-item">
            <FaTrophy size={50} />
            <h4>Land Your Dream Job</h4>
            <p>Stand out from the competition with a personalised report that showcases your strengths and suitability for specific roles.</p>
          </div>
          <div className="benefit-item">
            <FaUsers size={50} />
            <h4>Invest In Your Future</h4>
            <p>Gain the knowledge and self-awareness needed to navigate your career journey with purpose and achieve long-term success.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerFit;
