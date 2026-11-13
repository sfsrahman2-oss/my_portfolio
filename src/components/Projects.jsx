import { useState } from 'react';
import SectionHeading from './SectionHeading.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/projects.js';

const ALL = 'All';

// Build the filter list from the data so new technologies appear automatically.
const filters = [ALL, ...new Set(projects.flatMap((project) => project.technologies))];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState(ALL);

  const visibleProjects =
    activeFilter === ALL
      ? projects
      : projects.filter((project) => project.technologies.includes(activeFilter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading number="03" title="Projects" subtitle="Selected work. Filter by technology." />

        <div className="filters" role="group" aria-label="Filter projects by technology">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-button ${activeFilter === filter ? 'filter-button--active' : ''}`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {visibleProjects.length === 0 && <p className="projects__empty">No projects match this filter yet.</p>}
      </div>
    </section>
  );
}
