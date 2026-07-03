import { Link } from "react-router-dom";
import Avatar from "../components/Avatar.jsx";
import { SocialIcon, ArrowUpRightIcon } from "../components/Icons.jsx";
import { profile, socials } from "../siteData.js";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="container hero__grid">
          <div className="hero__media">
            <Avatar />
          </div>

          <div className="hero__content">
            <span className="mono-tag">
              <span className="dot" /> {profile.role}
            </span>
            <h1 className="hero__name">
              Hi, I'm {profile.name.split(" ")[0]}.
            </h1>
            <p className="hero__tagline">{profile.tagline}</p>
            <p className="hero__bio">{profile.bio}</p>

            <div className="hero__actions">
              <Link to="/projects" className="btn btn-primary">
                View projects <ArrowUpRightIcon width={15} height={15} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                About me
              </Link>
            </div>

            <div className="hero__socials">
              <span className="hero__socials-label">find me on</span>
              <div className="hero__socials-row">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hero__social"
                    aria-label={s.label}
                  >
                    <SocialIcon name={s.icon} />
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section explore">
        <div className="container">
          <div className="section-heading">
            <span className="mono-tag"><span className="dot" /> around the site</span>
            <h2>Two sides of how I code.</h2>
          </div>

          <div className="explore__grid">
            <Link to="/projects" className="explore__card card">
              <span className="explore__card-tag" style={{ background: "var(--pale-yellow)" }}>Projects</span>
              <h3>Things I've built</h3>
              <p>Full-stack apps built end-to-end, from database and backend, to frontend.</p>
              <span className="explore__card-link">See projects <ArrowUpRightIcon width={14} height={14} /></span>
            </Link>

            <Link to="/algorithms" className="explore__card card">
              <span className="explore__card-tag" style={{ background: "var(--sage-teal)" }}>Algorithms</span>
              <h3>Competitive programming</h3>
              <p>LeetCode and Codeforces stats, rating history, and problems solved.</p>
              <span className="explore__card-link">See stats <ArrowUpRightIcon width={14} height={14} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
