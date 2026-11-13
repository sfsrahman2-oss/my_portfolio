import { useState } from 'react';
import SectionHeading from './SectionHeading.jsx';
import { profile } from '../data/profile.js';

const initialValues = { name: '', email: '', subject: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email.';
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.';
  if (!values.message.trim()) errors.message = 'Please write a message.';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    // Clear the error for a field as soon as the visitor starts fixing it.
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // A real backend or form service (Formspree, EmailJS) would be called here.
      setSubmitted(true);
      setValues(initialValues);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <SectionHeading number="04" title="Contact" subtitle="Have a project or an opportunity in mind? Let's talk." />

        <div className="contact__grid">
          <div className="contact__intro">
            <p>
              I&apos;m currently open to junior frontend roles and freelance work. Send me a message and I&apos;ll get back to you as
              soon as I can.
            </p>
            <a href={`mailto:${profile.email}`} className="contact__email">
              {profile.email}
            </a>
          </div>

          <form className="card contact__form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <p className="form-success" role="status">
                Thank you! Your message has been sent successfully.
              </p>
            )}

            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={values.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} autoComplete="name" />
              {errors.name && <span className="field__error">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={values.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} autoComplete="email" />
              {errors.email && <span className="field__error">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" value={values.subject} onChange={handleChange} aria-invalid={Boolean(errors.subject)} />
              {errors.subject && <span className="field__error">{errors.subject}</span>}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={values.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} />
              {errors.message && <span className="field__error">{errors.message}</span>}
            </div>

            <button type="submit" className="button button--primary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
