import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Mision() {
  useEffect(() => {
    const els = document.querySelectorAll('.r');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('on'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Misión — Ser·villa · El ser de cada barrio</title>
        <meta name="description" content="Ser el ser de cada villa. Conocer Bogotá tan profundamente que nada se pierda entre el pedido y la puerta." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,300;0,6..96,400;1,6..96,300;1,6..96,400;1,6..96,600&family=Barlow+Condensed:wght@300;700;800;900&family=IBM+Plex+Mono:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <section className="ms-hero">
        <div className="ms-hero-texture" />
        <div className="ms-hero-wm">Misión</div>
        <div className="ms-hero-inner">
          <div className="ms-kicker"><div className="ms-bar" /><span>Quiénes somos · Lo que nos mueve</span></div>
          <h1 className="ms-hero-title">
            <span className="ms-ser">Ser</span><span className="ms-dot">·</span><span className="ms-villa">villa.</span>
          </h1>
          <p className="ms-hero-sub">
            Ser el <em>ser</em> de cada villa.<br />
            Conocer Bogotá tan profundamente que <strong>nada se pierda entre el pedido y la puerta.</strong>
          </p>
        </div>
        <div className="ms-strip">
          <div className="ms-sc"><div className="ms-sl">Fundada</div><div className="ms-sv">1973</div></div>
          <div className="ms-sc"><div className="ms-sl">Localidades</div><div className="ms-sv">28 villas</div></div>
          <div className="ms-sc"><div className="ms-sl">Mensajeros activos</div><div className="ms-sv">+200</div></div>
        </div>
      </section>

      <section className="ms-stmt">
        <div className="ms-stmt-l r">
          <div className="ms-kicker ms-kicker-t"><div className="ms-bar ms-bar-t" /><span>Nuestra misión</span></div>
          <div className="ms-word">
            <span className="ms-w-ser">Ser</span>
            <div className="ms-w-rule" />
            <span className="ms-w-villa">villa</span>
          </div>
        </div>
        <div className="ms-stmt-r r">
          <p className="ms-p">Ser el aliado logístico más <em>cercano y confiable</em> para cada empresa que quiere llegar a Bogotá — y para cada barrio que merece recibir lo que pidió, a tiempo y con respeto.</p>
          <p className="ms-p">Nos comprometemos a <strong>conocer el ser de cada villa</strong>: sus calles, su gente, sus tiempos. Porque la logística no es solo mover paquetes — es honrar la promesa que una marca le hace a su cliente.</p>
          <p className="ms-p">Facilitamos el crecimiento de emprendedores, pequeñas y medianas empresas, y marcas globales, siendo el puente entre el <em>mundo digital y la realidad de cada barrio colombiano.</em></p>
        </div>
      </section>

      <section className="ms-pillars">
        <div className="ms-ph r">
          <div className="ms-kicker ms-kicker-t"><div className="ms-bar ms-bar-t" /><span>Nuestros compromisos</span></div>
          <h2 className="ms-ptitle">Lo que prometemos<br /><span>cada día.</span></h2>
        </div>
        <div className="ms-pgrid">
          {[
            { num:'01', icon:'🏘️', title:'Conocer tu villa',       body:'Cada mensajero de Servilla es un especialista de su zona. Conoce los accesos, los horarios, las particularidades de cada barrio. Ese conocimiento es tu garantía de entrega.', tag:'Inteligencia de calle' },
            { num:'02', icon:'🤝', title:'Ser tu socio estratégico', body:'No somos un proveedor más. Somos el aliado que crece contigo, que adapta su operación a tu volumen, que está disponible cuando más nos necesitas.', tag:'Alianza real' },
            { num:'03', icon:'🌐', title:'Conectar lo local al mundo', body:'Nuestro compromiso glocal: que tu empresa local pueda competir globalmente, y que las marcas globales puedan llegar localmente con la misma calidad.', tag:'Impacto glocal' },
          ].map(p => (
            <div key={p.num} className="ms-pcard r">
              <span className="ms-pnum">{p.num}</span>
              <span className="ms-picon">{p.icon}</span>
              <h3 className="ms-ptcard">{p.title}</h3>
              <p className="ms-pbody">{p.body}</p>
              <span className="ms-ptag">{p.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ms-cta">
        <div className="ms-cta-glow" />
        <div className="ms-cta-inner r">
          <p className="ms-cta-pre">¿Compartimos la misión?</p>
          <div className="ms-cta-logo">
            <span className="ms-cl-ser">Ser</span><span className="ms-cl-dot">·</span><span className="ms-cl-villa">villa</span>
          </div>
          <p className="ms-cta-sub"><em>juntos.</em></p>
          <div className="ms-cta-btns">
            <Link href="/Contactenos" className="ms-btn-s">Hablar con nosotros →</Link>
            <Link href="/SerVilla"    className="ms-btn-g">Conoce nuestra historia →</Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .r{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}.r.on{opacity:1;transform:none}
        .ms-hero{min-height:80vh;background:#0D2E1A;display:flex;flex-direction:column;position:relative;overflow:hidden;padding-top:80px}
        .ms-hero-texture{position:absolute;inset:0;opacity:.04;background-image:repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(255,255,255,1) 20px,rgba(255,255,255,1) 21px)}
        .ms-hero-wm{position:absolute;bottom:-1rem;right:-1rem;font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(8rem,18vw,20rem);text-transform:uppercase;color:rgba(255,255,255,.025);line-height:1;pointer-events:none;user-select:none}
        .ms-hero-inner{flex:1;display:flex;flex-direction:column;justify-content:center;padding:4rem 3rem 2rem;position:relative;z-index:2}
        .ms-kicker{display:flex;align-items:center;gap:.75rem;margin-bottom:2rem;font-family:'IBM Plex Mono',monospace;font-size:.6rem;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.35)}
        .ms-bar{width:32px;height:1px;background:rgba(255,255,255,.3);flex-shrink:0}
        .ms-kicker-t{color:#B5552A !important}
        .ms-bar-t{background:#B5552A !important}
        .ms-hero-title{display:flex;align-items:baseline;gap:.25em;line-height:.9;margin-bottom:2rem}
        .ms-ser{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:clamp(4rem,10vw,10rem);color:rgba(250,246,239,.45)}
        .ms-dot{font-family:'Bodoni Moda',serif;font-size:clamp(3rem,7vw,7rem);color:#B5552A;font-weight:300}
        .ms-villa{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(4rem,10vw,10rem);text-transform:uppercase;letter-spacing:-.01em;color:white}
        .ms-hero-sub{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:clamp(1.1rem,1.8vw,1.4rem);color:rgba(255,255,255,.5);line-height:1.7;max-width:48ch}
        .ms-hero-sub em{color:rgba(255,255,255,.75)}.ms-hero-sub strong{font-style:normal;font-weight:400;color:rgba(255,255,255,.8)}
        .ms-strip{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(255,255,255,.1);z-index:2}
        .ms-sc{padding:1.5rem 3rem;border-right:1px solid rgba(255,255,255,.1)}.ms-sc:last-child{border-right:none}
        .ms-sl{font-family:'IBM Plex Mono',monospace;font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.25);margin-bottom:.3rem}
        .ms-sv{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.4rem;color:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:.04em}
        .ms-stmt{background:#FAF6EF;padding:8rem 3rem;display:grid;grid-template-columns:1fr 1.6fr;gap:6rem;align-items:start}
        .ms-word{display:flex;flex-direction:column;line-height:.88}
        .ms-w-ser{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:clamp(3rem,6vw,6.5rem);color:#7A8070}
        .ms-w-rule{width:100%;height:1px;background:linear-gradient(90deg,#B5552A,transparent);margin:.4em 0}
        .ms-w-villa{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(3rem,6vw,6.5rem);text-transform:uppercase;color:#0C1A0E}
        .ms-p{font-family:'Bodoni Moda',serif;font-weight:300;font-size:clamp(1.1rem,1.7vw,1.5rem);line-height:1.55;color:#0C1A0E;margin-bottom:1.5rem}
        .ms-p em{font-style:italic;color:#1A4D2E}.ms-p strong{font-weight:600;font-style:normal}
        .ms-pillars{background:#0C1A0E;padding:7rem 3rem}
        .ms-ph{margin-bottom:4rem}
        .ms-ptitle{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(2.5rem,4.5vw,5rem);text-transform:uppercase;line-height:.9;color:white;margin-top:.5rem}
        .ms-ptitle span{color:#B5552A}
        .ms-pgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5px;background:rgba(255,255,255,.06)}
        .ms-pcard{background:rgba(12,26,14,.8);padding:2.5rem;position:relative;transition:background .3s}
        .ms-pcard::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:#B5552A;transform:scaleX(0);transition:transform .4s cubic-bezier(.22,1,.36,1)}
        .ms-pcard:hover{background:rgba(12,26,14,.95)}.ms-pcard:hover::before{transform:scaleX(1)}
        .ms-pnum{font-family:'IBM Plex Mono',monospace;font-size:.55rem;letter-spacing:.2em;color:rgba(255,255,255,.2);display:block;margin-bottom:1.5rem}
        .ms-picon{font-size:1.6rem;display:block;margin-bottom:1rem}
        .ms-ptcard{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.3rem;text-transform:uppercase;letter-spacing:.04em;color:white;margin-bottom:.6rem}
        .ms-pbody{font-size:.84rem;color:rgba(255,255,255,.45);line-height:1.8}
        .ms-ptag{display:inline-block;margin-top:1.2rem;font-family:'IBM Plex Mono',monospace;font-size:.54rem;letter-spacing:.14em;text-transform:uppercase;color:#B5552A;border-bottom:1px solid rgba(181,85,42,.3);padding-bottom:2px}
        .ms-cta{background:#0D2E1A;padding:8rem 3rem;text-align:center;position:relative;overflow:hidden}
        .ms-cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:600px;background:radial-gradient(circle,rgba(181,85,42,.12) 0%,transparent 65%);pointer-events:none}
        .ms-cta-inner{position:relative;z-index:1}
        .ms-cta-pre{font-family:'IBM Plex Mono',monospace;font-size:.62rem;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:2rem}
        .ms-cta-logo{display:flex;justify-content:center;align-items:baseline;gap:.2em;margin-bottom:.5rem}
        .ms-cl-ser{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:clamp(3rem,6vw,7rem);color:rgba(255,255,255,.3)}
        .ms-cl-dot{color:#B5552A;font-family:'Bodoni Moda',serif;font-size:clamp(2rem,4vw,4.5rem);font-weight:300}
        .ms-cl-villa{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(3rem,6vw,7rem);text-transform:uppercase;color:white}
        .ms-cta-sub{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:clamp(2rem,4vw,4.5rem);color:rgba(255,255,255,.4);margin-bottom:3rem}
        .ms-cta-btns{display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap}
        .ms-btn-s{font-family:'IBM Plex Mono',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:#0C1A0E;background:#F0E9D5;padding:.9rem 2.5rem;text-decoration:none;transition:background .2s,transform .15s;display:inline-block}
        .ms-btn-s:hover{background:white;transform:translateY(-2px)}
        .ms-btn-g{font-family:'IBM Plex Mono',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.4);padding:.9rem 2.5rem;border:1px solid rgba(255,255,255,.12);text-decoration:none;transition:color .2s,border-color .2s;display:inline-block}
        .ms-btn-g:hover{color:white;border-color:rgba(255,255,255,.4)}
        @media(max-width:900px){
          .ms-hero-inner{padding:3rem 1.5rem 2rem}.ms-strip{grid-template-columns:1fr 1fr}
          .ms-stmt{grid-template-columns:1fr;gap:3rem;padding:5rem 1.5rem}
          .ms-pillars,.ms-cta{padding:5rem 1.5rem}.ms-pgrid{grid-template-columns:1fr}
          .ms-cta-btns{flex-direction:column;align-items:center}
        }
      `}</style>
    </>
  );
}
