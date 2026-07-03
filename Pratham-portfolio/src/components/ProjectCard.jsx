import { GithubIcon, ArrowUpRightIcon } from "./Icons.jsx";
import "./ProjectCard.css";

const ACCENTS = {
  coral: "var(--coral)",
  sage: "var(--sage-teal)",
  yellow: "var(--pale-yellow)",
};

export default function ProjectCard({ project }) {
  const accent = ACCENTS[project.accent] || ACCENTS.coral;

  return (
    <article className="project-card card" style={{ "--accent": accent }}>
      <div className="project-card__top">
        <span className="mono-tag">{project.tag}</span>
        <div className="project-card__links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label="View source on GitHub">
              <GithubIcon width={17} height={17} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Open live demo">
              <ArrowUpRightIcon width={17} height={17} />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      {project.highlights?.length > 0 && (
        <ul className="project-card__highlights">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}

      <div className="project-card__stack">
        {project.stack.map((tech) => (
          <span key={tech} className="project-card__chip">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
