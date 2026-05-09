// Shared data + helpers for all three portfolio directions.
// Same content, different visual languages.

const RITHIK = {
  name: "Rithik Sai",
  role: "AI Engineer · iOS Developer",
  tagline: "Building on-device intelligence for Apple platforms.",
  location: "based in the bay area, available worldwide",
  email: "rithik@example.com",
  github: "https://github.com/rithiksai",
  linkedin: "https://www.linkedin.com/in/rithik-sai-295bbb256/",
  resume: "https://drive.google.com/file/d/1KM9Fi83mn-_oEdqbshwTjq-oopEa4hvm/view?usp=sharing",
  about: [
    "I'm an engineer who lives at the seam of machine learning and human-scale interfaces. My day-to-day is split between training small, capable models and shipping them inside iOS apps that feel quiet, responsive, and respectful of attention.",
    "I care about latency you can feel, software that works without a network, and tools that earn their place on the home screen. I write Swift like prose and Python like a sketchbook.",
  ],
  now: [
    { k: "Building", v: "an on-device retrieval engine for personal notes — sub-200ms recall, fully local." },
    { k: "Reading", v: "‘The Annotated Transformer’, again. ‘In Praise of Shadows’ for the third time." },
    { k: "Learning", v: "Metal compute kernels and how to write a half-decent haiku." },
    { k: "Open to", v: "AI engineering roles where the model meets the user." },
  ],
  projects: [
    {
      n: "01",
      kanji: "曙",
      title: "Aurora",
      sub: "On-device LLM runtime for iOS",
      tags: ["Swift", "Metal", "GGUF"],
      year: "2025",
      blurb: "A streaming inference runtime that runs 3B-parameter models at 28 tok/s on an iPhone 15 Pro. Custom KV-cache, quantized attention, ANE fallback.",
    },
    {
      n: "02",
      kanji: "墨",
      title: "Inkwell",
      sub: "Handwriting → structured notes",
      tags: ["Vision", "CoreML", "SwiftUI"],
      year: "2025",
      blurb: "Apple Pencil strokes become Markdown, equations, and diagrams in real time. Vision transformer fine-tuned on 80k pages of personal notebooks.",
    },
    {
      n: "03",
      kanji: "潮",
      title: "Tide",
      sub: "Real-time audio diarization",
      tags: ["Whisper", "PyAnnote", "AVFoundation"],
      year: "2024",
      blurb: "Speaker-aware transcription that runs entirely on the device. Used by a podcast network for live show notes; never sends audio off the phone.",
    },
    {
      n: "04",
      kanji: "灯",
      title: "Lantern",
      sub: "Privacy-first journaling",
      tags: ["SwiftData", "CryptoKit", "Local LLM"],
      year: "2024",
      blurb: "A daily journal with a small LLM that reflects back on your week. End-to-end encrypted, sync via iCloud, model never leaves the device.",
    },
    {
      n: "05",
      kanji: "響",
      title: "Cohere",
      sub: "Multi-agent orchestration",
      tags: ["Python", "LangGraph", "FastAPI"],
      year: "2024",
      blurb: "A small framework for composing specialist agents into reliable pipelines. Powers an internal research tool used by a 30-person team.",
    },
    {
      n: "06",
      kanji: "銀",
      title: "Ginkgo",
      sub: "Spring-physics animation kit",
      tags: ["SwiftUI", "Open Source"],
      year: "2023",
      blurb: "A tiny, opinionated animation library that brings critically-damped springs to SwiftUI. 1.4k stars, used in a handful of indie apps I admire.",
    },
  ],
  experience: [
    { yr: "2024 — now", role: "AI Engineer", co: "Independent / Contract", note: "On-device ML for iOS clients in health, education, and creative tools." },
    { yr: "2023 — 2024", role: "ML Engineer", co: "Stealth (Series A)", note: "Shipped the first version of an LLM-backed customer-support agent. Owned the eval pipeline." },
    { yr: "2022 — 2023", role: "iOS Developer", co: "Studio commission", note: "Built two App Store apps from zero. One reached #14 in Productivity." },
    { yr: "2021 — 2022", role: "Research Assistant", co: "University Lab", note: "Computer vision for medical imaging. Co-authored two papers." },
  ],
};

