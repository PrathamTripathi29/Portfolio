import { socials, profile, navLinks } from "../siteData.js";
import { SocialIcon } from "./Icons.jsx";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__col">
          <span className="site-footer__brand">{profile.name}</span>
          <p className="site-footer__tagline">{profile.tagline}</p>
        </div>

        <nav className="site-footer__links">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="site-footer__link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-footer__socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="site-footer__social"
            >
              <SocialIcon name={s.icon} width={17} height={17} />
            </a>
          ))}
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span className="mono-tag" style={{ background: "rgba(255,249,242,0.12)", borderColor: "rgba(255,249,242,0.25)", color: "#fff9f2" }}>
          <span className="dot" /> status: open to opportunities
        </span>
        <span className="site-footer__copyright">© {year} {profile.name}</span>
      </div>
    </footer>
  );
}
