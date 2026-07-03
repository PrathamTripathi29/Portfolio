import { education, interests, profile } from "../siteData.js";
import "./About.css";

export default function About() {
  return (
    <section className="section about-page">
      <div className="container">
        <div className="section-heading">
          <span className="mono-tag"><span className="dot" /> about</span>
          <h2>Education & interests</h2>
        </div>

        <div className="about-page__grid">
          <div className="about-page__block">
            <h3 className="about-page__block-title">Education</h3>
            <div className="about-page__edu-list">
              {education.map((edu, i) => (
                <div className="edu-card card" key={i}>
                  <span className="edu-card__period mono-tag">{edu.period}</span>
                  <h4>{edu.degree}</h4>
                  <p className="edu-card__school">{edu.school}</p>
                  <p className="edu-card__detail">{edu.detail}</p>
                </div>
              ))}
            </div>

            <div className="about-page__bio-card card">
              <h4>A little more about me</h4>
              <p>{profile.bio}</p>
            </div>
          </div>

          <div className="about-page__block">
            <h3 className="about-page__block-title">Interests</h3>
            <div className="interest-cloud">
              {interests.map((interest) => (
                <span key={interest} className="interest-chip">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
