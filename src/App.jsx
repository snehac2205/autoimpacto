import { useState } from 'react'

export default function App() {
  const [lang, setLang] = useState('es')
  const es = lang === 'es'

  return (
    <div className="page">

      {/* ── Lang toggle ── */}
      <div className="lang-bar">
        <button className="lang-btn" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>

      {/* ══════════════ HERO HEADER ══════════════ */}
      <header className="hero-header">
        <p className="brand-eyebrow">SNEHA TURISMO</p>
        <h1>{es ? 'Propuesta de Alianza Publicitaria' : 'Advertising Partnership Proposal'}</h1>
        {es
          ? <p className="hero-sub">Advertising Partnership Proposal</p>
          : <p className="hero-sub">Propuesta de Alianza Publicitaria</p>}
      </header>

      {/* ══════════════ PART 1 ══════════════ */}
      <div className="section-label">
        <span className="part-tag">PART 1:</span>
        <span className="section-title">
          {es ? 'PUBLICIDAD EXTERIOR' : 'EXTERIOR ADVERTISING'}
        </span>
        <span className="section-sub">
          {es ? '/ Exterior Advertising' : '/ Publicidad Exterior'}
        </span>
      </div>

      <div className="content-block">
        <p className="intro-text">
          {es
            ? 'Nuestra flota de 8 Ubers circula todos los días en San José, Cartago, Heredia, Alajuela y Escazú, con muchas horas en presas — una audiencia cautiva de conductores, pasajeros y peatones que tienen el auto frente a los ojos.'
            : 'Sneha Turismo operates a fleet of 8 Ubers driving daily through San José, Cartago, Heredia, Alajuela, and Escazú. Our cars spend hours in city traffic — stopped at red lights, queuing on Paseo Colón and Circunvalación, and parked at offices, malls, and restaurants. That means a captive audience of drivers, passengers, and pedestrians with nowhere else to look. We\'re opening a limited number of ad placements on our vehicles.'}
        </p>
        {es && (
          <p className="intro-text italic">
            Sneha Turismo operates a fleet of 8 Ubers driving daily through San José, Cartago, Heredia, Alajuela, and Escazú — a captive audience with nowhere else to look.
          </p>
        )}

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-box">
            <span className="stat-num">8</span>
            <span className="stat-label">{es ? 'UBERS EN FLOTA' : 'UBERS IN FLEET'}</span>
            <span className="stat-sub">{es ? 'Ubers en flota' : 'Ubers en flota'}</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">~20</span>
            <span className="stat-label">{es ? 'VIAJES / AUTO / DÍA' : 'TRIPS / CAR / DAY'}</span>
            <span className="stat-sub">{es ? 'Viajes por auto al día' : 'Viajes por auto al día'}</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">15k+</span>
            <span className="stat-label">{es ? 'IMPRESIONES MENSUALES*' : 'MONTHLY IMPRESSIONS*'}</span>
            <span className="stat-sub">{es ? 'Impresiones mensuales por auto' : 'Impresiones mensuales por auto'}</span>
          </div>
        </div>

        {/* Two-column grid */}
        <div className="two-col">
          <div className="info-box">
            <h3 className="box-title">{es ? 'QUÉ OFRECEMOS' : 'WHAT WE PROVIDE'} / {es ? 'What We Provide' : 'Qué Ofrecemos'}</h3>
            <ul className="feature-list">
              <li>
                <strong>{es ? 'Calcomanías exteriores en cada vehículo' : 'Exterior stickers on each vehicle'}</strong>
                <span className="item-sub">{es ? 'Exterior stickers on each vehicle' : 'Calcomanías exteriores en cada vehículo'}</span>
              </li>
              <li>
                <strong>{es ? 'Ambas puertas traseras + parachoques' : 'Both rear doors + rear bumper'}</strong>
                <span className="item-sub">{es ? 'Both rear doors + rear bumper' : 'Ambas puertas traseras + parachoques'}</span>
              </li>
              <li>
                <strong>{es ? 'Tamaños: 30×30 cm o 60×60 cm' : 'Sticker sizes: 1×1 ft or 2×2 ft'}</strong>
                <span className="item-sub">{es ? 'Sticker sizes: 1×1 ft or 2×2 ft' : 'Tamaños: 30×30 cm o 60×60 cm'}</span>
              </li>
              <li>
                <strong>{es ? 'Instalación, retiro e informe fotográfico' : 'Install, removal & monthly photo report'}</strong>
                <span className="item-sub">{es ? 'Install, removal & monthly photo report' : 'Instalación, retiro e informe fotográfico'}</span>
              </li>
              <li>
                <strong>{es ? 'Diseño por nosotros o traiga el suyo' : 'Design help or bring-your-own art'}</strong>
                <span className="item-sub">{es ? 'Design help or bring-your-own art' : 'Diseño por nosotros o traiga el suyo'}</span>
              </li>
            </ul>
          </div>

          <div className="info-box">
            <h3 className="box-title">{es ? 'POR QUÉ FUNCIONA' : 'WHY IT WORKS'} / {es ? 'Why It Works' : 'Por Qué Funciona'}</h3>
            <div className="why-item">
              <strong>{es ? 'Audiencia cautiva en presas' : 'Captive audience in traffic'}</strong>
              <p>{es ? 'Audiencia cautiva en presas — minutos, no segundos.' : 'Captive audience in traffic — minutes, not seconds.'}</p>
            </div>
            <div className="why-item">
              <strong>{es ? 'Vallas móviles' : 'Moving billboards'}</strong>
              <p>{es ? 'Vallas móviles en San José, Cartago, Heredia, Alajuela y Escazú.' : 'Moving billboards in San José, Cartago, Heredia, Alajuela and Escazú.'}</p>
            </div>
            <div className="why-item">
              <strong>{es ? 'Respuesta directa integrada' : 'Direct response built-in'}</strong>
              <p>{es ? 'Código QR y WhatsApp en cada anuncio — llamadas directas.' : 'Your QR code + WhatsApp on every ad — calls and messages straight to you.'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing — Exterior */}
      <div className="pricing-block">
        <h3 className="pricing-title">
          {es ? 'INVERSIÓN — EXTERIOR' : 'INVESTMENT — EXTERIOR'} / {es ? 'Investment — Exterior' : 'Inversión — Exterior'}
        </h3>
        <div className="pricing-row">
          <div className="price-card">
            <span className="price-tier">{es ? 'POR AUTO / Per Car' : 'PER CAR / Por Auto'}</span>
            <span className="price-amount">₡50,000 <span className="price-freq">/ wk</span></span>
            <span className="price-note">{es ? '2 stickers + parachoques' : '2 stickers + bumper'}</span>
          </div>
          <div className="price-card">
            <span className="price-tier">{es ? 'PAQUETE 4 AUTOS / 4-Car Package' : '4-CAR PACKAGE / Paquete'}</span>
            <span className="price-amount">₡170,000 <span className="price-freq">/ wk</span></span>
            <span className="price-note">{es ? '15% descuento de socio' : '15% partner discount'}</span>
          </div>
          <div className="price-card">
            <span className="price-tier">{es ? 'FLOTA COMPLETA / Full Fleet' : 'FULL FLEET / Flota'}</span>
            <span className="price-amount">₡320,000 <span className="price-freq">/ wk</span></span>
            <span className="price-note">{es ? 'Los 8 vehículos' : 'All 8 vehicles'}</span>
          </div>
        </div>
        <p className="pricing-footnote">
          * {es
            ? 'Tarifas indicativas; descuentos para el primer cliente. Mínimo 4 semanas. Diseño e impresión aparte.'
            : 'Indicative rates — first-client discounts available. 4-week minimum. Design & printing billed separately (see back).'}
        </p>
      </div>

      {/* ══════════════ PART 2 ══════════════ */}
      <div className="section-label">
        <span className="part-tag">PART 2:</span>
        <span className="section-title">
          {es ? 'PUBLICIDAD INTERIOR' : 'INTERIOR ADVERTISING'}
        </span>
        <span className="section-sub">
          {es ? '/ Interior Advertising' : '/ Publicidad Interior'}
        </span>
      </div>

      <div className="content-block">
        <div className="hero-header-part2">
          <h2>{es ? 'Complemento de Publicidad Interior' : 'Interior Advertising Add-On'}</h2>
          <p className="sub-italic">{es ? 'Interior Advertising Add-On' : 'Publicidad Interior — Complemento'}</p>
        </div>

        <p className="intro-text">
          {es
            ? 'Cada viaje en Uber dura 15–30 minutos con la atención total del pasajero. La publicidad interior convierte ese tiempo en lectura real de su marca.'
            : 'Every Uber ride is 15–30 minutes of undivided attention. Riders are seated, often bored, and looking for something to read. Interior advertising turns that time into direct engagement — not just a glimpse, but a full brand read.'}
        </p>
        {es && (
          <p className="intro-text italic">
            Every Uber ride is 15–30 minutes of undivided attention. Interior advertising turns that time into direct engagement.
          </p>
        )}

        {/* 4 interior placement types */}
        <div className="interior-grid">
          <div className="interior-box">
            <h4>{es ? 'VOLANTE EN EL TABLERO' : 'DASHBOARD FLYER'}</h4>
            <p className="item-sub-title">{es ? 'Dashboard Flyer' : 'Volante en el tablero'}</p>
            <p>{es ? 'Volante A4/Carta en el tablero — lo primero que ve el pasajero.' : 'A4/Letter flyer on the dashboard — first thing riders see.'}</p>
            <p className="item-sub">{es ? 'A4/Letter flyer on the dashboard — first thing riders see.' : 'Volante en el tablero — lo primero que ve el pasajero.'}</p>
          </div>
          <div className="interior-box">
            <h4>{es ? 'VOLANTE EN ASIENTO TRASERO' : 'BACKSEAT FLYER'}</h4>
            <p className="item-sub-title">{es ? 'Backseat Flyer' : 'Volante en asiento trasero'}</p>
            <p>{es ? 'Detrás del cabezal delantero — a la altura de los ojos.' : 'Back of the front headrest — eye-level for rear passengers.'}</p>
            <p className="item-sub">{es ? 'Back of the front headrest — eye-level for rear passengers.' : 'Detrás del cabezal delantero — a la altura de los ojos.'}</p>
          </div>
          <div className="interior-box">
            <h4>{es ? 'FOLLETOS ASIENTO DELANTERO' : 'FRONT-SEAT BROCHURES'}</h4>
            <p className="item-sub-title">{es ? 'Front-Seat Brochures' : 'Folletos asiento delantero'}</p>
            <p>{es ? 'Folletos en la puerta delantera para llevar.' : 'Brochures in the front door pocket for riders to take home.'}</p>
            <p className="item-sub">{es ? 'Brochures in the front door pocket for riders to take home.' : 'Folletos en la puerta delantera para llevar.'}</p>
          </div>
          <div className="interior-box">
            <h4>{es ? 'FOLLETOS ASIENTO TRASERO' : 'BACK-SEAT BROCHURES'}</h4>
            <p className="item-sub-title">{es ? 'Back-Seat Brochures' : 'Folletos asiento trasero'}</p>
            <p>{es ? 'Folletos en la bolsa del asiento — para leer en el viaje.' : 'Brochures in the seat-back pocket — read during the ride.'}</p>
            <p className="item-sub">{es ? 'Brochures in the seat-back pocket — read during the ride.' : 'Folletos en la bolsa del asiento — para leer en el viaje.'}</p>
          </div>
        </div>

        {/* Why interior works */}
        <div className="why-interior-block">
          <h3 className="box-title">
            {es ? 'POR QUÉ FUNCIONA' : 'WHY INTERIOR ADS DELIVER'} / {es ? 'Why Interior Ads Deliver' : 'Por Qué Funciona'}
          </h3>
          <p>
            <strong>{es ? 'Tiempo de atención.' : 'Dwell time / Tiempo de atención.'}</strong>{' '}
            {es
              ? '15–30 min con su volante frente al pasajero. 15–30 min with your flyer in front of the rider.'
              : '15–30 min with your flyer in front of the rider. 15–30 min con su volante frente al pasajero.'}
          </p>
          <p>
            <strong>{es ? 'Material para llevar.' : 'Take-aways / Material para llevar.'}</strong>{' '}
            {es
              ? 'El folleto se va con el pasajero; su marca sigue trabajando. Brochures leave with the passenger — your brand keeps working.'
              : 'Brochures leave with the passenger — your brand keeps working. El folleto se va con el pasajero; su marca sigue trabajando.'}
          </p>
          <p>
            <strong>{es ? 'Código QR y WhatsApp.' : 'QR + WhatsApp / Código QR y WhatsApp.'}</strong>{' '}
            {es
              ? 'Llamadas y mensajes directos; estadísticas mensuales de escaneos. Direct calls & messages; monthly scan statistics.'
              : 'Direct calls & messages; monthly scan statistics. Llamadas y mensajes directos; estadísticas mensuales de escaneos.'}
          </p>
        </div>
      </div>

      {/* Pricing — Interior */}
      <div className="pricing-block">
        <h3 className="pricing-title">
          {es ? 'INVERSIÓN — INTERIOR' : 'INVESTMENT — INTERIOR'} / {es ? 'Investment — Interior' : 'Inversión — Interior'}
        </h3>
        <div className="pricing-row">
          <div className="price-card">
            <span className="price-tier">{es ? 'POR AUTO / Per Car' : 'PER CAR / Por Auto'}</span>
            <span className="price-amount">₡50,000 <span className="price-freq">/ wk</span></span>
            <span className="price-note">{es ? 'Volantes + folletos' : 'Flyers + brochures'}</span>
          </div>
          <div className="price-card">
            <span className="price-tier">{es ? 'PAQUETE 4 AUTOS / 4-Car Package' : '4-CAR PACKAGE / Paquete'}</span>
            <span className="price-amount">₡170,000 <span className="price-freq">/ wk</span></span>
            <span className="price-note">{es ? '15% descuento de socio' : '15% partner discount'}</span>
          </div>
          <div className="price-card">
            <span className="price-tier">{es ? 'FLOTA COMPLETA / Full Fleet' : 'FULL FLEET / Flota'}</span>
            <span className="price-amount">₡320,000 <span className="price-freq">/ wk</span></span>
            <span className="price-note">{es ? 'Los 8 vehículos' : 'All 8 vehicles'}</span>
          </div>
        </div>
        <p className="pricing-footnote">
          {es
            ? 'Misma tarifa que exterior; combine ambos para descuento adicional. Same rate as exterior — bundle both for an additional discount.'
            : 'Same rate as exterior — bundle both for an additional discount. Misma tarifa; combine ambos para descuento adicional.'}
        </p>
      </div>

      {/* Design & Printing */}
      <div className="content-block">
        <div className="design-section">
          <h3 className="box-title">
            {es ? 'DISEÑO E IMPRESIÓN' : 'DESIGN & PRINTING'} / {es ? 'Design & Printing' : 'Diseño e Impresión'}
          </h3>
          <p>
            {es
              ? 'Diseño e impresión se cobran aparte. Calcomanías exteriores: aprox. US$25 / pie² (ej. 30×30 cm). Nosotros coordinamos todo el proceso.'
              : 'Design and printing are billed separately. Exterior stickers: approx. US$25 / sq ft (e.g., 30×30 cm). We coordinate everything end-to-end.'}
          </p>
          {es && <p className="italic">Design and printing are billed separately. Exterior stickers: approx. US$25 / sq ft. We coordinate everything end-to-end.</p>}
        </div>
      </div>

      {/* Next Steps */}
      <div className="next-steps">
        <h3>{es ? 'PRÓXIMOS PASOS' : 'NEXT STEPS'} / {es ? 'Next Steps' : 'Próximos Pasos'}</h3>
        <ol>
          <li>
            {es
              ? 'Elija exterior, interior o ambos / Choose exterior, interior, or both'
              : 'Choose exterior, interior, or both / Elija exterior, interior o ambos'}
          </li>
          <li>
            {es
              ? 'Apruebe el arte / Approve art'
              : 'Approve art / Apruebe el arte'}
          </li>
          <li>
            {es
              ? 'Instalación en 5 días / Install in 5 days'
              : 'Install in 5 days / Instalación en 5 días'}
          </li>
        </ol>
      </div>

      {/* Footer */}
      <footer className="page-footer">
        <strong>Sneha Turismo — Melvin</strong>
        <span className="footer-sep">•</span>
        <span>WhatsApp / Tel: +506 ____</span>
        <span className="footer-sep">•</span>
        <span>sneha.turismo@example.com</span>
      </footer>

    </div>
  )
}
