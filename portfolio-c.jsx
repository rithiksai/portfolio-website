// Direction C — Bauhaus × Kana
// Bold geometric, oversized type, single hot accent. Asymmetric grid blocks
// that feel printed. Zen Kaku Gothic + JetBrains Mono.

function PortfolioC() {
  const [dark, setDark] = React.useState(false);
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setT(x => x + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const palette = dark
    ? { bg: '#16140f', card: '#1f1c15', ink: '#ece8de', sub: 'rgba(236,232,222,0.6)', rule: 'rgba(236,232,222,0.14)', accent: '#f2c64b', accent2: '#e35e3a' }
    : { bg: '#ece8de', card: '#e3dfd2', ink: '#1c1916', sub: 'rgba(28,25,22,0.55)', rule: 'rgba(28,25,22,0.16)', accent: '#d83a2a', accent2: '#1c1916' };

  const display = `'Zen Kaku Gothic New', 'Inter', sans-serif`;
  const mono = `'JetBrains Mono', ui-monospace, monospace`;

  // small live clock
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  return (
    <div style={{
      width: 1440,
      background: palette.bg,
      color: palette.ink,
      fontFamily: display,
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.5s, color 0.5s',
    }}>
      {/* Top strip */}
      <header style={{
        display: 'grid', gridTemplateColumns: 'auto 1fr auto auto',
        alignItems: 'center', gap: 24,
        padding: '20px 40px',
        borderBottom: `2px solid ${palette.ink}`,
        fontFamily: mono, fontSize: 11, letterSpacing: '0.15em',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 24, height: 24, background: palette.accent, borderRadius: '50%' }} />
          <span style={{ fontWeight: 700 }}>RITHIK·SAI</span>
        </div>
        <div style={{ color: palette.sub }}>
          ENGINEER / AI / iOS — {hh}:{mm}:<span style={{ color: palette.accent }}>{ss}</span> PT
        </div>
        <nav style={{ display: 'flex', gap: 22 }}>
          {['HERO', 'WORK', 'PATH', 'NOW', 'TALK'].map(x => (
            <a key={x} href="#" style={{ color: palette.ink, textDecoration: 'none' }}>{x}</a>
          ))}
        </nav>
        <button onClick={() => setDark(d => !d)} style={{
          padding: '6px 14px',
          background: dark ? palette.accent : palette.ink, color: dark ? palette.ink : palette.bg,
          border: 'none', borderRadius: 0, cursor: 'pointer',
          fontFamily: mono, fontSize: 11, fontWeight: 700, letterSpacing: '0.15em',
        }}>
          {dark ? '☀ LIGHT' : '☾ DARK'}
        </button>
      </header>

      {/* HERO — asymmetric grid */}
      <section style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.2fr 1fr', minHeight: 720, borderBottom: `2px solid ${palette.ink}` }}>
        {/* ink trail layer */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
          <InkTrail color={palette.ink === '#1c1916' ? palette.accent : palette.accent} max={16} size={20} />
        </div>

        {/* Left — giant type */}
        <div style={{ position: 'relative', padding: '60px 40px 40px', borderRight: `2px solid ${palette.ink}`, zIndex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: mono, fontSize: 11, letterSpacing: '0.2em', color: palette.sub, marginBottom: 60 }}>
            <span>FOLIO / 2026</span>
            <span>NO. 001</span>
          </div>
          <h1 style={{
            fontFamily: display, fontWeight: 900,
            fontSize: 220, lineHeight: 0.85, letterSpacing: '-0.05em',
            margin: 0,
          }}>
            R<span style={{ color: palette.accent }}>I</span>THIK
            <br/>
            S<span style={{ color: palette.accent, fontStyle: 'italic' }}>A</span>I
          </h1>
          <div style={{
            position: 'absolute', bottom: 40, left: 40,
            fontFamily: mono, fontSize: 13, letterSpacing: '0.2em', color: palette.sub,
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <span style={{ display: 'inline-block', width: 28, height: 2, background: palette.accent }} />
            ENGINEER · BUILDS THINGS THAT THINK
          </div>
        </div>

        {/* Right — meta blocks */}
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr 1fr', position: 'relative', zIndex: 2 }}>
          <div style={{ padding: '36px 40px', borderBottom: `2px solid ${palette.ink}`, position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', right: -30, top: -10,
              fontFamily: display, fontSize: 240, fontWeight: 900, lineHeight: 1,
              color: palette.accent, opacity: 0.92, letterSpacing: '-0.06em',
            }}>あ</div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.2em', color: palette.sub, position: 'relative' }}>STATEMENT / 01</div>
            <p style={{ fontFamily: display, fontSize: 22, lineHeight: 1.35, fontWeight: 500, margin: '12px 0 0', maxWidth: 320, position: 'relative' }}>
              I build on-device AI for iOS. Models small enough to fit, fast enough to feel instant, private by default.
            </p>
          </div>
          <div style={{ padding: '36px 40px', borderBottom: `2px solid ${palette.ink}`, background: palette.accent, color: palette.ink === '#ece8de' ? '#1c1916' : palette.bg }}>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.2em', opacity: 0.8 }}>NOW SHOWING</div>
            <div style={{ fontFamily: display, fontSize: 36, fontWeight: 900, marginTop: 10, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              AURORA — on-device 3B-param LLM @ 28 tok/s on A17.
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, marginTop: 16, letterSpacing: '0.18em' }}>→ READ MORE</div>
          </div>
          <div style={{ padding: '36px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            {[
              { k: 'BASED', v: 'Bay Area' },
              { k: 'STATUS', v: 'Available' },
              { k: 'STACK', v: 'Swift / Metal' },
              { k: 'YEARS', v: '5+' },
            ].map((m, i) => (
              <div key={i} style={{
                padding: '14px 0', borderRight: i % 2 === 0 ? `1px solid ${palette.rule}` : 'none',
                paddingLeft: i % 2 ? 16 : 0,
                borderBottom: i < 2 ? `1px solid ${palette.rule}` : 'none',
                paddingBottom: i < 2 ? 14 : 0,
                paddingTop: i >= 2 ? 14 : 0,
              }}>
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.2em', color: palette.sub }}>{m.k}</div>
                <div style={{ fontFamily: display, fontSize: 20, fontWeight: 700, marginTop: 4 }}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div style={{
        background: palette.ink, color: palette.bg,
        padding: '16px 0', overflow: 'hidden', whiteSpace: 'nowrap',
        borderBottom: `2px solid ${palette.ink}`,
      }}>
        <div style={{
          fontFamily: display, fontSize: 28, fontWeight: 900, letterSpacing: '-0.01em',
          display: 'inline-block', animation: 'marqueeC 28s linear infinite',
        }}>
          {Array(3).fill(0).map((_, i) => (
            <span key={i}>
              SWIFT · METAL · COREML · あ · PYTORCH · TRANSFORMERS · い · GGUF · CUDA · う · ONNX · え · SWIFTUI · お · 　
            </span>
          ))}
        </div>
        <style>{`@keyframes marqueeC { from { transform: translateX(0) } to { transform: translateX(-33.3%) } }`}</style>
      </div>

      {/* ABOUT */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', borderBottom: `2px solid ${palette.ink}` }}>
        <div style={{ padding: '60px 40px', borderRight: `2px solid ${palette.ink}`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.25em', color: palette.sub, marginBottom: 30 }}>
            CHAPTER 02 · ABOUT / 自 己
          </div>
          <h2 style={{ fontFamily: display, fontSize: 86, fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', margin: 0 }}>
            HUMAN<span style={{ color: palette.accent }}>·</span><br/>SCALE<br/><span style={{ color: palette.accent }}>SOFTW</span>ARE.
          </h2>
          <div style={{ marginTop: 30, display: 'flex', gap: 8 }}>
            <span style={{ width: 60, height: 60, background: palette.accent }} />
            <span style={{ width: 60, height: 60, borderRadius: '50%', background: palette.ink }} />
            <span style={{ width: 60, height: 60, background: 'transparent', border: `3px solid ${palette.ink}` }} />
            <span style={{ width: 60, height: 60, background: palette.ink, transform: 'rotate(45deg) scale(0.7)' }} />
          </div>
        </div>
        <div style={{ padding: '60px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <div style={{ fontSize: 17, lineHeight: 1.65, color: palette.sub }}>
            <p style={{ margin: '0 0 18px' }}>{RITHIK.about[0]}</p>
            <p style={{ margin: 0 }}>{RITHIK.about[1]}</p>
          </div>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.2em', color: palette.sub, marginBottom: 14 }}>I CARE ABOUT —</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Latency you can feel.',
                'Software that works without a network.',
                'Tools that earn their place on the home screen.',
                'Type that breathes.',
                'Documentation written like it matters.',
              ].map((x, i) => (
                <li key={i} style={{
                  display: 'grid', gridTemplateColumns: '32px 1fr',
                  padding: '12px 0', borderBottom: `1px solid ${palette.rule}`,
                  fontFamily: display, fontSize: 17, fontWeight: 500,
                }}>
                  <span style={{ fontFamily: mono, fontSize: 11, color: palette.accent, letterSpacing: '0.1em' }}>0{i + 1}</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WORK — bento-ish grid of 6 */}
      <section style={{ padding: '60px 40px 80px', borderBottom: `2px solid ${palette.ink}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 36 }}>
          <h2 style={{ fontFamily: display, fontSize: 96, fontWeight: 900, letterSpacing: '-0.04em', margin: 0, lineHeight: 0.9 }}>
            WORK <span style={{ color: palette.accent, fontStyle: 'italic' }}>06.</span>
          </h2>
          <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.2em', color: palette.sub }}>
            ↓ HOVER FOR DETAILS · ク リ ッ ク
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: '220px', gap: 12 }}>
          {RITHIK.projects.map((p, i) => {
            // bento sizing
            const spans = [
              { c: 'span 3', r: 'span 2' },
              { c: 'span 3', r: 'span 1' },
              { c: 'span 2', r: 'span 1' },
              { c: 'span 4', r: 'span 1' },
              { c: 'span 3', r: 'span 1' },
              { c: 'span 3', r: 'span 1' },
            ][i];
            const bg = i === 0 ? palette.ink : i === 3 ? palette.accent : palette.card;
            const fg = i === 0 ? palette.bg : i === 3 ? (dark ? '#1c1916' : palette.bg) : palette.ink;
            return (
              <a key={p.n} href="#" style={{
                gridColumn: spans.c, gridRow: spans.r,
                padding: 28, background: bg, color: fg,
                border: `2px solid ${palette.ink}`,
                textDecoration: 'none', position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                cursor: 'pointer', transition: 'transform 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translate(-3px, -3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translate(0,0)'}
              >
                <div style={{
                  position: 'absolute', right: -20, bottom: -40,
                  fontFamily: display, fontSize: i === 0 ? 360 : 220, fontWeight: 900, lineHeight: 1,
                  color: fg, opacity: i === 3 ? 0.18 : 0.08,
                  pointerEvents: 'none', letterSpacing: '-0.05em',
                }}>{p.kanji}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
                  <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.2em', opacity: 0.7 }}>/ {p.n}</span>
                  <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.18em', opacity: 0.7 }}>{p.year}</span>
                </div>
                <div style={{ position: 'relative' }}>
                  <h3 style={{
                    fontFamily: display, fontSize: i === 0 ? 64 : 38, fontWeight: 900,
                    letterSpacing: '-0.03em', margin: 0, lineHeight: 0.95,
                  }}>{p.title}.</h3>
                  <div style={{ fontFamily: display, fontSize: 15, fontWeight: 500, opacity: 0.85, marginTop: 8 }}>
                    {p.sub}
                  </div>
                  {(i === 0 || i === 3) && (
                    <p style={{ fontSize: 13, lineHeight: 1.55, opacity: 0.75, margin: '14px 0 0', maxWidth: 460 }}>
                      {p.blurb}
                    </p>
                  )}
                  <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontFamily: mono, fontSize: 10, letterSpacing: '0.1em',
                        padding: '3px 8px',
                        border: `1.5px solid ${fg}`,
                        opacity: 0.85,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', borderBottom: `2px solid ${palette.ink}` }}>
        <div style={{ padding: '60px 40px', borderRight: `2px solid ${palette.ink}`, background: palette.ink, color: palette.bg }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.25em', opacity: 0.6, marginBottom: 30 }}>
            CHAPTER 03 · PATH / 履 歴
          </div>
          <h2 style={{ fontFamily: display, fontSize: 92, fontWeight: 900, lineHeight: 0.88, letterSpacing: '-0.04em', margin: 0 }}>
            FIVE<br/>YE<span style={{ color: palette.accent }}>ARS</span><br/>OF<br/>SHIPP<span style={{ color: palette.accent }}>I</span>NG.
          </h2>
          <a href={RITHIK.resume} target="_blank" rel="noreferrer" style={{
            display: 'inline-block', marginTop: 36,
            padding: '14px 22px', background: palette.accent, color: '#1c1916',
            fontFamily: mono, fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textDecoration: 'none',
          }}>↗ FULL RÉSUMÉ — PDF</a>
        </div>
        <div style={{ padding: '60px 40px' }}>
          {RITHIK.experience.map((e, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '60px 200px 1fr 1.2fr',
              gap: 30, padding: '26px 0', alignItems: 'center',
              borderBottom: `2px solid ${palette.rule}`,
              borderTop: i === 0 ? `2px solid ${palette.ink}` : 'none',
            }}>
              <div style={{ fontFamily: display, fontSize: 56, fontWeight: 900, color: palette.accent, letterSpacing: '-0.04em' }}>0{i + 1}</div>
              <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.1em', color: palette.sub }}>{e.yr}</div>
              <div>
                <div style={{ fontFamily: display, fontSize: 24, fontWeight: 700 }}>{e.role}</div>
                <div style={{ fontFamily: mono, fontSize: 12, color: palette.sub, marginTop: 4, letterSpacing: '0.05em' }}>@ {e.co}</div>
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: palette.sub }}>{e.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NOW */}
      <section style={{ padding: '60px 40px 80px', borderBottom: `2px solid ${palette.ink}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
          <span style={{ width: 14, height: 14, borderRadius: '50%', background: palette.accent, animation: 'pulseC 1.6s infinite' }} />
          <h2 style={{ fontFamily: display, fontSize: 80, fontWeight: 900, letterSpacing: '-0.04em', margin: 0 }}>
            NOW <span style={{ color: palette.accent, fontStyle: 'italic' }}>—</span> 現 在.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {RITHIK.now.map((row, i) => (
            <div key={i} style={{
              padding: 24, background: palette.card,
              border: `2px solid ${palette.ink}`,
              minHeight: 200,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.2em', color: palette.accent }}>
                / {String(i + 1).padStart(2, '0')} · {row.k.toUpperCase()}
              </div>
              <div style={{ fontFamily: display, fontSize: 18, fontWeight: 500, lineHeight: 1.4 }}>{row.v}</div>
            </div>
          ))}
        </div>
        <style>{`@keyframes pulseC { 0%,100% { opacity: 1 } 50% { opacity: 0.25 } }`}</style>
      </section>

      {/* CONTACT */}
      <section style={{ padding: '60px 40px 50px', background: palette.accent, color: '#1c1916' }}>
        <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.2em', marginBottom: 20 }}>
          CHAPTER 05 · TALK TO ME / 連 絡
        </div>
        <h2 style={{
          fontFamily: display, fontSize: 240, fontWeight: 900, letterSpacing: '-0.06em',
          lineHeight: 0.85, margin: 0,
        }}>
          MAIL<br/>ME<span style={{ fontStyle: 'italic' }}>.</span>
        </h2>
        <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: `2px solid #1c1916`, borderBottom: `2px solid #1c1916` }}>
          {[
            { k: 'EMAIL', v: RITHIK.email, h: `mailto:${RITHIK.email}` },
            { k: 'GITHUB', v: '@rithiksai', h: RITHIK.github },
            { k: 'LINKEDIN', v: 'in/rithik-sai', h: RITHIK.linkedin },
            { k: 'RÉSUMÉ', v: 'PDF · DRIVE', h: RITHIK.resume },
          ].map((c, i) => (
            <a key={c.k} href={c.h} target="_blank" rel="noreferrer" style={{
              padding: '24px 20px', color: '#1c1916', textDecoration: 'none',
              borderRight: i < 3 ? `2px solid #1c1916` : 'none',
              display: 'flex', flexDirection: 'column', gap: 8,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#1c1916'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            onMouseOver={e => { e.currentTarget.querySelectorAll('span').forEach(s => s.style.color = palette.accent); }}
            onMouseOut={e => { e.currentTarget.querySelectorAll('span').forEach(s => s.style.color = '#1c1916'); }}
            >
              <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.25em', opacity: 0.7, transition: 'color 0.2s' }}>{c.k}</span>
              <span style={{ fontFamily: display, fontSize: 22, fontWeight: 700, transition: 'color 0.2s' }}>{c.v}</span>
              <span style={{ fontFamily: mono, fontSize: 11, transition: 'color 0.2s' }}>↗</span>
            </a>
          ))}
        </div>
        <div style={{
          marginTop: 50, display: 'flex', justifyContent: 'space-between',
          fontFamily: mono, fontSize: 11, letterSpacing: '0.2em',
        }}>
          <span>© 2026 RITHIK SAI</span>
          <span>SET IN ZEN KAKU GOTHIC NEW + JETBRAINS MONO</span>
          <span>あ り が と う</span>
        </div>
      </section>
    </div>
  );
}

window.PortfolioC = PortfolioC;
