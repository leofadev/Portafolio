import { useRef, useState } from 'react';
import { animate } from 'animejs';
import { FiAlertCircle, FiCheckCircle, FiSend } from 'react-icons/fi';
import { useI18n } from '../i18n/useI18n';
import { prefersReducedMotion } from '../lib/motion';
import { sendMessage } from '../lib/sendMessage';

const EMPTY = { name: '', email: '', message: '', honey: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values, f) {
  const errors = {};
  if (!values.name.trim()) errors.name = f.required;
  if (!values.email.trim()) errors.email = f.required;
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = f.invalidEmail;
  if (!values.message.trim()) errors.message = f.required;
  else if (values.message.trim().length < 10) errors.message = f.shortMessage;
  return errors;
}

export default function ContactForm() {
  const { t, content } = useI18n();
  const f = t.form;
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const formRef = useRef(null);

  const change = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((errs) => ({ ...errs, [name]: undefined }));
  };

  const shake = () => {
    if (prefersReducedMotion()) return;
    animate(formRef.current, { translateX: [0, -10, 10, -6, 6, 0], duration: 450, ease: 'inOutSine' });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const found = validate(values, f);
    setErrors(found);
    if (Object.keys(found).length) {
      shake();
      formRef.current.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setStatus('sending');
    try {
      await sendMessage(content.profile.contactEndpoint, {
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
        honey: values.honey,
      }, f.subject);
      setStatus('success');
      setValues(EMPTY);
    } catch {
      setStatus('error');
      shake();
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form form-success" role="status">
        <FiCheckCircle className="form-success-icon" aria-hidden="true" />
        <h3>{f.successTitle}</h3>
        <p>{f.successText}</p>
        <button type="button" className="btn btn-ghost" onClick={() => setStatus('idle')}>
          {f.another}
        </button>
      </div>
    );
  }

  const field = (name, label, attrs, multiline = false) => (
    <label className={`form-field ${errors[name] ? 'has-error' : ''}`}>
      <span className="form-label">{label}</span>
      {multiline ? (
        <textarea name={name} value={values[name]} onChange={change} aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `${name}-error` : undefined} {...attrs} />
      ) : (
        <input name={name} value={values[name]} onChange={change} aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `${name}-error` : undefined} {...attrs} />
      )}
      {errors[name] && <span id={`${name}-error`} className="form-error">{errors[name]}</span>}
    </label>
  );

  return (
    <form ref={formRef} className="contact-form" onSubmit={submit} noValidate>
      <div className="form-row">
        {field('name', f.name, { type: 'text', autoComplete: 'name', placeholder: f.namePlaceholder, maxLength: 80 })}
        {field('email', f.email, { type: 'email', autoComplete: 'email', placeholder: f.emailPlaceholder, maxLength: 120 })}
      </div>
      {field('message', f.message, { rows: 4, placeholder: f.messagePlaceholder, maxLength: 2000 }, true)}

      {/* Campo trampa para bots: invisible para personas y lectores de pantalla */}
      <input type="text" name="honey" value={values.honey} onChange={change} className="form-honey"
        tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {status === 'error' && (
        <p className="form-alert" role="alert">
          <FiAlertCircle aria-hidden="true" /> {f.error}
        </p>
      )}

      <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
        <FiSend aria-hidden="true" /> {status === 'sending' ? f.sending : f.send}
      </button>
    </form>
  );
}
