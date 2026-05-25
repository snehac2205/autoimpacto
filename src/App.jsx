import { useState } from 'react'
import translations from './i18n'

function App() {
  const [lang, setLang] = useState('es')
  const t = translations[lang]

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand">{t.brand}</div>
        <nav className="nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#events">{t.nav.events}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <button className="lang-toggle" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </header>

      <main>
        <section className="hero">
          <div>
            <span className="eyebrow">{t.brand}</span>
            <h1>{t.tagline}</h1>
            <p>{t.aboutText}</p>
            <a href="#contact" className="primary-button">{t.action}</a>
          </div>
        </section>

        <section id="about" className="panel">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
        </section>

        <section id="services" className="panel grid">
          <div>
            <h2>{t.servicesTitle}</h2>
            <p>Con enfoque práctico y resultados medibles, diseñamos soluciones reales.</p>
          </div>
          <ul>
            {t.services.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="events" className="panel spotlight">
          <h2>{t.eventsTitle}</h2>
          <p>{t.eventsText}</p>
        </section>

        <section id="contact" className="panel contact-panel">
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <div className="contact-card">
            <strong>Email:</strong> info@autoimpacto.com
            <strong>Teléfono:</strong> +34 600 000 000
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}

export default App
