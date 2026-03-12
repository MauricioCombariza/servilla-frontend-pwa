import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import MapComponent from './MapComponents';
import YearsInMarket from './YearsInMarket';
import { supabase } from '@/supabase';
import { FaTruck, FaWarehouse, FaChartLine, FaWhatsapp, FaCog, FaGlobe, FaTools, FaHeadset, FaPlay } from 'react-icons/fa';

/* ══════════════════════════════════════
   Cycling words for the hero
══════════════════════════════════════ */
const CYCLE = [
  { word: 'local',   color: '#A8D8A0' },
  { word: 'veloz',   color: '#7DC9F0' },
  { word: 'seguro',  color: '#F4BE7A' },
  { word: 'glocal',  color: '#D4A0C0' },
  { word: 'villa',   color: '#FFFFFF' },
];

export default function Home() {
  /* ── Villa cycling ── */
  const [current, setCurrent] = useState(4);
  const [prev, setPrev]       = useState<number | null>(null);

  useEffect(() => {
    const id = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrent(c => { setPrev(c); return (c + 1) % CYCLE.length; });
      }, 2000);
      return () => clearInterval(interval);
    }, 1800);
    return () => clearTimeout(id);
  }, []);

  /* ── Scroll reveal ── */
  useEffect(() => {
    const els = document.querySelectorAll('.rh');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { (e.target as HTMLElement).classList.add('on'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* ── Contact form ── */
  const [name,       setName]       = useState('');
  const [email,      setEmail]      = useState('');
  const [comentario, setComentario] = useState('');
  const [formError,  setFormError]  = useState<string | null>(null);
  const [formOk,     setFormOk]     = useState(false);
  const [loading,    setLoading]    = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    if (!name || !email || !comentario) { setFormError('Por favor, completa todos los campos.'); return; }
    setLoading(true);
    const { error } = await supabase.from('comentarios').insert([{ name, email, comentario }]);
    setLoading(false);
    if (error) { setFormError('Error al enviar. Inténtalo nuevamente.'); }
    else { setFormOk(true); setName(''); setEmail(''); setComentario(''); }
  };

  return (
    <>
      <Head>
        <title>Ser·villa — Distribución local. Escala global.</title>
        <meta name="description" content="Servilla: más de 50 años distribuyendo en Bogotá. La red logística local que conecta marcas globales con cada barrio de Colombia." />
        <link rel="canonical" href="https://www.servilla.com.co" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,300;0,6..96,400;1,6..96,300;1,6..96,400&family=Barlow+Condensed:wght@300;700;800;900&family=IBM+Plex+Mono:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      {/* ══ 1. HERO ══ */}
      <section className="hm-hero" id="inicio">
        <div className="hm-texture" />
        <div className="hm-wm">Ser</div>

        <div className="hm-hero-inner">
          <div className="hm-kicker"><div className="hm-bar" /><span>Distribución local · Escala global · Desde 1973</span></div>

          <h1 className="hm-title">
            <div className="hm-ser-line">
              <span className="hm-ser">Ser</span>
              <span className="hm-dot">·</span>
            </div>
            <div className="hm-cycle-wrap">
              {CYCLE.map((c, i) => (
                <span
                  key={c.word}
                  className={`hm-cycle-item ${i === current ? 'active' : i === prev ? 'prev' : ''}`}
                  style={{ color: c.color }}
                >{c.word}</span>
              ))}
            </div>
          </h1>

          <p className="hm-sub">
            La red logística que <em>conoce Bogotá</em> como su propio barrio.<br />
            <strong>Tu paquete, en el destino correcto, hoy.</strong>
          </p>

          <div className="hm-ctas">
            <a href="#contacto" className="hm-btn-p">Solicitar información →</a>
            <Link href="/SerVilla" className="hm-btn-g">¿Quiénes somos? →</Link>
          </div>
        </div>

        <div className="hm-hero-img">
          <Image
            src="https://res.cloudinary.com/combariza/image/upload/c_scale,w_auto/v1720447327/Servilla/dropshipping.jpg"
            alt="Servilla — Centro de distribución"
            width={700} height={500}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
          />
          <div className="hm-img-overlay" />
        </div>

        <div className="hm-hero-strip">
          <div className="hm-hs-cell"><div className="hm-hs-l">Años en el mercado</div><div className="hm-hs-v">+50</div></div>
          <div className="hm-hs-cell"><div className="hm-hs-l">Localidades</div><div className="hm-hs-v">28 villas</div></div>
          <div className="hm-hs-cell"><div className="hm-hs-l">Mensajeros activos</div><div className="hm-hs-v">+200</div></div>
          <div className="hm-hs-cell"><div className="hm-hs-l">Entrega exitosa</div><div className="hm-hs-v">98%</div></div>
        </div>
      </section>

      {/* ══ 2. SERVICIOS ══ */}
      <section className="hm-services" id="servicios">
        <div className="hm-services-inner">
          <div className="hm-sec-header rh">
            <div className="hm-sec-kicker"><div className="hm-bar hm-bar-t" /><span>Nuestros servicios</span></div>
            <h2 className="hm-sec-title">Lo que hace<br /><span>Ser·villa.</span></h2>
          </div>

          <div className="hm-svc-grid">
            <div className="hm-years rh">
              <YearsInMarket />
            </div>
            {[
              { icon: <FaWarehouse />, title: 'Almacenamiento', body: 'Gestión de inventario eficiente y segura. Tu mercancía siempre disponible, siempre ubicada.', tag: 'Inteligente' },
              { icon: <FaTruck />,     title: 'Última milla',   body: 'Entregas same-day en Bogotá. Cada mensajero especialista en su zona, conoce cada portería.', tag: 'Mismo día' },
              { icon: <FaChartLine />, title: 'Analytics',      body: 'Dashboard en tiempo real. Sabe exactamente dónde está cada paquete, cada mensajero, cada ruta.', tag: 'Tiempo real' },
            ].map((s, i) => (
              <div key={s.title} className="hm-svc-card rh" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="hm-svc-icon">{s.icon}</div>
                <h3 className="hm-svc-title">{s.title}</h3>
                <p className="hm-svc-body">{s.body}</p>
                <span className="hm-svc-tag">{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. PROCESO ══ */}
      <section className="hm-proceso" id="proceso">
        <div className="hm-proceso-img">
          <Image
            src="https://res.cloudinary.com/combariza/image/upload/c_crop,h_600,w_1000,x_0,y_50/g_south,c_fill/v1725895370/Servilla/recepcion_ojekui.jpg"
            alt="Proceso de distribución Servilla"
            width={700} height={600}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
          <div className="hm-proc-img-overlay" />
        </div>
        <div className="hm-proceso-right">
          <div className="hm-sec-kicker hm-kicker-l rh"><div className="hm-bar hm-bar-t" /><span>Nuestro proceso</span></div>
          <h2 className="hm-proc-title rh">Del pedido<br />a la <span>puerta.</span></h2>
          <div className="hm-steps">
            {[
              { n:'01', t:'Recepción',         d:'Control de calidad y registro de tu inventario.' },
              { n:'02', t:'Almacenamiento',     d:'Ubicación estratégica para máxima eficiencia de picking.' },
              { n:'03', t:'Gestión en tiempo real', d:'Inventario conectado con tu plataforma.' },
              { n:'04', t:'Procesamiento',      d:'Asignación automática al mensajero de la zona.' },
              { n:'05', t:'Embalaje',           d:'Empaque con tu identidad de marca.' },
              { n:'06', t:'Envío optimizado',   d:'Ruta calculada para máxima velocidad.' },
              { n:'07', t:'Entrega confirmada', d:'Foto, firma y notificación a tu cliente.' },
            ].map((s, i) => (
              <div key={s.n} className="hm-step rh" style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="hm-step-n">{s.n}</span>
                <div className="hm-step-content">
                  <div className="hm-step-t">{s.t}</div>
                  <div className="hm-step-d">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. VENTAJAS ══ */}
      <section className="hm-ventajas" id="ventajas">
        <div className="hm-sec-header hm-vhd rh">
          <div className="hm-sec-kicker"><div className="hm-bar" /><span>Por qué Ser·villa</span></div>
          <h2 className="hm-sec-title hm-sec-title-w">Lo que nos hace<br /><span>imposibles de reemplazar.</span></h2>
        </div>
        <div className="hm-vgrid">
          {[
            { icon: <FaCog />,     title: 'Tecnología propia',      body: 'API lista para conectar con tu plataforma. Shopify, WooCommerce, SAP. Tus pedidos llegan a nosotros en tiempo real, sin intermediarios.' },
            { icon: <FaGlobe />,   title: 'Alcance glocal',         body: 'Marcas de todo el mundo distribuidas en cada rincón de Bogotá. Somos el puente entre el mundo digital y la realidad local.' },
            { icon: <FaTools />,   title: 'Flexible y escalable',   body: 'Empezamos con tu volumen actual y crecemos contigo. Sin contratos mínimos que te ahoguen. Somos tu aliado, no tu restricción.' },
            { icon: <FaHeadset />, title: 'Soporte que conoce tu villa', body: 'Un equipo dedicado que entiende las particularidades de cada zona. No un call center genérico — personas reales que conocen tu operación.' },
          ].map((v, i) => (
            <div key={v.title} className="hm-vcard rh" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="hm-vcard-icon">{v.icon}</div>
              <h3 className="hm-vcard-title">{v.title}</h3>
              <p className="hm-vcard-body">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 5. CONTACTO ══ */}
      <section className="hm-contacto" id="contacto">
        <div className="hm-ct-left">
          <div className="hm-sec-kicker rh"><div className="hm-bar hm-bar-t" /><span>Contáctenos</span></div>
          <h2 className="hm-ct-title rh">Hablemos<br />de tu <span>villa.</span></h2>
          <p className="hm-ct-sub rh">
            Cuéntanos tu operación. En menos de <strong>24 horas</strong> un especialista de Servilla te contacta con una propuesta.
          </p>

          {formOk ? (
            <div className="hm-form-ok rh">
              <span>✓</span>
              <p>¡Mensaje enviado! Te contactaremos pronto.</p>
              <button onClick={() => setFormOk(false)} className="hm-form-reset">Enviar otro →</button>
            </div>
          ) : (
            <form className="hm-form rh" onSubmit={handleSubmit}>
              <div className="hm-field">
                <label className="hm-label">Nombre</label>
                <input className="hm-input" type="text" placeholder="Tu nombre" value={name} onChange={e => setName(e.target.value)} required />
              </div>
              <div className="hm-field">
                <label className="hm-label">Correo electrónico</label>
                <input className="hm-input" type="email" placeholder="tu@empresa.com" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="hm-field">
                <label className="hm-label">Mensaje</label>
                <textarea className="hm-textarea" placeholder="¿Qué necesitas distribuir?" value={comentario} onChange={e => setComentario(e.target.value)} required />
              </div>
              {formError && <p className="hm-form-err">{formError}</p>}
              <button type="submit" className="hm-submit" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar mensaje →'}
              </button>
            </form>
          )}

          <a href="https://wa.me/5716262314?text=Hola%2C%20quisiera%20más%20información" target="_blank" rel="noreferrer" className="hm-wa-inline">
            <span>📱</span> O escríbenos directo: +57 1 626 2314
          </a>
        </div>
        <div className="hm-ct-right rh">
          <MapComponent />
        </div>
      </section>

      {/* ══ FLOATING BUTTONS ══ */}
      <Link href="/Speech"
        className="hm-float-speech"
        aria-label="Ir a Speech"
      >
        <FaPlay />
      </Link>
      <a href="https://wa.me/5716262314?text=Hola%2C%20quisiera%20más%20información"
        className="hm-float-wa"
        target="_blank" rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <style jsx global>{`
        .rh{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}.rh.on{opacity:1;transform:none}

        /* ── HERO ── */
        .hm-hero{min-height:100vh;background:#0D2E1A;position:relative;overflow:hidden;display:grid;grid-template-rows:1fr auto;padding-top:80px}
        .hm-texture{position:absolute;inset:0;opacity:.04;background-image:repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(255,255,255,1) 20px,rgba(255,255,255,1) 21px)}
        .hm-wm{position:absolute;top:50%;left:-2rem;transform:translateY(-50%);font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(12rem,30vw,32rem);text-transform:uppercase;color:rgba(255,255,255,.02);line-height:1;pointer-events:none;user-select:none}
        .hm-hero-inner{position:relative;z-index:5;padding:4rem 3rem 3rem;display:flex;flex-direction:column;justify-content:center;max-width:800px}
        .hm-kicker{display:flex;align-items:center;gap:.75rem;margin-bottom:2.5rem;font-family:'IBM Plex Mono',monospace;font-size:.6rem;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.3)}
        .hm-bar{width:32px;height:1px;background:rgba(255,255,255,.25);flex-shrink:0}
        .hm-bar-t{background:#B5552A !important}
        .hm-title{margin-bottom:2.5rem;line-height:.88}
        .hm-ser-line{display:flex;align-items:baseline;gap:.25em}
        .hm-ser{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:clamp(4rem,9vw,10rem);color:rgba(250,246,239,.45);letter-spacing:-.01em}
        .hm-dot{font-family:'Bodoni Moda',serif;font-size:clamp(3rem,6vw,7rem);color:#B5552A;font-weight:300}
        .hm-cycle-wrap{position:relative;height:clamp(4.5rem,10vw,11rem);overflow:hidden}
        .hm-cycle-item{position:absolute;top:0;left:0;font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(4.5rem,10vw,11rem);text-transform:uppercase;letter-spacing:-.01em;line-height:.88;white-space:nowrap;transform:translateY(110%);transition:transform .7s cubic-bezier(.22,1,.36,1),opacity .5s;opacity:0}
        .hm-cycle-item.prev{transform:translateY(-110%);opacity:0}
        .hm-cycle-item.active{transform:translateY(0);opacity:1}
        .hm-sub{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:clamp(1.05rem,1.6vw,1.35rem);color:rgba(255,255,255,.45);line-height:1.7;max-width:46ch;margin-bottom:2.5rem}
        .hm-sub em{color:rgba(255,255,255,.7)}.hm-sub strong{font-style:normal;font-weight:400;color:rgba(255,255,255,.8)}
        .hm-ctas{display:flex;gap:1.2rem;align-items:center;flex-wrap:wrap}
        .hm-btn-p{font-family:'IBM Plex Mono',monospace;font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;color:#0C1A0E;background:#F0E9D5;padding:.85rem 2rem;text-decoration:none;transition:background .2s,transform .15s;display:inline-block}
        .hm-btn-p:hover{background:white;transform:translateY(-2px)}
        .hm-btn-g{font-family:'IBM Plex Mono',monospace;font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.45);padding:.85rem 2rem;border:1px solid rgba(255,255,255,.15);text-decoration:none;transition:color .2s,border-color .2s;display:inline-block}
        .hm-btn-g:hover{color:white;border-color:rgba(255,255,255,.45)}

        /* Hero image overlay */
        .hm-hero-img{position:absolute;right:0;top:0;bottom:0;width:45%;z-index:1}
        .hm-img-overlay{position:absolute;inset:0;background:linear-gradient(to right,#0D2E1A 0%,rgba(13,46,26,.4) 60%,rgba(13,46,26,.1) 100%)}

        /* Strip */
        .hm-hero-strip{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(255,255,255,.08);position:relative;z-index:5}
        .hm-hs-cell{padding:1.4rem 2rem;border-right:1px solid rgba(255,255,255,.08)}.hm-hs-cell:last-child{border-right:none}
        .hm-hs-l{font-family:'IBM Plex Mono',monospace;font-size:.55rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.22);margin-bottom:.3rem}
        .hm-hs-v{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.3rem;color:rgba(255,255,255,.65);text-transform:uppercase;letter-spacing:.04em}

        /* ── SERVICES ── */
        .hm-services{background:#FAF6EF;padding:7rem 3rem}
        .hm-services-inner{max-width:1200px;margin:0 auto}
        .hm-sec-header{margin-bottom:4rem}
        .hm-sec-kicker{display:flex;align-items:center;gap:.8rem;margin-bottom:1rem;font-family:'IBM Plex Mono',monospace;font-size:.6rem;letter-spacing:.25em;text-transform:uppercase;color:#B5552A}
        .hm-sec-title{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(2.8rem,5vw,5rem);text-transform:uppercase;line-height:.9;color:#0C1A0E}
        .hm-sec-title span{color:#B5552A}
        .hm-sec-title-w{color:white !important}
        .hm-svc-grid{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:1.5px;background:rgba(12,26,14,.08)}
        .hm-years{background:#0C1A0E;padding:2.5rem 2rem;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
        .hm-svc-card{background:#FAF6EF;padding:2.5rem 2rem;position:relative;overflow:hidden;transition:background .3s}
        .hm-svc-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:#B5552A;transform:scaleX(0);transition:transform .4s cubic-bezier(.22,1,.36,1)}
        .hm-svc-card:hover{background:white}.hm-svc-card:hover::before{transform:scaleX(1)}
        .hm-svc-icon{font-size:1.8rem;color:#1A4D2E;margin-bottom:1rem}
        .hm-svc-title{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.3rem;text-transform:uppercase;letter-spacing:.03em;color:#0C1A0E;margin-bottom:.5rem}
        .hm-svc-body{font-size:.84rem;color:#7A8070;line-height:1.75;margin-bottom:1rem}
        .hm-svc-tag{font-family:'IBM Plex Mono',monospace;font-size:.54rem;letter-spacing:.14em;text-transform:uppercase;color:#B5552A;border-bottom:1px solid rgba(181,85,42,.25);padding-bottom:2px}

        /* ── PROCESO ── */
        .hm-proceso{display:grid;grid-template-columns:1fr 1fr;min-height:70vh}
        .hm-proceso-img{position:relative;overflow:hidden}
        .hm-proc-img-overlay{position:absolute;inset:0;background:linear-gradient(to right,transparent 60%,#0C1A0E 100%)}
        .hm-proceso-right{background:#0C1A0E;padding:5rem 4rem;display:flex;flex-direction:column;justify-content:center}
        .hm-kicker-l{margin-bottom:1rem}
        .hm-proc-title{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(2.5rem,4.5vw,5rem);text-transform:uppercase;line-height:.9;color:white;margin-bottom:3rem}
        .hm-proc-title span{color:#B5552A}
        .hm-steps{display:flex;flex-direction:column;gap:0;border-left:1px solid rgba(255,255,255,.08);padding-left:1.5rem}
        .hm-step{display:flex;align-items:baseline;gap:1.2rem;padding:.9rem 0;border-bottom:1px solid rgba(255,255,255,.04);position:relative;transition:all .2s}
        .hm-step::before{content:'';position:absolute;left:-1.5rem;top:50%;width:8px;height:8px;border-radius:50%;background:#0C1A0E;border:1px solid rgba(255,255,255,.2);transform:translate(-4px,-50%);transition:background .3s,border-color .3s}
        .hm-step:hover::before{background:#B5552A;border-color:#B5552A}
        .hm-step:last-child{border-bottom:none}
        .hm-step-n{font-family:'IBM Plex Mono',monospace;font-size:.55rem;letter-spacing:.15em;color:rgba(255,255,255,.2);flex-shrink:0}
        .hm-step-t{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1rem;text-transform:uppercase;letter-spacing:.04em;color:rgba(255,255,255,.7);transition:color .2s}
        .hm-step:hover .hm-step-t{color:white}
        .hm-step-d{font-size:.78rem;color:rgba(255,255,255,.3);line-height:1.5;transition:color .2s}
        .hm-step:hover .hm-step-d{color:rgba(255,255,255,.55)}

        /* ── VENTAJAS ── */
        .hm-ventajas{background:#1A4D2E;padding:7rem 3rem}
        .hm-vhd{margin-bottom:4rem}
        .hm-vgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5px;background:rgba(255,255,255,.08)}
        .hm-vcard{background:rgba(10,30,16,.6);padding:3rem;position:relative;overflow:hidden;transition:background .3s}
        .hm-vcard::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:#B5552A;transform:scaleY(0);transition:transform .4s cubic-bezier(.22,1,.36,1);transform-origin:bottom}
        .hm-vcard:hover{background:rgba(10,30,16,.9)}.hm-vcard:hover::before{transform:scaleY(1)}
        .hm-vcard-icon{font-size:1.6rem;color:rgba(255,255,255,.3);margin-bottom:1rem;transition:color .3s}
        .hm-vcard:hover .hm-vcard-icon{color:#B5552A}
        .hm-vcard-title{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.35rem;text-transform:uppercase;letter-spacing:.03em;color:white;margin-bottom:.6rem}
        .hm-vcard-body{font-size:.85rem;color:rgba(255,255,255,.4);line-height:1.8}

        /* ── CONTACTO ── */
        .hm-contacto{display:grid;grid-template-columns:1fr 1fr;background:#FAF6EF}
        .hm-ct-left{padding:6rem 4rem;display:flex;flex-direction:column;justify-content:flex-start}
        .hm-ct-title{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(2.8rem,4.5vw,5rem);text-transform:uppercase;line-height:.9;color:#0C1A0E;margin:.5rem 0 1rem}
        .hm-ct-title span{color:#B5552A}
        .hm-ct-sub{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:1.1rem;color:#7A8070;line-height:1.7;margin-bottom:2.5rem}
        .hm-ct-sub strong{font-style:normal;font-weight:400;color:#0C1A0E}
        .hm-form{display:flex;flex-direction:column;gap:1.2rem}
        .hm-field{display:flex;flex-direction:column;gap:.4rem}
        .hm-label{font-family:'IBM Plex Mono',monospace;font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;color:#7A8070}
        .hm-input{background:white;border:1px solid rgba(12,26,14,.1);padding:.8rem 1rem;font-family:'Barlow Condensed',sans-serif;font-size:1rem;color:#0C1A0E;outline:none;transition:border-color .2s}
        .hm-input:focus{border-color:#B5552A}
        .hm-textarea{background:white;border:1px solid rgba(12,26,14,.1);padding:.8rem 1rem;font-family:'Barlow Condensed',sans-serif;font-size:1rem;color:#0C1A0E;outline:none;transition:border-color .2s;resize:vertical;min-height:110px;line-height:1.5}
        .hm-textarea:focus{border-color:#B5552A}
        .hm-form-err{font-family:'IBM Plex Mono',monospace;font-size:.62rem;color:#C62828;letter-spacing:.05em}
        .hm-submit{background:#0C1A0E;color:white;border:none;padding:.95rem 2rem;font-family:'IBM Plex Mono',monospace;font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;cursor:pointer;transition:background .2s,transform .15s;margin-top:.5rem}
        .hm-submit:hover:not(:disabled){background:#1A4D2E;transform:translateY(-1px)}
        .hm-submit:disabled{opacity:.5;cursor:not-allowed}
        .hm-form-ok{padding:2rem 0;text-align:center}
        .hm-form-ok span{font-size:2rem;color:#1A4D2E;display:block;margin-bottom:.75rem}
        .hm-form-ok p{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:1.1rem;color:#0C1A0E;margin-bottom:1.5rem}
        .hm-form-reset{font-family:'IBM Plex Mono',monospace;font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;color:#7A8070;background:none;border:1px solid rgba(12,26,14,.15);padding:.65rem 1.5rem;cursor:pointer;transition:color .2s,border-color .2s}
        .hm-form-reset:hover{color:#0C1A0E;border-color:rgba(12,26,14,.4)}
        .hm-wa-inline{display:inline-flex;align-items:center;gap:.6rem;margin-top:1.5rem;font-family:'IBM Plex Mono',monospace;font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:#7A8070;text-decoration:none;transition:color .2s}
        .hm-wa-inline:hover{color:#25D366}
        .hm-ct-right{background:#0C1A0E;display:flex;align-items:stretch;justify-content:stretch;padding:0}
        .hm-ct-right > div{width:100% !important;height:100% !important;min-height:450px}

        /* ── FLOAT BUTTONS ── */
        .hm-float-speech{position:fixed;bottom:1rem;left:1rem;background:#1976D2;color:white;border-radius:50%;width:48px;height:48px;display:flex;align-items:center;justify-content:center;z-index:50;transition:background .2s;font-size:1rem;text-decoration:none}
        .hm-float-speech:hover{background:#0D47A1}
        .hm-float-wa{position:fixed;bottom:1rem;right:1rem;background:#25D366;color:white;border-radius:50%;width:48px;height:48px;display:flex;align-items:center;justify-content:center;z-index:50;transition:background .2s;font-size:1.3rem;text-decoration:none}
        .hm-float-wa:hover{background:#1DA851}

        /* YearsInMarket override */
        .hm-years h3{font-family:'IBM Plex Mono',monospace;font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.3) !important;margin-bottom:.5rem}
        .hm-years p.text-5xl{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:4rem;color:#B5552A !important;line-height:1}
        .hm-years p.mt-4{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:.9rem;color:rgba(255,255,255,.3) !important;margin-top:.75rem}

        /* ── RESPONSIVE ── */
        @media(max-width:900px){
          .hm-hero-inner{padding:3rem 1.5rem}
          .hm-hero-img{display:none}
          .hm-hero-strip{grid-template-columns:1fr 1fr}
          .hm-services,.hm-ventajas{padding:5rem 1.5rem}
          .hm-svc-grid{grid-template-columns:1fr 1fr}
          .hm-proceso{grid-template-columns:1fr}
          .hm-proceso-img{height:280px}
          .hm-proceso-right{padding:3rem 1.5rem}
          .hm-vgrid{grid-template-columns:1fr}
          .hm-contacto{grid-template-columns:1fr}
          .hm-ct-left{padding:4rem 1.5rem}
          .hm-ct-right{min-height:350px}
        }
        @media(max-width:480px){
          .hm-svc-grid{grid-template-columns:1fr}
          .hm-hero-strip{grid-template-columns:1fr 1fr}
        }
      `}</style>
    </>
  );
}
