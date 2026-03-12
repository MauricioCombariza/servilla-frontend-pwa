import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '@/supabase';

export default function Contactenos() {
  const [name, setName]           = useState('');
  const [email, setEmail]         = useState('');
  const [comentario, setComentario] = useState('');
  const [error, setError]         = useState<string | null>(null);
  const [success, setSuccess]     = useState<string | boolean>(false);
  const [loading, setLoading]     = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll('.rc');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('on'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (!name || !email || !comentario) { setError('Por favor, completa todos los campos.'); return; }
    setLoading(true);
    const { error } = await supabase.from('comentarios').insert([{ name, email, comentario }]);
    setLoading(false);
    if (error) {
      setError('Error al enviar el mensaje. Inténtalo nuevamente.');
    } else {
      setSuccess('¡Mensaje enviado con éxito! Te contactaremos pronto.');
      setName(''); setEmail(''); setComentario('');
    }
  };

  return (
    <>
      <Head>
        <title>Contáctenos — Ser·villa · Hablemos</title>
        <meta name="description" content="Conecta con Servilla. Hablemos de cómo podemos ser el ser logístico de tu villa." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,300;0,6..96,400;1,6..96,300;1,6..96,400&family=Barlow+Condensed:wght@300;700;800;900&family=IBM+Plex+Mono:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <section className="ct-wrap">
        {/* LEFT — contexto */}
        <div className="ct-left">
          <div className="ct-texture" />
          <div className="ct-wm">Hola</div>
          <div className="ct-left-inner">
            <div className="ct-kicker"><div className="ct-bar" /><span>Contáctenos</span></div>
            <h1 className="ct-title">
              <span className="ct-ser">Ser</span><span className="ct-dot">·</span><br />
              <span className="ct-villa">villa.</span>
            </h1>
            <p className="ct-sub">
              Cuéntanos tu necesidad. En <strong>menos de 24 horas</strong> un especialista de Servilla te contactará para diseñar juntos la solución logística que tu empresa necesita.
            </p>
            <div className="ct-contact-info">
              <a href="https://wa.me/5716262314" target="_blank" rel="noreferrer" className="ct-info-item">
                <span className="ct-info-icon">📱</span>
                <div>
                  <div className="ct-info-lbl">WhatsApp directo</div>
                  <div className="ct-info-val">+57 1 626 2314</div>
                </div>
              </a>
              <div className="ct-info-item">
                <span className="ct-info-icon">📍</span>
                <div>
                  <div className="ct-info-lbl">Operamos en</div>
                  <div className="ct-info-val">Bogotá · 28 localidades</div>
                </div>
              </div>
              <div className="ct-info-item">
                <span className="ct-info-icon">⚡</span>
                <div>
                  <div className="ct-info-lbl">Respuesta</div>
                  <div className="ct-info-val">En menos de 24h</div>
                </div>
              </div>
            </div>
            <div className="ct-links">
              <Link href="/SerVilla" className="ct-link">Conoce nuestra historia →</Link>
              <Link href="/Mision"   className="ct-link">Nuestra misión →</Link>
            </div>
          </div>
        </div>

        {/* RIGHT — formulario */}
        <div className="ct-right">
          <div className="ct-form-wrap rc">
            <div className="ct-form-header">
              <h2 className="ct-form-title">Escríbenos</h2>
              <p className="ct-form-sub">Tu primera consulta es completamente <strong>sin costo.</strong></p>
            </div>

            {success ? (
              <div className="ct-success">
                <span className="ct-success-icon">✓</span>
                <p className="ct-success-msg">{success}</p>
                <button className="ct-reset" onClick={() => setSuccess(false)}>Enviar otro mensaje</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="ct-form">
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-name">Nombre completo</label>
                  <input
                    id="ct-name" type="text" className="ct-input"
                    placeholder="Tu nombre"
                    value={name} onChange={e => setName(e.target.value)} required
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-email">Correo electrónico</label>
                  <input
                    id="ct-email" type="email" className="ct-input"
                    placeholder="tu@empresa.com"
                    value={email} onChange={e => setEmail(e.target.value)} required
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-msg">¿En qué podemos ayudarte?</label>
                  <textarea
                    id="ct-msg" className="ct-textarea"
                    placeholder="Cuéntanos sobre tu empresa, tu volumen de envíos y qué necesitas..."
                    value={comentario} onChange={e => setComentario(e.target.value)} required
                  />
                </div>
                {error && <p className="ct-error">{error}</p>}
                <button type="submit" className="ct-submit" disabled={loading}>
                  {loading ? 'Enviando...' : 'Enviar mensaje →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .rc{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}.rc.on{opacity:1;transform:none}
        .ct-wrap{display:grid;grid-template-columns:1fr 1fr;min-height:100vh;padding-top:80px}
        .ct-left{background:#0D2E1A;position:relative;overflow:hidden;display:flex;flex-direction:column}
        .ct-texture{position:absolute;inset:0;opacity:.04;background-image:repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(255,255,255,1) 20px,rgba(255,255,255,1) 21px)}
        .ct-wm{position:absolute;bottom:-1rem;right:-1rem;font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(6rem,14vw,16rem);text-transform:uppercase;color:rgba(255,255,255,.025);line-height:1;pointer-events:none;user-select:none}
        .ct-left-inner{flex:1;padding:4rem;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:1}
        .ct-kicker{display:flex;align-items:center;gap:.75rem;margin-bottom:2rem;font-family:'IBM Plex Mono',monospace;font-size:.6rem;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.35)}
        .ct-bar{width:32px;height:1px;background:#B5552A;flex-shrink:0}
        .ct-title{line-height:.88;margin-bottom:2rem}
        .ct-ser{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:clamp(4rem,8vw,8rem);color:rgba(250,246,239,.4);letter-spacing:-.01em}
        .ct-dot{font-family:'Bodoni Moda',serif;font-size:clamp(3rem,6vw,6rem);color:#B5552A;font-weight:300}
        .ct-villa{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(4rem,8vw,8rem);text-transform:uppercase;letter-spacing:-.01em;color:white}
        .ct-sub{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:clamp(1rem,1.5vw,1.25rem);color:rgba(255,255,255,.45);line-height:1.7;max-width:38ch;margin-bottom:2.5rem}
        .ct-sub strong{font-style:normal;font-weight:400;color:rgba(255,255,255,.75)}
        .ct-contact-info{display:flex;flex-direction:column;gap:.75rem;margin-bottom:2.5rem}
        .ct-info-item{display:flex;align-items:center;gap:1rem;padding:.85rem 1rem;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);text-decoration:none;transition:background .2s,border-color .2s}
        .ct-info-item:hover{background:rgba(255,255,255,.08);border-color:rgba(181,85,42,.4)}
        .ct-info-icon{font-size:1.1rem;flex-shrink:0}
        .ct-info-lbl{font-family:'IBM Plex Mono',monospace;font-size:.55rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:.2rem}
        .ct-info-val{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1rem;text-transform:uppercase;letter-spacing:.03em;color:rgba(255,255,255,.7)}
        .ct-links{display:flex;flex-direction:column;gap:.6rem}
        .ct-link{font-family:'IBM Plex Mono',monospace;font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.3);text-decoration:none;transition:color .2s}
        .ct-link:hover{color:rgba(181,85,42,.9)}
        .ct-right{background:#FAF6EF;display:flex;align-items:center;justify-content:center;padding:4rem 3rem}
        .ct-form-wrap{width:100%;max-width:480px}
        .ct-form-header{margin-bottom:2.5rem}
        .ct-form-title{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:2.5rem;text-transform:uppercase;letter-spacing:-.01em;color:#0C1A0E;margin-bottom:.4rem}
        .ct-form-sub{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:1rem;color:#7A8070}
        .ct-form-sub strong{font-style:normal;font-weight:400;color:#0C1A0E}
        .ct-form{display:flex;flex-direction:column;gap:1.5rem}
        .ct-field{display:flex;flex-direction:column;gap:.5rem}
        .ct-label{font-family:'IBM Plex Mono',monospace;font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:#7A8070}
        .ct-input{background:white;border:1px solid rgba(12,26,14,.1);padding:.85rem 1rem;font-family:'Barlow Condensed',sans-serif;font-size:1rem;font-weight:400;color:#0C1A0E;outline:none;transition:border-color .2s}
        .ct-input:focus{border-color:#B5552A}
        .ct-textarea{background:white;border:1px solid rgba(12,26,14,.1);padding:.85rem 1rem;font-family:'Barlow Condensed',sans-serif;font-size:1rem;color:#0C1A0E;outline:none;transition:border-color .2s;resize:vertical;min-height:130px;line-height:1.5}
        .ct-textarea:focus{border-color:#B5552A}
        .ct-error{font-family:'IBM Plex Mono',monospace;font-size:.65rem;color:#C62828;letter-spacing:.05em}
        .ct-submit{background:#0C1A0E;color:white;border:none;padding:1rem 2rem;font-family:'IBM Plex Mono',monospace;font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;cursor:pointer;transition:background .2s,transform .15s}
        .ct-submit:hover:not(:disabled){background:#1A4D2E;transform:translateY(-1px)}
        .ct-submit:disabled{opacity:.5;cursor:not-allowed}
        .ct-success{text-align:center;padding:3rem 1rem}
        .ct-success-icon{display:block;font-size:2.5rem;margin-bottom:1rem;color:#1A4D2E}
        .ct-success-msg{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:300;font-size:1.2rem;color:#0C1A0E;margin-bottom:2rem;line-height:1.6}
        .ct-reset{font-family:'IBM Plex Mono',monospace;font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:#7A8070;background:none;border:1px solid rgba(12,26,14,.15);padding:.7rem 1.5rem;cursor:pointer;transition:color .2s,border-color .2s}
        .ct-reset:hover{color:#0C1A0E;border-color:rgba(12,26,14,.4)}
        @media(max-width:900px){
          .ct-wrap{grid-template-columns:1fr;min-height:auto}
          .ct-left-inner{padding:3rem 1.5rem}
          .ct-right{padding:3rem 1.5rem}
        }
      `}</style>
    </>
  );
}
