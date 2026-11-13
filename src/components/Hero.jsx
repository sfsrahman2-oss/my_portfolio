import { profile } from '../data/profile.js';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__buttons">
            <a href={profile.cvUrl} download className="button button--primary">
              Download CV
            </a>
            <a href="#projects" className="button button--ghost">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo-frame">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="hero__photo"
              width="420"
              height="420"
            />
          </div>
          <span className="hero__badge">React &amp; JavaScript</span>
        </div>
      </div>
    </section>
  );
}
