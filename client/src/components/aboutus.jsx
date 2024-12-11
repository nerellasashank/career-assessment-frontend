import React from 'react';
import './AboutUs.css';
import { FaChalkboardTeacher, FaGraduationCap, FaUserCog, FaBriefcase, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-us">
      {/* Intro Section */}
      <div className="intro-section">
        <h1 className="about-title">About CareerAssessment</h1>
        <p className="about-description">
          Welcome to <span className="highlight">CareerFit</span>, where personalized career growth meets insightful assessments.
          Our platform helps students discover their strengths, understand their preferences, and find career paths that align with their skills and aspirations.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="left-aligned">
          <h2>Our Mission</h2>
          <p>
            At CareerFit, we’re driven by a simple yet powerful mission: to make the world a better place with happy people in fulfilling, rewarding careers. We believe in the transformative power of finding the right career – one that aligns with an individual’s interests, abilities, and aspirations.
          </p>
          <p>
            Through our innovative platform and services, we aim to illuminate the path to such careers for students, career changers, and professionals alike, supporting them at every stage of their career journey.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do">
        <div className="right-aligned">
          <h2>What We Do?</h2>
          <p>
            CareerFit offers a comprehensive career discovery and guidance solution, designed to empower individuals to make informed decisions about their future career paths. Our platform leverages advanced psychometric assessments and a modern interest inventory to provide personalized career recommendations, drawn from a database of over 1,260 detailed career profiles.
          </p>
          <p>
            For students and individuals seeking direction, CareerFit provides a clear, insightful report outlining up to 16 career paths that resonate with their unique mix of interests and abilities. For career guidance counsellors, we offer a valuable tool that enhances the efficiency and depth of their guidance process.
          </p>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="impact-section">
        <div className="left-aligned">
          <h2>Our Impact</h2>
          <p>
            CareerFit is more than just a tool; it’s a movement towards informed, confident career decisions.
          </p>
          <p>
            We have supported countless individuals in navigating their career journeys, from young students making their first choices about their future paths to seasoned professionals seeking a change. Our work has enabled meaningful conversations, opened up new possibilities, and, most importantly, helped individuals to step into careers that bring them joy and satisfaction.
          </p>
        </div>
      </section>

      {/* Why Choose CareerFit Section */}
      <section className="why-choose-section">
        <h2>Why Choose Career Assessment ??</h2>
        <div className="feature-grid">
          <div className="feature left-aligned">
            <FaHeart size={50} />
            <h3>Personalized Insights</h3>
            <p>Our tailored approach ensures that every individual receives career recommendations that truly match their personal profile.</p>
          </div>
          <div className="feature right-aligned">
            <FaChalkboardTeacher size={50} />
            <h3>Real-World Clarity</h3>
            <p>We provide detailed, realistic insights into each career, moving beyond idealised descriptions to offer a genuine understanding of what each path entails.</p>
          </div>
          <div className="feature left-aligned">
            <FaUserCog size={50} />
            <h3>Empowering Technology</h3>
            <p>Our platform is designed with user experience in mind, making career exploration an accessible, engaging, and enlightening process.</p>
          </div>
          <div className="feature right-aligned">
            <FaBriefcase size={50} />
            <h3>Flexibility for Professionals</h3>
            <p>For career guidance counsellors, CareerFit offers a seamless integration into their existing workflows, complete with the option for co-branding reports for private practices.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="call-to-action">
        <button className="explore-button" onClick={() => navigate('/assessments')}>
          Take an Assessment
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
