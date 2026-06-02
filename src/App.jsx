import { useState } from 'react'

export default function App() {
  const [lang, setLang] = useState('es')
  const es = lang === 'es'

  const wa = 'https://wa.me/50663091161'

  return (
    <div className="site">

      {/* ── NAV ── */}
      <nav className="nav">
        <img src="/images/logo.jpeg" alt="Auto Impacto" className="nav-logo" />
        <div className="nav-links">
          <a href="#how">{es ? 'Cómo funciona' : 'How it works'}</a>
          <a href="#fleet">{es ? 'Nuestra Flota' : 'Our Fleet'}</a>
          <a href="#interior">{es ? 'Interior' : 'Interior'}</a>
          <a href="#exterior">{es ? 'Exterior' : 'Exterior'}</a>
          <a href="#pricing">{es ? 'Precios' : 'Pricing'}</a>
        </div>
        <div className="nav-right">
          <button className="lang-btn" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a href="#contact" className="nav-cta">
            {es ? 'Contáctanos' : 'Contact us'}
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-tag">{es ? 'San José · Cartago · Heredia · Alajuela · Escazú' : 'San José · Cartago · Heredia · Alajuela · Escazú'}</p>
          <p className="hero-hook">
            {es
              ? '¿Cansado de pagar por anuncios que nadie ve? Hay una mejor manera.'
              : 'Tired of paying for ads that get ignored? There\'s a better way.'}
          </p>
          <h1>
            {es
              ? <>Tu marca en movimiento<br /><span className="hero-accent">por toda la GAM</span></>
              : <>Your brand on the move<br /><span className="hero-accent">across the GAM</span></>}
          </h1>
          <p className="hero-sub">
            {es
              ? 'Publicidad en nuestra flota de 8 autos y creciendo — calcomanías exteriores, volantes interiores, y respuesta directa vía WhatsApp.'
              : 'Advertising on our fleet of 8 cars and counting — exterior stickers, interior flyers, and direct response via WhatsApp.'}
          </p>
          <div className="hero-actions">
            <a href={wa} className="btn-primary" target="_blank" rel="noreferrer">
              {es ? 'Solicitar propuesta' : 'Get a proposal'}
            </a>
            <a href="#how" className="btn-ghost">
              {es ? 'Ver cómo funciona' : 'See how it works'}
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-bar">
        <div className="stat">
          <span className="stat-n">200</span>
          <span className="stat-l">km / {es ? 'auto / día' : 'car / day'}</span>
          <span className="stat-tag">{es ? 'POR AUTO' : 'PER CAR'}</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-n">1,600</span>
          <span className="stat-l">km / {es ? 'día · 8 autos' : 'day · 8 cars'}</span>
          <span className="stat-tag">{es ? 'FLOTA DIARIA' : 'FLEET DAILY'}</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-n">11,200</span>
          <span className="stat-l">km / {es ? 'semana' : 'week'}</span>
          <span className="stat-tag">{es ? 'FLOTA SEMANAL' : 'FLEET WEEKLY'}</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-n">~380K</span>
          <span className="stat-l">{es ? 'mensual · amplio alcance' : 'monthly · broad reach'}</span>
          <span className="stat-tag">{es ? 'IMPRESIONES EXTERNAS' : 'EXTERNAL IMPRESSIONS'}</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-n">~5.7K</span>
          <span className="stat-l">15–30 min {es ? 'tiempo de atención' : 'dwell time'}</span>
          <span className="stat-tag">{es ? 'IMPRESIONES INTERNAS' : 'INTERNAL IMPRESSIONS'}</span>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="section section-light">
        <div className="container">
          <h2 className="section-heading">
            {es ? 'Así de simple' : 'Simple as that'}
          </h2>
          <p className="section-sub">
            {es ? 'De la conversación a tu anuncio en la calle en menos de una semana.' : 'From conversation to your ad on the street in under a week.'}
          </p>
          <div className="steps">
            <div className="step">
              <span className="step-num">01</span>
              <h3>{es ? 'Elige tu plan' : 'Pick your plan'}</h3>
              <p>{es ? 'Exterior, interior, o ambos. Elija la Opción 1 (tarifa fija) o la Opción 2 (reparto de ingresos).' : 'Exterior, interior, or both. Choose Option 1 (flat rate) or Option 2 (revenue share).'}</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <span className="step-num">02</span>
              <h3>{es ? 'Aprueba el arte' : 'Approve the art'}</h3>
              <p>{es ? 'Nosotros diseñamos o usamos tu arte. Tú apruebas antes de imprimir.' : 'We design it or use your art. You approve before we print.'}</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <span className="step-num">03</span>
              <h3>{es ? 'Instalación en 5 días' : 'Live in 5 days'}</h3>
              <p>{es ? 'Instalamos, y te enviamos fotos mensuales de tus anuncios en las calles.' : 'We install and send you monthly photos of your ads on the streets.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEET ── */}
      <section id="fleet" className="section section-cream">
        <div className="container">
          <div className="section-header-center">
            <span className="pill pill-dark">{es ? 'Nuestra Flota' : 'Our Fleet'}</span>
            <h2>{es ? 'Los autos que llevan tu marca' : 'The cars carrying your brand'}</h2>
            <p className="section-sub">
              {es
                ? 'Flota moderna de Ubers circulando diariamente por San José, Cartago, Heredia, Alajuela y Escazú.'
                : 'A modern fleet of Ubers driving daily across San José, Cartago, Heredia, Alajuela and Escazú.'}
            </p>
          </div>
          <div className="fleet-grid">
            <div className="fleet-photo fleet-photo-wide">
              <img src="/images/fleet-sunset.jpg" alt="Nammi 06 on the road" />
              <div className="fleet-caption">
                <strong>{es ? 'La flota completa' : 'The full fleet'}</strong>
                <span>{es ? 'Nammi 06, Kia EV, Hyundai y más' : 'Nammi 06, Kia EV, Hyundai & more'}</span>
              </div>
            </div>
            <div className="fleet-photo">
              <img src="/images/fleet-group.jpg" alt="Sneha Turismo fleet" />
              <div className="fleet-caption">
                <strong>{es ? 'Nammi 06 — Insignia' : 'Nammi 06 — Flagship'}</strong>
                <span>{es ? 'Recorriendo la GAM cada día' : 'Covering the GAM every day'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERIOR ── */}
      <section id="interior" className="section section-light">
        <div className="container">
          <div className="section-header-center">
            <span className="pill pill-dark">{es ? 'Publicidad Interior' : 'Interior Advertising'}</span>
            <h2>{es ? '15–30 minutos de atención total' : '15–30 minutes of full attention'}</h2>
            <p className="section-sub">
              {es
                ? 'Cada viaje en Uber dura 15–30 minutos con la atención total del pasajero. Los pasajeros están sentados, a menudo sin qué hacer, buscando algo que leer. La publicidad interior convierte ese tiempo en interacción directa con su marca — no un vistazo, sino una lectura completa.'
                : 'Every Uber ride is 15–30 minutes of undivided attention. Riders are seated, often bored, and looking for something to read. Interior advertising turns that time into direct engagement — not just a glimpse, but a full brand read.'}
            </p>
          </div>
          <div className="interior-photos">
            <div className="int-photo">
              <img src="/images/dashboard.jpg" alt="Dashboard flyer placement" />
              <div className="int-photo-info">
                <h3>{es ? 'Volante en el tablero' : 'Dashboard Flyer'}</h3>
                <p>{es ? 'Lo primero que ve el pasajero al subir.' : 'First thing riders see when they get in.'}</p>
              </div>
            </div>
            <div className="int-photo">
              <img src="/images/backseat.jpg" alt="Backseat flyer placement" />
              <div className="int-photo-info">
                <h3>{es ? 'Volante asiento trasero' : 'Backseat Flyer'}</h3>
                <p>{es ? 'Detrás del cabezal — a la altura de los ojos.' : 'Behind the headrest — eye-level for rear passengers.'}</p>
              </div>
            </div>
          </div>
          <div className="interior-cards">
            <div className="icard">
              <div className="icard-icon">📂</div>
              <h3>{es ? 'Folletos puerta delantera' : 'Front-Door Brochures'}</h3>
              <p>{es ? 'Para llevar a casa — tu marca sigue trabajando.' : 'Take-home brochures — your brand keeps working.'}</p>
            </div>
            <div className="icard">
              <div className="icard-icon">📖</div>
              <h3>{es ? 'Folletos asiento trasero' : 'Back-Seat Brochures'}</h3>
              <p>{es ? 'En la bolsa del asiento — para leer durante el viaje.' : 'In the seat pocket — read during the ride.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXTERIOR ── */}
      <section id="exterior" className="section section-dark">
        <div className="container two-col-layout">
          <div className="col-text">
            <span className="pill">{es ? 'Publicidad Exterior' : 'Exterior Advertising'}</span>
            <h2>{es ? 'Tu logo en cada semáforo' : 'Your logo at every red light'}</h2>
            <p>
              {es
                ? 'Calcomanías en ambas puertas traseras y el parachoques trasero. Minutos de exposición en cada presa — no segundos.'
                : 'Stickers on both rear doors and rear bumper. Minutes of exposure at every traffic jam — not seconds.'}
            </p>
            <ul className="feature-list">
              <li>{es ? 'Tamaños: 30×30 cm o 60×60 cm' : 'Sizes: 1×1 ft or 2×2 ft (30×30 or 60×60 cm)'}</li>
              <li>{es ? 'Código QR + WhatsApp en cada anuncio' : 'QR code + WhatsApp on every ad'}</li>
              <li>{es ? 'Instalación, retiro e informe fotográfico mensual' : 'Install, removal & monthly photo report'}</li>
              <li>{es ? 'Diseño incluido o trae el tuyo' : 'Design included or bring your own'}</li>
            </ul>
            <a href={wa} className="btn-primary" target="_blank" rel="noreferrer">
              {es ? 'Consultar disponibilidad' : 'Check availability'}
            </a>
          </div>
          <div className="col-visual exterior-visual">
            <div className="ext-photos">
              <div className="ext-photo-main">
                <img src="/images/side.jpg" alt="Side sticker placement" />
                <span className="photo-label">{es ? 'Vista exterior' : 'Exterior view'}</span>
              </div>
              <div className="ext-photo-secondary">
                <img src="/images/bumper.jpg" alt="Bumper sticker placement" />
                <span className="photo-label">{es ? 'Parachoques' : 'Rear bumper'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="section section-cream">
        <div className="container">
          <div className="section-header-center">
            <h2>{es ? 'Elija Su Modelo — Dos Opciones' : 'Choose Your Pricing — Two Options'}</h2>
            <p className="section-sub">
              {es ? 'Interior y exterior se cotizan por separado — elija uno o ambos.' : 'Interior and exterior priced separately — choose one or both.'}
            </p>
          </div>
          <div className="pricing-tabs">
            <div className="pricing-note">{es ? 'Exterior · Interior · O ambos' : 'Exterior · Interior · Or both'}</div>
          </div>
          <div className="pricing-cards">
            <div className="pcard">
              <span className="pcard-promo">{es ? '🔥 40% OFF — hasta fin de julio' : '🔥 40% OFF — until end of July'}</span>
              <h3>{es ? 'Opción 1 — Tarifa Fija Semanal' : 'Option 1 — Flat Weekly Rate'}</h3>
              <div className="pcard-price">
                ₡45,000<span>{es ? '/sem' : '/wk'}</span>
              </div>
              <div className="pcard-was">{es ? 'Precio regular: ₡75,000/sem' : 'Regular price: ₡75,000/wk'}</div>
              <p>{es ? 'Por auto · Usted cubre la impresión.' : 'Per car · You cover printing.'}</p>
              <ul>
                <li>{es ? 'QR + WhatsApp en cada anuncio' : 'QR + WhatsApp on every ad'}</li>
                <li>{es ? 'Informe fotográfico mensual' : 'Monthly photo report'}</li>
                <li>{es ? 'Diseño incluido o trae el tuyo' : 'Design included or bring your own'}</li>
              </ul>
              <a href={wa} className="btn-outline" target="_blank" rel="noreferrer">
                {es ? 'Empezar' : 'Get started'}
              </a>
            </div>
            <div className="pcard pcard-featured">
              <span className="pcard-badge">{es ? 'Volumen' : 'Volume'}</span>
              <h3>{es ? 'Cotizaciones Personalizadas' : 'Customized Quotes'}</h3>
              <div className="pcard-price" style={{fontSize:'1.4rem'}}>{es ? 'A medida' : 'Tailored'}</div>
              <p>{es ? 'Llámenos para escalar — descuentos por volumen en varios autos o semanas. Nos adaptamos a cualquier presupuesto.' : 'Call us to discuss scaling — volume discounts on multi-car & multi-week commitments. We accommodate any budget.'}</p>
              <ul>
                <li>{es ? 'Descuentos por volumen' : 'Volume discounts'}</li>
                <li>{es ? 'Multi-auto o multi-semana' : 'Multi-car or multi-week'}</li>
                <li>{es ? 'Cualquier presupuesto' : 'Any budget'}</li>
              </ul>
              <a href={wa} className="btn-primary" target="_blank" rel="noreferrer">
                {es ? 'Consultar' : 'Get a quote'}
              </a>
            </div>
            <div className="pcard">
              <h3>{es ? 'Opción 2 — Reparto de Ingresos' : 'Option 2 — Revenue Share'}</h3>
              <div className="pcard-price">10%</div>
              <p>{es ? 'Nosotros cubrimos la impresión a cambio del reparto de ingresos.' : 'We cover printing in exchange for the revenue share.'}</p>
              <ul>
                <li>{es ? 'Alianza basada en resultados' : 'Performance-based partnership'}</li>
                <li>{es ? '10% sobre ingresos generados por escaneos QR' : '10% on revenue from QR-code scans'}</li>
                <li>{es ? 'Informes mensuales de escaneos' : 'Monthly scan reporting'}</li>
              </ul>
              <a href={wa} className="btn-outline" target="_blank" rel="noreferrer">
                {es ? 'Empezar' : 'Get started'}
              </a>
            </div>
          </div>
          <p className="pricing-fine">
            {es
              ? 'Con la Opción 1, diseño e impresión se cobran aparte (calcomanías aprox. US$25/pie²). Con la Opción 2, nosotros cubrimos la impresión. En ambos casos coordinamos todo el proceso.'
              : 'Under Option 1, design and printing are billed to you (exterior stickers approx. US$25/sq ft). Under Option 2, we cover printing costs. Either way, we coordinate the process end-to-end.'}
          </p>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section id="contact" className="cta-banner">
        <div className="container">
          <h2>{es ? '¿Listo para poner tu marca en movimiento?' : 'Ready to put your brand on the move?'}</h2>
          <p>{es ? 'Escríbenos por WhatsApp y tenemos una propuesta lista en 24 horas.' : 'Message us on WhatsApp and we\'ll have a proposal ready in 24 hours.'}</p>
          <a href={wa} className="btn-primary btn-large" target="_blank" rel="noreferrer">
            {es ? 'Escribir por WhatsApp' : 'Message on WhatsApp'}
          </a>
          <div className="cta-contacts">
            <a href={wa} target="_blank" rel="noreferrer" className="cta-icon-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.847L.057 23.571a.75.75 0 0 0 .925.924l5.724-1.472A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.179-1.433l-.371-.22-3.397.873.888-3.397-.242-.381A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              +506 6309-1161
            </a>
            <span className="footer-sep">·</span>
            <a href="mailto:info@auto-impacto.com" className="cta-icon-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              info@auto-impacto.com
            </a>
            <span className="footer-sep">·</span>
            <a href="https://www.instagram.com/autoimpacto__" target="_blank" rel="noreferrer" className="cta-icon-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              @autoimpacto__
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Auto Impacto</span>
      </footer>

    </div>
  )
}
