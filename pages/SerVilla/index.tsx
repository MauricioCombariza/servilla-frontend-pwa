'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

/* ══════════════════════════════════════════
   Ser · villa — Página Nosotros
   Concepto: cada "villa" (barrio/localidad)
   tiene un "ser" (identidad propia).
   Servilla lo conoce y lo conecta al mundo.
══════════════════════════════════════════ */

const VILLAS = [
  { name: 'Usaquén',    color: '#7DC9F0' },
  { name: 'Chapinero',  color: '#F4BE7A' },
  { name: 'Suba',       color: '#A8D8A0' },
  { name: 'Kennedy',    color: '#F4BE7A' },
  { name: 'Engativá',   color: '#D4A0C0' },
  { name: 'Fontibón',   color: '#A0C4D4' },
  { name: 'Bosa',       color: '#F0A080' },
  { name: 'Teusaquillo',color: '#B0D4A0' },
  { name: 'villa',      color: '#FFFFFF' },
];

const LOCALIDADES = [
  { name: 'Usaquén',      num: '01', color: '#7DC9F0',  sub: 'Norte' },
  { name: 'Chapinero',    num: '02', color: '#F4BE7A',  sub: 'Nororiente' },
  { name: 'Santa Fe',     num: '03', color: '#A8D8A0',  sub: 'Centro' },
  { name: 'Suba',         num: '11', color: '#D4A0C0',  sub: 'Noroccidente' },
  { name: 'Engativá',     num: '10', color: '#F0A080',  sub: 'Occidente' },
  { name: 'Kennedy',      num: '08', color: '#A0C4D4',  sub: 'Sur occidente' },
  { name: 'Fontibón',     num: '09', color: '#C8F0A0',  sub: 'Aeropuerto' },
  { name: 'Bosa',         num: '07', color: '#E8C87A',  sub: 'Sur' },
];