// A quiet, reusable cursor ink-trail. Renders inside a relatively-positioned
// container; spawns a small dab on every mousemove that fades out.
function InkTrail({ color = '#1a1614', max = 18, size = 18 }) {
  const [dabs, setDabs] = React.useState([]);
  const idRef = React.useRef(0);
  const ref = React.useRef(null);
  const last = React.useRef({ x: 0, y: 0, t: 0 });

  function onMove(e) {
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const now = performance.now();
    const dx = x - last.current.x, dy = y - last.current.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 14 && now - last.current.t < 40) return;
    last.current = { x, y, t: now };
    const id = ++idRef.current;
    const r2 = (Math.random() * 0.6 + 0.7);
    setDabs(d => [...d.slice(-max + 1), { id, x, y, r: size * r2, rot: Math.random() * 360 }]);
    setTimeout(() => setDabs(d => d.filter(p => p.id !== id)), 1100);
  }
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'auto', overflow: 'hidden' }}
    >
      {dabs.map((p, i) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: p.x - p.r / 2,
            top: p.y - p.r / 2,
            width: p.r,
            height: p.r,
            background: color,
            borderRadius: '50%',
            transform: `rotate(${p.rot}deg) scale(${1 - i / max * 0.4})`,
            opacity: 0.55 - i / max * 0.4,
            filter: 'blur(0.4px)',
            mixBlendMode: 'multiply',
            animation: 'inkfade 1.1s ease-out forwards',
            pointerEvents: 'none',
          }}
        />
      ))}
      <style>{`@keyframes inkfade { from { opacity: var(--o, .6); transform-origin: center; } to { opacity: 0; transform: scale(0.3); } }`}</style>
    </div>
  );
}

// Sumi (ink) brushstroke — reusable SVG. Two strokes overlap for a slight
// double-ink look; the path is the same one I doodled until it felt right.
function SumiStroke({ w = 480, h = 120, color = '#1a1614', opacity = 0.9 }) {
  return (
    <svg viewBox="0 0 480 120" width={w} height={h} style={{ display: 'block' }}>
      <defs>
        <filter id="sumi-rough" x="-5%" y="-50%" width="110%" height="200%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="3" />
        </filter>
      </defs>
      <path
        d="M 18 70 C 60 40, 130 92, 200 64 S 340 38, 420 70 L 460 56"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
        filter="url(#sumi-rough)"
      />
      <path
        d="M 24 76 C 80 96, 150 50, 240 72 S 360 88, 440 64"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity={opacity * 0.5}
      />
    </svg>
  );
}

// Vermilion 'seal' stamp — circle or square with a kanji inside, faux-imperfect.
function Seal({ char = "印", color = "#c8392f", size = 64, square = false, font = "'Shippori Mincho', serif" }) {
  return (
    <div style={{
      width: size, height: size,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: color,
      color: '#f3ece0',
      fontFamily: font,
      fontWeight: 700,
      fontSize: size * 0.5,
      borderRadius: square ? size * 0.08 : '50%',
      boxShadow: `inset 0 0 0 ${size * 0.04}px rgba(243,236,224,0.25)`,
      transform: `rotate(${(Math.random() * 6 - 3).toFixed(2)}deg)`,
      filter: 'contrast(1.05) saturate(1.05)',
      letterSpacing: '-0.02em',
      userSelect: 'none',
      flex: '0 0 auto',
    }}>
      <span style={{ marginTop: -2 }}>{char}</span>
    </div>
  );
}

Object.assign(window, { RITHIK, InkTrail, SumiStroke, Seal });
