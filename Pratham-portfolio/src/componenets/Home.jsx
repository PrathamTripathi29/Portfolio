// src/pages/Home.jsx
import React from 'react'
import PageHeading from '../PageHeading'
import '../css/Home.css'
import profileImg from "../assets/profile.jpeg";

export default function Home() {
  return (
    <div className="home-page">
      <PageHeading title="Pratham Tripathi">
        A B.Tech student passionate about software development and competitive programming.
      </PageHeading>
      
      <div className="profile-container">
        {/* Left Column: Image */}
        <div className="profile-left">
          <div className="image-wrapper">
            <img 
              src={profileImg} 
              alt="Pratham Tripathi" 
              className="profile-image"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="profile-right">
          <h2 className="profile-name">Pratham Tripathi</h2>
          
          <div className="education-info">
            <p className="college-name">Computer Science & Engineering</p>
            <p className="cgpa-badge">CGPA: <span>9.25</span></p> {/* Replace with your actual CGPA */}
          </div>

          <div className="quick-links">
            <a 
              href="https://github.com/your-username" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link-btn github"
            >
              GitHub ↗
            </a>
            <a 
              href="https://linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link-btn linkedin"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}