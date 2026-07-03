import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks, profile } from "../siteData.js";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__brand" onClick={() => setOpen(false)}>
          <span className="site-header__brand-mark">PT</span>
          <span className="site-header__brand-name">{profile.name}</span>
        </NavLink>

        <button
          className={`site-header__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-header__nav ${open ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `site-header__link ${isActive ? "is-active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