export default function SerVilla() {
  const [currentVilla, setCurrentVilla] = useState(8); // start on 'villa'
  const [prevVilla, setPrevVilla] = useState<number | null>(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const cursorRef  = useRef<HTMLDivElement>(null);
  const cursorRRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0); const my = useRef(0);
  const rx = useRef(0); const ry = useRef(0);

  /* ── Villa cycling ── */
  useEffect(() => {
    const timer = setTimeout(() => {
      const id = setInterval(() => {
        setCurrentVilla(prev => {
          setPrevVilla(prev);
          return (prev + 1) % VILLAS.length;
        });
      }, 2200);
      return () => clearInterval(id);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  /* ── Cursor ── */
  useEffect(() => {
    const move = (e: MouseEvent) => { mx.current = e.clientX; my.current = e.clientY; };
    document.addEventListener('mousemove', move);
    let af: number;
    const tick = () => {
      if (cursorRef.current)  { cursorRef.current.style.left = mx.current + 'px'; cursorRef.current.style.top = my.current + 'px'; }
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (cursorRRef.current) { cursorRRef.current.style.left = rx.current + 'px'; cursorRRef.current.style.top = ry.current + 'px'; }
      af = requestAnimationFrame(tick);
    };
    af = requestAnimationFrame(tick);
    return () => { document.removeEventListener('mousemove', move); cancelAnimationFrame(af); };
  }, []);

  /* ── Nav scroll ── */
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Scroll reveal ── */
  useEffect(() => {
    const els = document.querySelectorAll('.r');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('on'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const villaCurrent = VILLAS[currentVilla];

  return (
    <>
      <Head>
        <title>Ser·villa — El ser de cada barrio · Servilla</title>
        <meta name="description" content="Conoce Servilla: más de 50 años honrando la identidad de cada barrio de Bogotá. Distribución local con alcance global." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,300;0,6..96,400;0,6..96,600;1,6..96,300;1,6..96,400;1,6..96,600;1,6..96,700&family=Barlow+Condensed:wght@300;400;700;800;900&family=IBM+Plex+Mono:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      {/* Custom cursor */}
      <div ref={cursorRef}  className="sv-cur"  />
      <div ref={cursorRRef} className="sv-cur-r" />

      {/* ══ NAV ══ */}
      <nav className={`sv-nav ${navScrolled ? 'scrolled' : 'hero-zone'}`}>
        <Link href="/" className="sv-logo">
          <span className="sv-logo-ser">Ser</span>
          <span className="sv-logo-dot">·</span>
          <span className="sv-logo-villa">villa</span>
        </Link>
        <ul className="sv-nav-links">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/SerVilla" className="active">Nosotros</Link></li>
          <li><Link href="/Servicio">Servicios</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/Contactenos">Contacto</Link></li>
        </ul>
        <Link href="/Contactenos" className="sv-nav-btn">Solicitar servicio</Link>
      </nav>

      {/* ══ 1. HERO ══ */}
      <section className="sv-hero">
        <div className="sv-hero-texture" />
        <div className="sv-hero-watermark">villa</div>

        <div className="sv-hero-main">
          <div className="sv-hero-kicker">
            <div className="sv-kicker-bar" />
            <span className="sv-kicker-txt">El ser de cada barrio · Distribución local · Desde 1973</span>
          </div>

          <div className="sv-hero-brand">
            <div className="sv-brand-ser-line">
              <span className="sv-brand-ser">Ser</span>
              <span className="sv-brand-sep">·</span>
            </div>
            <div className="sv-villa-wrap">
              {VILLAS.map((v, i) => (
                <span
                  key={v.name}
                  className={`sv-villa-item ${i === currentVilla ? 'active' : i === prevVilla ? 'prev' : ''}`}
                  style={{ color: v.color }}
                >
                  {v.name}
                </span>
              ))}
            </div>
          </div>

          <p className="sv-hero-tagline">
            Cada barrio de Bogotá tiene una identidad, una historia, un ritmo.{' '}
            <strong>Nosotros la conocemos. Nosotros la honramos.</strong>{' '}
            Y desde ahí conectamos lo local con el mundo.
          </p>
        </div>

        <div className="sv-hero-bottom">
          {[
            { label: 'Fundada',     value: '1973' },
            { label: 'Localidades', value: '28 villas' },
            { label: 'Mensajeros',  value: '+200 activos' },
          ].map(s => (
            <div key={s.label} className="sv-hb-cell">
              <div className="sv-hb-label">{s.label}</div>
              <div className="sv-hb-value">{s.value}</div>
            </div>
          ))}
          <Link href="#concepto" className="sv-hb-cell sv-hb-cta">
            <span>Conoce el concepto</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ══ 2. CONCEPTO ══ */}
      <section className="sv-concept" id="concepto">
        <div className="sv-concept-bg">SER</div>
        <div className="sv-concept-inner">
          <div className="sv-concept-left r">
            <div className="sv-ck">
              <div className="sv-ck-bar" />
              <span className="sv-ck-txt">El nombre lo dice todo</span>
            </div>
            <div className="sv-cword">
              <span className="sv-cword-ser">Ser</span>
              <div className="sv-cword-rule" />
              <span className="sv-cword-villa">villa</span>
            </div>
            <div className="sv-meanings">
              {[
                { w: 'Ser',      d: 'Esencia. Identidad. El alma\nde quien habita un lugar.' },
                { w: 'Villa',    d: 'Barrio. Localidad. El territorio\nque le da forma a una comunidad.' },
                { w: 'Ser·villa',d: 'La empresa que conoce el ser\nde cada villa y lo pone en movimiento.' },
              ].map(m => (
                <div key={m.w} className="sv-meaning-item">
                  <span className="sv-meaning-word">{m.w}</span>
                  <span className="sv-meaning-def">{m.d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sv-concept-right r">
            <p className="sv-concept-prose">
              No somos un operador logístico más. Somos la empresa que lleva{' '}
              <em>más de cincuenta años</em> aprendiendo que{' '}
              <u>cada barrio de Bogotá es un mundo</u> con su propia identidad, su propio tiempo, sus propias reglas.
            </p>
            <p className="sv-concept-prose" style={{ marginTop: '1.5rem' }}>
              Ese conocimiento —{' '}
              <strong>ese ser profundo de cada villa</strong> — es lo que hace posible que las marcas más grandes del mundo lleguen al último rincón de la ciudad con la{' '}
              <em>velocidad y precisión</em> que sus clientes merecen.
            </p>
            <p className="sv-concept-detail">
              Cuando una empresa global elige a Servilla, no está eligiendo solo un mensajero. Está eligiendo{' '}
              <strong>décadas de inteligencia de calle</strong>, una red humana enraizada en cada localidad, y la tecnología para escalar ese conocimiento sin perder lo humano.
            </p>
          </div>
        </div>
      </section>

      {/* ══ 3. LAS VILLAS ══ */}
      <section className="sv-villas">
        <div className="sv-villas-grid-bg" />
        <div className="sv-villas-inner">
          <div className="sv-villas-header">
            <div className="r">
              <div className="sv-vh-kicker">→ Cada villa importa</div>
              <h2 className="sv-vh-title">
                <span className="sv-vh-dim">Ser cada</span>
                Barrio.
              </h2>
            </div>
            <p className="sv-vh-right r">
              Nuestros mensajeros no son anónimos. Cada uno{' '}
              <strong>pertenece a su zona</strong>, conoce sus calles, sus porteros, sus horarios. Eso no se programa. Eso se vive.
            </p>
          </div>

          <div className="sv-villa-cards">
            {LOCALIDADES.map((loc, i) => (
              <div
                key={loc.name}
                className="sv-villa-card r"
                style={{ ['--vc' as string]: loc.color, animationDelay: `${i * 0.07}s` }}
              >
                <span className="sv-vc-ser">Ser</span>
                <div className="sv-vc-name">{loc.name}</div>
                <span className="sv-vc-num">Localidad {loc.num} · {loc.sub}</span>
                <div className="sv-vc-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. HISTORIA ══ */}
      <section className="sv-historia" id="historia">
        <div className="sv-historia-left r">
          <div className="sv-hl-top">El ser de</div>
          <h2 className="sv-hl-main">Ser·<span>villa</span><br />50 años.</h2>
        </div>
        <div className="sv-historia-right r">
          <p className="sv-historia-quote">
            Cinco décadas aprendiendo que{' '}
            <em>la confianza no se escala con tecnología</em>, se construye calle a calle, entrega a entrega. La tecnología vino después. La confianza la llevamos de antes.
          </p>
          <span className="sv-historia-attr">— Historia de Servilla · 1973 al presente</span>
        </div>

        <div className="sv-timeline">
          {[
            { year:'1973', title:'Los primeros sobres',  body:'Nacemos en el centro de Bogotá como mensajería corporativa. Documentos, facturas, correspondencia. La confianza como única propuesta.', tag:'Mensajería tradicional', now:false },
            { year:'2000', title:'Bogotá entera',        body:'Expandimos cobertura a todas las localidades. De 5 mensajeros a más de 50. Cada zona con su equipo propio, su conocimiento propio.', tag:'Escala urbana', now:false },
            { year:'2020', title:'El ser digital',       body:'Construimos plataforma propia, app de mensajeros, trazabilidad en tiempo real. El alma de barrio con cuerpo digital.', tag:'Plataforma propia', now:false },
            { year:'Hoy',  title:'Glocal de verdad',     body:'Marcas globales. Entregas locales. El ser de cada villa como ventaja competitiva para el mundo.', tag:'En expansión', now:true },
          ].map(t => (
            <div key={t.year} className={`sv-tl-item r ${t.now ? 'now' : ''}`}>
              <div className="sv-tl-year">{t.year}</div>
              <h3 className="sv-tl-title">{t.title}</h3>
              <p className="sv-tl-body">{t.body}</p>
              <span className="sv-tl-tag">{t.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 5. STATEMENT ══ */}
      <section className="sv-statement">
        <div className="sv-statement-inner">
          <div className="sv-stmt-kicker r">La promesa glocal</div>
          <p className="sv-stmt-text r">
            "Cuando una marca global quiere llegar a Colombia, no necesita{' '}
            <em>entender cada barrio.</em> Solo necesita a alguien que ya lo{' '}
            <strong>vive, lo conoce y lo entrega.</strong>"
          </p>
          <div className="sv-stmt-split">
            <div className="sv-ss-item r">
              <div className="sv-ss-num">01</div>
              <h3 className="sv-ss-title">Tu fortaleza local es nuestra especialidad</h3>
              <p className="sv-ss-body">Llevamos 50 años aprendiendo Bogotá. Cada calle que recorre nuestro mensajero es una ventaja competitiva para <strong>tu negocio</strong>. Eso no se contrata en ningún otro lado.</p>
            </div>
            <div className="sv-ss-item r">
              <div className="sv-ss-num">02</div>
              <h3 className="sv-ss-title">La puerta de tu marca al mundo local</h3>
              <p className="sv-ss-body">Tus clientes colombianos merecen la misma experiencia que los clientes en cualquier ciudad del mundo. <strong>Servilla lo hace posible</strong> con velocidad, trazabilidad y compromiso real.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6. CTA ══ */}
      <section className="sv-cta">
        <div className="sv-cta-glow" />
        <div className="sv-cta-inner r">
          <div className="sv-cta-logo">
            <span className="sv-cta-ser">Ser</span>
            <span className="sv-cta-dot">·</span>
            <span className="sv-cta-villa">villa</span>
          </div>
          <p className="sv-cta-phrase">
            El ser de cada villa. <em>La entrega que el mundo necesita.</em><br />
            Haz parte de la red que conecta lo local con lo global.
          </p>
          <div className="sv-cta-actions">
            <Link href="/Contactenos" className="sv-btn-solid">
              Solicitar información
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a href="https://wa.me/5716262314" target="_blank" rel="noreferrer" className="sv-btn-ghost">
              WhatsApp directo →
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* ══════════════════════════════════
           TOKENS
        ══════════════════════════════════ */
        :root {
          --sv-ink:    #0C1A0E;
          --sv-deep:   #0D2E1A;
          --sv-forest: #1A4D2E;
          --sv-brand:  #1976D2;
          --sv-cream:  #FAF6EF;
          --sv-parch:  #F0E9D5;
          --sv-warm:   #E8DFC8;
          --sv-terra:  #B5552A;
          --sv-muted:  #7A8070;
          --sv-border-d: rgba(255,255,255,.1);
          --sv-border-l: rgba(12,26,14,.08);
        }

        /* ── Cursor ── */
        .sv-cur {
          position:fixed; width:8px; height:8px;
          background:var(--sv-terra); border-radius:50%;
          pointer-events:none; z-index:9999;
          transform:translate(-50%,-50%);
          transition:width .2s, height .2s;
        }
        .sv-cur-r {
          position:fixed; width:30px; height:30px;
          border:1px solid rgba(181,85,42,.35); border-radius:50%;
          pointer-events:none; z-index:9998;
          transform:translate(-50%,-50%);
          transition:all .22s cubic-bezier(.17,.67,.45,1.2);
        }

        /* ── Scroll reveal ── */
        .r { opacity:0; transform:translateY(24px); transition:opacity .65s ease, transform .65s ease; }
        .r.on { opacity:1; transform:none; }

        /* ══ NAV ══ */
        .sv-nav {
          position:fixed; top:0; left:0; right:0; z-index:300;
          display:flex; align-items:center; justify-content:space-between;
          padding:1.2rem 3rem;
          transition:background .4s, border-color .4s;
          border-bottom:1px solid transparent;
        }
        .sv-nav.hero-zone { background:rgba(13,46,26,0); }
        .sv-nav.scrolled  { background:rgba(250,246,239,.96); border-color:var(--sv-border-l); backdrop-filter:blur(16px); }

        .sv-logo { text-decoration:none; display:inline-flex; align-items:baseline; gap:0; cursor:none; }
        .sv-logo-ser   { font-family:'Bodoni Moda',serif; font-style:italic; font-weight:300; font-size:1.55rem; transition:color .3s; }
        .sv-logo-dot   { font-family:'Bodoni Moda',serif; font-size:1.1rem; font-weight:300; margin:0 .05em; color:var(--sv-terra); }
        .sv-logo-villa { font-family:'Barlow Condensed',sans-serif; font-weight:800; font-size:1.55rem; letter-spacing:.06em; text-transform:uppercase; transition:color .3s; }
        .hero-zone .sv-logo-ser   { color:rgba(250,246,239,.6); }
        .hero-zone .sv-logo-villa { color:white; }
        .scrolled  .sv-logo-ser   { color:var(--sv-muted); }
        .scrolled  .sv-logo-villa { color:var(--sv-ink); }

        .sv-nav-links { display:flex; gap:2rem; list-style:none; }
        .sv-nav-links a { font-family:'IBM Plex Mono',monospace; font-size:.62rem; letter-spacing:.2em; text-transform:uppercase; text-decoration:none; transition:color .2s; cursor:none; }
        .hero-zone .sv-nav-links a { color:rgba(255,255,255,.4); }
        .hero-zone .sv-nav-links a:hover, .hero-zone .sv-nav-links .active { color:white; }
        .scrolled  .sv-nav-links a { color:var(--sv-muted); }
        .scrolled  .sv-nav-links a:hover, .scrolled .sv-nav-links .active { color:var(--sv-terra); }

        .sv-nav-btn { font-family:'IBM Plex Mono',monospace; font-size:.62rem; letter-spacing:.15em; text-transform:uppercase; padding:.55rem 1.3rem; border:none; cursor:none; background:var(--sv-brand); color:white; text-decoration:none; transition:background .2s; }
        .sv-nav-btn:hover { background:#0D47A1; }

        /* ══ HERO ══ */
        .sv-hero { min-height:100vh; background:var(--sv-deep); display:flex; flex-direction:column; position:relative; overflow:hidden; }
        .sv-hero-texture { position:absolute; inset:0; opacity:.04; background-image:repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(255,255,255,1) 20px,rgba(255,255,255,1) 21px); }
        .sv-hero-watermark { position:absolute; bottom:-2rem; right:-1rem; font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:clamp(10rem,22vw,24rem); text-transform:uppercase; color:rgba(255,255,255,.025); line-height:1; pointer-events:none; user-select:none; }

        .sv-hero-main { flex:1; display:flex; flex-direction:column; justify-content:center; padding:9rem 3rem 3rem; position:relative; z-index:2; }

        .sv-hero-kicker { display:flex; align-items:center; gap:.75rem; margin-bottom:3.5rem; opacity:0; animation:sv-rise .5s ease forwards .3s; }
        .sv-kicker-bar  { width:32px; height:1px; background:var(--sv-terra); }
        .sv-kicker-txt  { font-family:'IBM Plex Mono',monospace; font-size:.6rem; letter-spacing:.25em; text-transform:uppercase; color:rgba(255,255,255,.35); }

        .sv-hero-brand { margin-bottom:3rem; opacity:0; animation:sv-rise .7s cubic-bezier(.22,1,.36,1) forwards .5s; }
        .sv-brand-ser-line { display:flex; align-items:baseline; gap:.3em; line-height:.9; }
        .sv-brand-ser { font-family:'Bodoni Moda',serif; font-style:italic; font-weight:300; font-size:clamp(4rem,10vw,11rem); color:rgba(250,246,239,.5); letter-spacing:-.01em; }
        .sv-brand-sep { font-family:'Bodoni Moda',serif; font-size:clamp(3rem,7vw,7rem); color:var(--sv-terra); font-weight:300; align-self:flex-start; margin-top:.15em; }

        .sv-villa-wrap { position:relative; height:clamp(4.5rem,11vw,12rem); overflow:hidden; }
        .sv-villa-item { position:absolute; top:0; left:0; font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:clamp(4.5rem,11vw,12rem); text-transform:uppercase; letter-spacing:-.01em; line-height:.88; white-space:nowrap; transform:translateY(110%); transition:transform .7s cubic-bezier(.22,1,.36,1), opacity .5s; opacity:0; }
        .sv-villa-item.prev   { transform:translateY(-110%); opacity:0; }
        .sv-villa-item.active { transform:translateY(0);     opacity:1; }

        .sv-hero-tagline { font-family:'Bodoni Moda',serif; font-style:italic; font-weight:300; font-size:clamp(1.05rem,1.6vw,1.35rem); color:rgba(255,255,255,.45); line-height:1.7; max-width:52ch; opacity:0; animation:sv-rise .6s ease forwards .75s; }
        .sv-hero-tagline strong { font-style:normal; font-weight:400; color:rgba(255,255,255,.75); }

        .sv-hero-bottom { display:grid; grid-template-columns:1fr 1fr 1fr auto; border-top:1px solid var(--sv-border-d); position:relative; z-index:2; opacity:0; animation:sv-rise .5s ease forwards 1.1s; }
        .sv-hb-cell { padding:1.6rem 2.5rem; border-right:1px solid var(--sv-border-d); }
        .sv-hb-label { font-family:'IBM Plex Mono',monospace; font-size:.56rem; letter-spacing:.2em; text-transform:uppercase; color:rgba(255,255,255,.25); margin-bottom:.35rem; }
        .sv-hb-value { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:1.3rem; color:rgba(255,255,255,.7); letter-spacing:.04em; text-transform:uppercase; }
        .sv-hb-cta   { display:flex; align-items:center; justify-content:center; gap:1rem; cursor:none; text-decoration:none; transition:background .2s; color:var(--sv-terra); font-family:'IBM Plex Mono',monospace; font-size:.6rem; letter-spacing:.18em; text-transform:uppercase; }
        .sv-hb-cta:hover { background:rgba(255,255,255,.05); }

        @keyframes sv-rise { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }

        /* ══ CONCEPT ══ */
        .sv-concept { background:var(--sv-cream); padding:8rem 3rem; position:relative; overflow:hidden; }
        .sv-concept-bg { position:absolute; right:0; bottom:0; font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:28vw; line-height:.85; text-transform:uppercase; letter-spacing:-.03em; color:rgba(12,26,14,.025); pointer-events:none; user-select:none; }
        .sv-concept-inner { position:relative; z-index:1; display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:start; }
        .sv-ck { display:flex; align-items:center; gap:.8rem; margin-bottom:2rem; }
        .sv-ck-bar { width:32px; height:1px; background:var(--sv-terra); }
        .sv-ck-txt { font-family:'IBM Plex Mono',monospace; font-size:.6rem; letter-spacing:.25em; text-transform:uppercase; color:var(--sv-terra); }
        .sv-cword { display:flex; flex-direction:column; line-height:.88; margin-bottom:2rem; }
        .sv-cword-ser   { font-family:'Bodoni Moda',serif; font-style:italic; font-weight:300; font-size:clamp(3.5rem,7vw,7.5rem); color:var(--sv-muted); letter-spacing:-.01em; }
        .sv-cword-rule  { width:100%; height:1px; background:linear-gradient(90deg,var(--sv-terra),transparent); margin:.4em 0; }
        .sv-cword-villa { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:clamp(3.5rem,7vw,7.5rem); text-transform:uppercase; letter-spacing:-.01em; color:var(--sv-ink); }
        .sv-meanings { display:flex; flex-direction:column; gap:1.2rem; }
        .sv-meaning-item { display:flex; align-items:baseline; gap:1rem; }
        .sv-meaning-word { font-family:'Bodoni Moda',serif; font-style:italic; font-weight:400; font-size:1.1rem; color:var(--sv-terra); min-width:80px; }
        .sv-meaning-def  { font-family:'IBM Plex Mono',monospace; font-size:.68rem; letter-spacing:.08em; color:var(--sv-muted); line-height:1.6; white-space:pre-line; }
        .sv-concept-prose  { font-family:'Bodoni Moda',serif; font-weight:300; font-size:clamp(1.3rem,2.2vw,2rem); line-height:1.5; color:var(--sv-ink); letter-spacing:-.01em; }
        .sv-concept-prose em { font-style:italic; color:var(--sv-forest); }
        .sv-concept-prose strong { font-weight:600; }
        .sv-concept-prose u { border-bottom:2px solid rgba(181,85,42,.3); text-decoration:none; }
        .sv-concept-detail { margin-top:2rem; padding-top:2rem; border-top:1px solid var(--sv-border-l); font-size:.88rem; color:var(--sv-muted); line-height:1.8; }
        .sv-concept-detail strong { color:var(--sv-ink); font-weight:500; }

        /* ══ VILLAS ══ */
        .sv-villas { background:var(--sv-ink); padding:7rem 3rem; position:relative; overflow:hidden; }
        .sv-villas-grid-bg { position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px); background-size:72px 72px; }
        .sv-villas-inner { position:relative; z-index:1; }
        .sv-villas-header { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:4rem; }
        .sv-vh-kicker { font-family:'IBM Plex Mono',monospace; font-size:.6rem; letter-spacing:.25em; text-transform:uppercase; color:var(--sv-terra); margin-bottom:.8rem; }
        .sv-vh-title  { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:clamp(2.5rem,4.5vw,5rem); text-transform:uppercase; line-height:.9; color:white; letter-spacing:-.01em; }
        .sv-vh-dim    { font-family:'Bodoni Moda',serif; font-style:italic; font-weight:300; font-size:clamp(1.2rem,2vw,2rem); color:rgba(255,255,255,.3); display:block; margin-bottom:.3rem; text-transform:none; }
        .sv-vh-right  { max-width:28ch; text-align:right; font-size:.87rem; color:rgba(255,255,255,.35); line-height:1.8; }
        .sv-vh-right strong { color:rgba(255,255,255,.6); font-weight:400; }

        .sv-villa-cards { display:grid; grid-template-columns:repeat(4,1fr); gap:1.5px; background:rgba(255,255,255,.06); }
        .sv-villa-card  { background:rgba(12,26,14,.8); padding:2.5rem 2rem; position:relative; overflow:hidden; cursor:none; transition:background .35s; }
        .sv-villa-card::after { content:''; position:absolute; inset:0; background:var(--vc); opacity:0; transition:opacity .35s; }
        .sv-villa-card:hover::after { opacity:.12; }
        .sv-villa-card:hover .sv-vc-ser  { color:rgba(255,255,255,.5); }
        .sv-villa-card:hover .sv-vc-name { color:white; }
        .sv-villa-card:hover .sv-vc-dot  { opacity:1; transform:scale(1.4); }
        .sv-vc-ser  { font-family:'Bodoni Moda',serif; font-style:italic; font-weight:300; font-size:.95rem; color:rgba(255,255,255,.2); display:block; margin-bottom:.2rem; transition:color .35s; }
        .sv-vc-name { font-family:'Barlow Condensed',sans-serif; font-weight:800; font-size:1.45rem; text-transform:uppercase; letter-spacing:.03em; color:rgba(255,255,255,.45); transition:color .35s; }
        .sv-vc-num  { font-family:'IBM Plex Mono',monospace; font-size:.55rem; letter-spacing:.15em; color:rgba(255,255,255,.15); margin-top:.6rem; display:block; }
        .sv-vc-dot  { position:absolute; bottom:1.5rem; right:1.5rem; width:6px; height:6px; border-radius:50%; background:var(--vc); opacity:.4; transition:opacity .35s, transform .35s; }

        /* ══ HISTORIA ══ */
        .sv-historia { background:var(--sv-cream); padding:8rem 3rem; display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:start; }
        .sv-hl-top  { font-family:'Bodoni Moda',serif; font-style:italic; font-weight:300; font-size:clamp(1.5rem,2.5vw,2.5rem); color:var(--sv-muted); }
        .sv-hl-main { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:clamp(4rem,7vw,8rem); text-transform:uppercase; line-height:.88; color:var(--sv-ink); letter-spacing:-.02em; }
        .sv-hl-main span { color:var(--sv-terra); }
        .sv-historia-quote { padding-top:1.5rem; }
        .sv-historia-quote p { font-family:'Bodoni Moda',serif; font-style:italic; font-weight:300; font-size:clamp(1.1rem,1.8vw,1.6rem); line-height:1.55; color:var(--sv-ink); max-width:44ch; margin-bottom:1.5rem; }
        .sv-historia-quote p em { color:var(--sv-forest); }
        .sv-historia-attr { font-family:'IBM Plex Mono',monospace; font-size:.6rem; letter-spacing:.18em; text-transform:uppercase; color:var(--sv-muted); }

        .sv-timeline { grid-column:1/-1; display:grid; grid-template-columns:repeat(4,1fr); gap:0; position:relative; margin-top:4rem; }
        .sv-timeline::before { content:''; position:absolute; top:1.2rem; left:0; right:0; height:1px; background:linear-gradient(90deg,var(--sv-terra),rgba(181,85,42,.1) 70%,transparent); }
        .sv-tl-item { padding-top:3rem; padding-right:2rem; position:relative; }
        .sv-tl-item::before { content:''; position:absolute; top:calc(1.2rem - 4px); left:0; width:9px; height:9px; border-radius:50%; background:var(--sv-parch); border:1px solid rgba(181,85,42,.3); transition:background .3s,border-color .3s,box-shadow .3s; }
        .sv-tl-item:hover::before, .sv-tl-item.now::before { background:var(--sv-terra); border-color:var(--sv-terra); box-shadow:0 0 14px rgba(181,85,42,.5); }
        .sv-tl-year  { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:2.5rem; line-height:1; color:rgba(12,26,14,.12); letter-spacing:-.02em; transition:color .3s; margin-bottom:.6rem; }
        .sv-tl-item:hover .sv-tl-year, .sv-tl-item.now .sv-tl-year { color:var(--sv-terra); }
        .sv-tl-title { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:1rem; text-transform:uppercase; letter-spacing:.05em; color:var(--sv-muted); margin-bottom:.5rem; transition:color .3s; }
        .sv-tl-item:hover .sv-tl-title, .sv-tl-item.now .sv-tl-title { color:var(--sv-ink); }
        .sv-tl-body { font-size:.82rem; color:var(--sv-muted); line-height:1.7; }
        .sv-tl-tag  { display:inline-block; margin-top:.75rem; font-family:'IBM Plex Mono',monospace; font-size:.54rem; letter-spacing:.14em; text-transform:uppercase; color:var(--sv-terra); border-bottom:1px solid rgba(181,85,42,.25); padding-bottom:2px; }

        /* ══ STATEMENT ══ */
        .sv-statement { background:var(--sv-parch); padding:8rem 3rem; }
        .sv-statement-inner { max-width:1100px; margin:0 auto; }
        .sv-stmt-kicker { font-family:'IBM Plex Mono',monospace; font-size:.6rem; letter-spacing:.25em; text-transform:uppercase; color:var(--sv-terra); margin-bottom:3rem; display:flex; align-items:center; gap:.8rem; }
        .sv-stmt-kicker::before { content:''; width:32px; height:1px; background:var(--sv-terra); }
        .sv-stmt-text { font-family:'Bodoni Moda',serif; font-weight:300; font-size:clamp(1.8rem,3.5vw,3.8rem); line-height:1.3; color:var(--sv-ink); letter-spacing:-.01em; }
        .sv-stmt-text em { font-style:italic; color:var(--sv-terra); }
        .sv-stmt-text strong { font-weight:600; font-style:normal; }
        .sv-stmt-split { margin-top:5rem; display:grid; grid-template-columns:1fr 1fr; gap:3rem; padding-top:3rem; border-top:1px solid var(--sv-border-l); }
        .sv-ss-num   { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:3.5rem; color:rgba(12,26,14,.08); line-height:1; margin-bottom:.3rem; letter-spacing:-.02em; }
        .sv-ss-title { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:1.05rem; text-transform:uppercase; letter-spacing:.06em; color:var(--sv-ink); margin-bottom:.5rem; }
        .sv-ss-body  { font-size:.87rem; color:var(--sv-muted); line-height:1.8; }
        .sv-ss-body strong { color:var(--sv-ink); font-weight:500; }

        /* ══ CTA ══ */
        .sv-cta { background:var(--sv-deep); padding:9rem 3rem; position:relative; overflow:hidden; text-align:center; }
        .sv-cta-glow { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:700px; height:700px; background:radial-gradient(circle,rgba(181,85,42,.12) 0%,transparent 65%); pointer-events:none; }
        .sv-cta-inner { position:relative; z-index:1; }
        .sv-cta-logo  { display:flex; justify-content:center; align-items:baseline; gap:.2em; margin-bottom:3rem; }
        .sv-cta-ser   { font-family:'Bodoni Moda',serif; font-style:italic; font-weight:300; font-size:clamp(3rem,7vw,8rem); color:rgba(250,246,239,.3); letter-spacing:-.01em; }
        .sv-cta-dot   { color:var(--sv-terra); font-family:'Bodoni Moda',serif; font-size:clamp(2rem,5vw,5.5rem); font-weight:300; }
        .sv-cta-villa { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:clamp(3rem,7vw,8rem); text-transform:uppercase; letter-spacing:-.01em; color:white; }
        .sv-cta-phrase { font-family:'Bodoni Moda',serif; font-style:italic; font-weight:300; font-size:clamp(1.1rem,1.8vw,1.6rem); color:rgba(255,255,255,.4); line-height:1.55; max-width:44ch; margin:0 auto 3rem; }
        .sv-cta-phrase em { color:rgba(255,255,255,.7); }
        .sv-cta-actions { display:flex; gap:1.5rem; justify-content:center; align-items:center; }
        .sv-btn-solid { font-family:'IBM Plex Mono',monospace; font-size:.65rem; letter-spacing:.15em; text-transform:uppercase; color:var(--sv-ink); background:var(--sv-parch); padding:.9rem 2.5rem; border:none; cursor:none; text-decoration:none; display:inline-flex; align-items:center; gap:.6rem; transition:background .2s,transform .15s; }
        .sv-btn-solid:hover { background:white; transform:translateY(-2px); }
        .sv-btn-ghost { font-family:'IBM Plex Mono',monospace; font-size:.65rem; letter-spacing:.15em; text-transform:uppercase; color:rgba(255,255,255,.4); padding:.9rem 2.5rem; border:1px solid rgba(255,255,255,.12); cursor:none; text-decoration:none; transition:color .2s,border-color .2s; }
        .sv-btn-ghost:hover { color:white; border-color:rgba(255,255,255,.4); }

        /* ══ RESPONSIVE ══ */
        @media(max-width:900px){
          .sv-nav { padding:1rem 1.5rem; }
          .sv-nav-links { display:none; }
          .sv-hero-main { padding:8rem 1.5rem 3rem; }
          .sv-hero-bottom { grid-template-columns:1fr 1fr; }
          .sv-concept-inner { grid-template-columns:1fr; gap:3rem; }
          .sv-villas-header { flex-direction:column; align-items:flex-start; }
          .sv-vh-right { text-align:left; }
          .sv-villa-cards { grid-template-columns:1fr 1fr; }
          .sv-historia { grid-template-columns:1fr; gap:2rem; }
          .sv-timeline { grid-template-columns:1fr 1fr; }
          .sv-stmt-split { grid-template-columns:1fr; }
          .sv-cta-actions { flex-direction:column; }
          .sv-concept, .sv-villas, .sv-historia, .sv-statement, .sv-cta { padding:5rem 1.5rem; }
        }
        @media(max-width:480px){
          .sv-villa-cards { grid-template-columns:1fr; }
          .sv-timeline { grid-template-columns:1fr; }
          .sv-hero-bottom { grid-template-columns:1fr 1fr; }
        }
      `}</style>
    </>
  );
}
