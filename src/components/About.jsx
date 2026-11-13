import SectionHeading from './SectionHeading.jsx';
import { profile } from '../data/profile.js';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading number="01" title="About me" subtitle="A little about who I am and where I'm headed." />

        <div className="about__grid">
          <div className="about__story">
            <p>{profile.about}</p>

            <h3 className="about__subheading">Career goals</h3>
            <p>{profile.goals}</p>

            <h3 className="about__subheading">Education</h3>
            <ul className="timeline">
              {profile.education.map((item) => (
                <li key={item.id} className="timeline__item">
                  <span className="timeline__period">{item.period}</span>
                  <strong className="timeline__degree">{item.degree}</strong>
                  <span className="timeline__place">{item.place}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="card profile-card" aria-label="Profile information">
            <h3 className="profile-card__title">Profile</h3>
            <dl className="profile-card__list">
              {profile.info.map((item) => (
                <div key={item.label} className="profile-card__row">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
