import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-container">
        <h2>About Us</h2>
        <p className="about-us-description">
          Welcome to the AI Website Generator! Our mission is to revolutionize the way websites are created. 
          With our AI-powered platform, anyone can generate fully functional websites in minutes, no technical skills required. 
          Whether you're an individual, a business, or an organization, our tool provides a seamless experience to bring your online presence to life.
        </p>

        <div className="team-section">
          <h3>Meet Our Team</h3>
          <div className="team-members">
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 1" className="team-image" />
              <p className="team-name">John Doe</p>
              <p className="team-role">Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 2" className="team-image" />
              <p className="team-name">Jane Smith</p>
              <p className="team-role">Co-Founder & CTO</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 3" className="team-image" />
              <p className="team-name">Alice Johnson</p>
              <p className="team-role">Lead Developer</p>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h3>Contact Us</h3>
          <p>If you have any questions or need support, feel free to reach out to us:</p>
          <p>Email: support@aiwebsitegenerator.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
