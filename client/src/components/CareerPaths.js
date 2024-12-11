import React from 'react';
import './careerpaths.css';

const CareerPaths = () => {
  const careerData = [
    {
      category: 'Science & Technology',
      careers: [
        'Software Engineer',
        'Data Scientist',
        'Cybersecurity Analyst',
        'Biotechnologist',
        'AI/ML Engineer',
        'Astronomer',
      ],
    },
    {
      category: 'Healthcare & Medicine',
      careers: [
        'Doctor',
        'Nurse',
        'Pharmacist',
        'Physiotherapist',
        'Public Health Specialist',
        'Dentist',
      ],
    },
    {
      category: 'Arts & Humanities',
      careers: [
        'Graphic Designer',
        'Fine Artist',
        'Historian',
        'Writer/Author',
        'Photographer',
        'Musician',
      ],
    },
    {
      category: 'Business & Management',
      careers: [
        'Business Analyst',
        'Marketing Specialist',
        'Entrepreneur',
        'Financial Advisor',
        'Human Resources Manager',
        'Investment Banker',
      ],
    },
    {
      category: 'Engineering',
      careers: [
        'Mechanical Engineer',
        'Civil Engineer',
        'Electrical Engineer',
        'Aerospace Engineer',
        'Chemical Engineer',
        'Robotics Engineer',
      ],
    },
    {
      category: 'Education & Academia',
      careers: [
        'Teacher',
        'Professor',
        'Education Consultant',
        'School Administrator',
        'Librarian',
        'Curriculum Designer',
      ],
    },
    {
      category: 'Law & Public Policy',
      careers: [
        'Lawyer',
        'Judge',
        'Policy Analyst',
        'Diplomat',
        'Political Scientist',
        'Advocate',
      ],
    },
    {
      category: 'Media & Communication',
      careers: [
        'Journalist',
        'Public Relations Specialist',
        'Film Director',
        'Editor',
        'Broadcaster',
        'Content Creator',
      ],
    },
    {
      category: 'Skilled Trades',
      careers: [
        'Electrician',
        'Plumber',
        'Carpenter',
        'Mechanic',
        'Welder',
        'Construction Manager',
      ],
    },
  ];

  return (
    <div className="careerpaths-container">
      <h1>Explore Career Paths</h1>
      <p>Discover a wide variety of career opportunities. Choose the path that aligns with your interests and skills!</p>
      <div className="careerpaths-grid">
        {careerData.map((category, index) => (
          <div className="career-category" key={index}>
            <h2>{category.category}</h2>
            <ul>
              {category.careers.map((career, idx) => (
                <li key={idx}>{career}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPaths;
