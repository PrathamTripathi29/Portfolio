import React from 'react';
import { Link, NavLink } from "react-router-dom";
import '../css/Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        {}
        <Link to="/" className="nav-logo">
          <span className="logo-prefix">~/</span>
          <span className="logo-name">pratham</span>
        </Link>
        
        {}
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/algorithms" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Algorithms
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}