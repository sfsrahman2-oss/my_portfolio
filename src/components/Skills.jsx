import SectionHeading from './SectionHeading.jsx';
import { skills } from '../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeading number="02" title="Skills" subtitle="The tools I use to bring interfaces to life." />

        <ul className="skills__grid">
          {skills.map((skill) => (
            <li key={skill.id} className="card skill-card">
              <div className="skill-card__header">
                <h3 className="skill-card__name">{skill.name}</h3>
                <span className="skill-card__level">{skill.level}%</span>
              </div>
              <p className="skill-card__note">{skill.note}</p>
              <div
                className="progress"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label={`${skill.name} proficiency`}
              >
                <div className="progress__bar" style={{ width: `${skill.level}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
