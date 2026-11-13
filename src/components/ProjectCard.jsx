export default function ProjectCard({ project }) {
  const { title, description, image, technologies, liveUrl, githubUrl } = project;

  return (
    <article className="card project-card">
      <div className="project-card__image-wrap">
        <img
          src={image}
          alt={`Screenshot of the ${title} project`}
          className="project-card__image"
          loading="lazy"
          width="640"
          height="400"
        />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <ul className="tags" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-card__buttons">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="button button--primary button--small">
            Live Demo
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="button button--ghost button--small">
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
