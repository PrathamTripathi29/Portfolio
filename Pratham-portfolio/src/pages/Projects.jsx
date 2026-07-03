import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../siteData.js";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="section projects-page">
      <div className="container">
        <div className="section-heading">
          <span className="mono-tag"><span className="dot" /> selected work</span>
          <h2>Projects</h2>
          <p style={{ marginTop: 14 }}>
            Some Projects I've worked on. I still strive to improve them and add new features, while also trying to come up with new project ideas.
          </p>
        </div>

        <div className="projects-page__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
