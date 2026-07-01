import React from 'react';
import '../css/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {}
        <div className="footer-left">
          <p>© {currentYear} Pratham Tripathi. All rights reserved.</p>
        </div>
        
        {}
        <div className="footer-right">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-text">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}