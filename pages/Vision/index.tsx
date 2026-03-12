import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Vision() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('on'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Visión — Ser·villa · La red glocal de Colombia</title>
        <meta name="description" content="Ser la red de distribución local de referencia en Colombia. Reconocida mundialmente por hacer posible lo glocal." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,300;0,6..96,400;1,6..96,300;1,6..96,600&family=Barlow+Condensed:wght@300;700;800;900&family=IBM+Plex+Mono:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      {/* HERO */}
      <section className="vs-hero">
        <div className="vs-texture" />
        <div className="vs-wm">Visión</div>
        <div className="vs-inner">
          <div className="vs-kicker"><div className="vs-bar" /><span>Hacia dónde vamos</span></div>
          <h1 className="vs-title">
            <span className="vs-outline">Glocal</span><br />
            <span className="vs-ser">de</span>
            <span className="vs-dot"> · </span>
            <span className="vs-bold">verdad.</span>
          </h1>
          <p className="vs-sub">
            Ser la red de distribución local de <em>referencia en Colombia</em>, reconocida mundialmente por hacer posible lo que otros llaman imposible: <strong>llegar a cada villa con excelencia global.</strong>
          </p>
        </div>
        <div className="vs-strip">
          <div className="vs-sc"><div className="vs-sl">Horizonte</div><div className="vs-sv">2030</div></div>
          <div className="vs-sc"><div className="vs-sl">Cobertura meta</div><div className="vs-sv">Colombia entera</div></div>
          <div className="vs-sc"><div className="vs-sl">Posición</div><div className="vs-sv">Referente glocal</div></div>
        </div>
      </section>

      {/* VISIÓN STATEMENT */}
      <section className="vs-stmt">
        <div className="vs-stmt-top rv">
          <div className="vs-kicker vs-kt"><div className="vs-bar vs-bt" /><span>Nuestra visión</span></div>
          <p className="vs-big-quote">
            &ldquo;Que cualquier marca del mundo que quiera estar en Colombia sepa que <em>Servilla es la única respuesta.</em> Y que cualquier colombiano sepa que lo que pidió, <strong>llega.</strong>&rdquo;
          </p>
        </div>
      </section>

      {/* HORIZONTE 2030 */}
      <section className="vs-horizon">
        <div className="vs-hz-left rv">
          <div className="vs-kicker vs-kt"><div className="vs-bar vs-bt" /><span>Horizonte 2030</span></div>
          <h2 className="vs-hz-title">La Ser·villa<br /><span>del futuro.</span></h2>
          <p className="vs-hz-body">
            Aspiramos a ser el aliado logístico de elección para emprendedores, medianas empresas y marcas multinacionales que quieren operar en Colombia con <strong>velocidad, trazabilidad y confianza.</strong>
          </p>
          <p className="vs-hz-body">
            Una red que <em>contribuya al desarrollo económico y social</em> de cada barrio donde operamos — porque cuando Servilla crece, la villa crece.
          </p>
        </div>
        <div className="vs-hz-right">
          {[
            { year:'2025', title:'Plataforma glocal',    body:'Integración con los principales operadores globales. API lista para el mundo. +50 marcas internacionales distribuyendo desde Bogotá.', color:'#B5552A' },
            { year:'2027', title:'Expansión nacional',   body:'Más allá de Bogotá. Medellín, Cali, Barranquilla. La misma inteligencia de villa replicada en las principales ciudades de Colombia.', color:'#1976D2' },
            { year:'2030', title:'Referente continental', body:'El modelo Ser·villa como estándar de distribución local en América Latina. Franquicias, alianzas, impacto real en las comunidades.', color:'#4CAF76' },
          ].map((item, i) => (
            <div key={item.year} className="vs-hz-item rv" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="vs-hzi-year" style={{ color: item.color }}>{item.year}</div>
              <div className="vs-hzi-content">
                <h3 className="vs-hzi-title">{item.title}</h3>
                <p className="vs-hzi-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALORES */}
      <section className="vs-values">
        <div className="vs-val-header rv">
          <div className="vs-kicker vs-kt"><div className="vs-bar vs-bt" /><span>Los valores que nos guían</span></div>
          <h2 className="vs-val-title">El ser que<br /><span>queremos ser.</span></h2>
        </div>
        <div className="vs-val-grid">
          {[
            { letter:'C', name:'Confianza',   body:'50 años de historia construida entrega a entrega. La confianza no se declara, se demuestra.' },
            { letter:'V', name:'Velocidad',   body:'Cada hora cuenta. Diseñamos cada proceso para que el tiempo entre pedido y entrega sea el mínimo posible.' },
            { letter:'T', name:'Territorio',  body:'Bogotá es nuestro hogar. Cada villa tiene un nombre, una historia y un equipo de Servilla que la conoce.' },
            { letter:'I', name:'Innovación',  body:'Tecnología al servicio de las personas. Plataforma propia, app de mensajeros, trazabilidad en tiempo real.' },
          ].map((v, i) => (
            <div key={v.letter} className="vs-vcard rv" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="vs-vcard-bg">{v.letter}</div>
              <h3 className="vs-vcard-title">{v.name}</h3>
              <p className="vs-vcard-body">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="vs-cta">
        <div className="vs-cta-glow" />
        <div className="vs-cta-inner rv">
          <p className="vs-cta-pre">Construye el futuro con nosotros</p>
          <h2 className="vs-cta-title">
            La villa<br /><em>que viene.</em>
          </h2>
          <div className="vs-cta-btns">
            <Link href="/Contactenos" className="vs-btn-s">Ser parte de la red →</Link>
            <Link href="/SerVilla"    className="vs-btn-g">Conoce nuestra historia →</Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .rv{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}.rv.on{opacity:1;transform:none}
        .vs-hero{min-height:80vh;background:#06102A;display:flex;flex-direction:column;position:relative;overflow:hidden;padding-top:80px}
        .vs-texture{position:absolute;inset:0;opacity:.04;background-image:repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(255,255,255,1) 20px,rgba(255,255,255,1) 21px)}
        .vs-wm{position:absolute;bottom:-1rem;right:-1rem;font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(8rem,18vw,20rem);text-transform:uppercase;color:rgba(255,255,255,.02);line-height:1;pointer-events:none;user-select:none}
        .vs-inner{flex:1;display:flex;flex-direction:column;justify-content:center;padding:4rem 3rem 2rem;position:relative;z-index:2}
        .vs-kicker{display:flex;align-items:center;gap:.75rem;margin-bottom:2rem;font-family:'IBM Plex Mono',monospace;font-size:.6rem;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.3)}
        .vs-bar{width:32px;height:1px;background:rgba(255,255,255,.25);flex-shrink:0}
        .vs-kt{color:#64B5F6 !important}.vs-bt{background:#64B5F6 !important}
        .vs-title{line-height:.9;margin-bottom:2rem}
        .vs-outline{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(4.5rem,11vw,12rem);text-transform:uppercase;letter-spacing:-.01em;color:transparent;-webkit-text-stroke:1px rgba(255,255,255,.2);display:block}
        .vs-ser{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:clamp(3rem,7vw,8rem);color:rgba(255,255,255,.4)}
        .vs-dot{color:#64B5F6;font-family:'Bodoni Moda',serif;font-size:clamp(2rem,5vw,5rem);font-weight:300}
        .vs-bold{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(3rem,7vw,8rem);text-transform:uppercase;color:white;letter-spacing:-.01em}
        .vs-sub{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:clamp(1.05rem,1.6vw,1.35rem);color:rgba(255,255,255,.45);line-height:1.7;max-width:50ch}
        .vs-sub em{color:rgba(255,255,255,.7)}.vs-sub strong{font-style:normal;font-weight:400;color:rgba(255,255,255,.8)}
        .vs-strip{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(255,255,255,.08)}
        .vs-sc{padding:1.5rem 3rem;border-right:1px solid rgba(255,255,255,.08)}.vs-sc:last-child{border-right:none}
        .vs-sl{font-family:'IBM Plex Mono',monospace;font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.2);margin-bottom:.3rem}
        .vs-sv{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.3rem;color:rgba(255,255,255,.65);text-transform:uppercase;letter-spacing:.04em}
        .vs-stmt{background:#FAF6EF;padding:7rem 3rem}
        .vs-stmt-top{max-width:900px;margin:0 auto;text-align:center}
        .vs-big-quote{font-family:'Bodoni Moda',serif;font-weight:300;font-size:clamp(1.6rem,3vw,3rem);line-height:1.35;color:#0C1A0E;margin-top:2rem}
        .vs-big-quote em{font-style:italic;color:#1976D2}.vs-big-quote strong{font-weight:600;font-style:normal}
        .vs-horizon{background:#0C1A0E;padding:8rem 3rem;display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:start}
        .vs-hz-title{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(3rem,5vw,5.5rem);text-transform:uppercase;line-height:.9;color:white;margin:.5rem 0 1.5rem}
        .vs-hz-title span{color:#64B5F6}
        .vs-hz-body{font-family:'Bodoni Moda',serif;font-weight:300;font-size:clamp(1rem,1.5vw,1.25rem);color:rgba(255,255,255,.45);line-height:1.7;margin-bottom:1rem}
        .vs-hz-body em{font-style:italic;color:rgba(255,255,255,.65)}.vs-hz-body strong{font-weight:400;color:rgba(255,255,255,.75)}
        .vs-hz-item{display:grid;grid-template-columns:auto 1fr;gap:1.5rem;padding:2rem 0;border-bottom:1px solid rgba(255,255,255,.06)}
        .vs-hz-item:last-child{border-bottom:none}
        .vs-hzi-year{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:2rem;letter-spacing:-.02em;line-height:1;padding-top:.2rem}
        .vs-hzi-title{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.1rem;text-transform:uppercase;letter-spacing:.04em;color:rgba(255,255,255,.75);margin-bottom:.4rem}
        .vs-hzi-body{font-size:.83rem;color:rgba(255,255,255,.35);line-height:1.75}
        .vs-values{background:#F0E9D5;padding:7rem 3rem}
        .vs-val-header{margin-bottom:4rem}
        .vs-val-title{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(2.5rem,4.5vw,5rem);text-transform:uppercase;line-height:.9;color:#0C1A0E;margin-top:.5rem}
        .vs-val-title span{color:#B5552A}
        .vs-val-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5px;background:rgba(12,26,14,.06)}
        .vs-vcard{background:#F0E9D5;padding:2.5rem 2rem;position:relative;overflow:hidden;transition:background .35s}
        .vs-vcard:hover{background:#0C1A0E}
        .vs-vcard-bg{position:absolute;top:.5rem;right:1rem;font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:5rem;line-height:1;color:rgba(12,26,14,.04);pointer-events:none;transition:color .35s}
        .vs-vcard:hover .vs-vcard-bg{color:rgba(255,255,255,.04)}
        .vs-vcard-title{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.4rem;text-transform:uppercase;letter-spacing:.03em;color:#0C1A0E;margin-bottom:.6rem;position:relative;z-index:1;transition:color .35s}
        .vs-vcard:hover .vs-vcard-title{color:white}
        .vs-vcard-body{font-size:.83rem;color:#7A8070;line-height:1.75;position:relative;z-index:1;transition:color .35s}
        .vs-vcard:hover .vs-vcard-body{color:rgba(255,255,255,.5)}
        .vs-cta{background:#0D2E1A;padding:8rem 3rem;text-align:center;position:relative;overflow:hidden}
        .vs-cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:600px;background:radial-gradient(circle,rgba(25,118,210,.15) 0%,transparent 65%);pointer-events:none}
        .vs-cta-inner{position:relative;z-index:1}
        .vs-cta-pre{font-family:'IBM Plex Mono',monospace;font-size:.62rem;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:2rem}
        .vs-cta-title{font-family:'Bodoni Moda',serif;font-weight:300;font-size:clamp(3rem,6vw,7rem);color:white;line-height:1.1;margin-bottom:3rem}
        .vs-cta-title em{font-style:italic;color:#64B5F6}
        .vs-cta-btns{display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap}
        .vs-btn-s{font-family:'IBM Plex Mono',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:#0C1A0E;background:#F0E9D5;padding:.9rem 2.5rem;text-decoration:none;transition:background .2s,transform .15s;display:inline-block}
        .vs-btn-s:hover{background:white;transform:translateY(-2px)}
        .vs-btn-g{font-family:'IBM Plex Mono',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.4);padding:.9rem 2.5rem;border:1px solid rgba(255,255,255,.12);text-decoration:none;transition:color .2s,border-color .2s;display:inline-block}
        .vs-btn-g:hover{color:white;border-color:rgba(255,255,255,.4)}
        @media(max-width:900px){
          .vs-inner{padding:3rem 1.5rem 2rem}.vs-strip{grid-template-columns:1fr 1fr}
          .vs-stmt,.vs-horizon,.vs-values,.vs-cta{padding:5rem 1.5rem}
          .vs-horizon{grid-template-columns:1fr}.vs-val-grid{grid-template-columns:1fr 1fr}
          .vs-cta-btns{flex-direction:column;align-items:center}
        }
      `}</style>
    </>
  );
}
