import React from "react";
import "./exhibition.css";

// Dummy blog data
const blogs = [
  {
    id: 1,
    title: "Reviewing CareerFit Assessments – How to Interpret and Act on Assessment Results",
    date: "Dec 5, 2024",
    excerpt:
      "CareerFit Assessments provide an invaluable roadmap to your future career. By combining interests, strengths, and aptitudes, these reports offer a personalized career path based on your unique profile. But understanding and acting on...",
    image: "/static/image/careerfit_assessment.jpg",
  },
  {
    id: 2,
    title: "Engaging Activities for Career Exploration",
    date: "Nov 27, 2024",
    excerpt:
      "Choosing the right career can feel overwhelming, but what if we told you it doesn’t have to be? By blending fun, creativity, and education, career exploration becomes a vibrant adventure instead of a daunting task...",
    image: "/static/image/career_exploration.jpg",
  },
  {
    id: 3,
    title: "Setting Goals for the New Year: Planning for a Successful Term Ahead",
    date: "Nov 21, 2024",
    excerpt:
      "The new year is upon us—a perfect time to hit refresh, especially for students, educators, and anyone looking to make progress in their career or studies. A new term offers a chance to take stock of where you are and map out...",
    image: "/static/image/new_year_goals.jpg",
  },
  {
    id: 4,
    title: "Winter Break: Opportunities for Career Exploration",
    date: "Nov 26, 2024",
    excerpt:
      "Winter break is often seen as a time to relax, but it’s also a perfect opportunity to explore career options and take steps toward your future goals. With the usual pressures of school or work easing, this period provides...",
    image: "/static/image/winter_break.jpg",
  },
];

const Blog = () => {
  return (
    <div className="blog-section">
      <h1 className="blog-header">Blog</h1>
      <p className="blog-subheader">What are you looking for?</p>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-date">{blog.date}</p>
              <p className="blog-excerpt">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
