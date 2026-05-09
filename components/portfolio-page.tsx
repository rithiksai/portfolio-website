import Link from 'next/link';
import { InkTrail } from '@/components/ink-trail';
import { ThemeToggle } from '@/components/theme-toggle';
import { TopBarClock } from '@/components/top-bar-clock';
import { MARQUEE_ITEMS, RITHIK, type Project } from '@/content/content';

const navItems = [
  { label: 'HERO', href: '#hero' },
  { label: 'WORK', href: '#work' },
  { label: 'PATH', href: '#path' },
  { label: 'NOW', href: '#now' },
  { label: 'TALK', href: '#talk' },
];

const workSpans = [
  'md:col-span-3 md:row-span-2',
  'md:col-span-3 md:row-span-1',
  'md:col-span-2 md:row-span-1',
  'md:col-span-4 md:row-span-1',
  'md:col-span-3 md:row-span-1',
  'md:col-span-3 md:row-span-1',
];

function ProjectTile({ project, index }: { project: Project; index: number }) {
  const isPrimary = index === 0;
  const isAccent = index === 3;

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative flex min-h-[220px] flex-col justify-between overflow-hidden border-[2px] border-ink p-7 no-underline transition-transform duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] ${workSpans[index]} ${isPrimary ? 'bg-ink text-bg' : isAccent ? 'bg-accent text-bg dark:text-[#1c1916]' : 'bg-card text-ink'}`}
    >
      <div
        className={`pointer-events-none absolute -bottom-10 right-[-20px] font-display font-black leading-none tracking-[-0.05em] ${isPrimary ? 'text-[220px] md:text-[360px]' : 'text-[180px] md:text-[220px]'}`}
        style={{ color: 'currentColor', opacity: isAccent ? 0.18 : 0.08 }}
      >
        {project.kana}
      </div>
      <div className="relative flex items-start justify-between">
        <span className="font-mono text-[11px] tracking-[0.2em] opacity-70">/ {project.n}</span>
        <span className="font-mono text-[11px] tracking-[0.18em] opacity-70">{project.year}</span>
      </div>
      <div className="relative">
        <h3 className={`m-0 font-display font-black leading-[0.95] tracking-[-0.03em] ${isPrimary ? 'text-[44px] md:text-[64px]' : 'text-[34px] md:text-[38px]'}`}>
          {project.title}.
        </h3>
        <div className="mt-2 font-display text-[15px] font-medium opacity-85">{project.sub}</div>
        {(isPrimary || isAccent) && <p className="mt-[14px] max-w-[460px] text-[13px] leading-[1.55] opacity-75">{project.blurb}</p>}
        <div className="mt-[14px] flex flex-wrap gap-[6px]">
          {project.tags.map((tag) => (
            <span key={tag} className="border px-[8px] py-[3px] font-mono text-[10px] tracking-[0.1em] opacity-85" style={{ borderColor: 'currentColor' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function PortfolioPage() {
  return (
    <main className="mx-auto max-w-[1440px] bg-bg text-ink transition-colors duration-500">
      <header className="grid grid-cols-1 gap-5 border-b-[2px] border-ink px-5 py-5 font-mono text-[11px] tracking-[0.15em] md:grid-cols-[auto_1fr_auto_auto] md:items-center md:gap-6 md:px-10">
        <div className="flex items-center gap-[14px]">
          <div className="h-6 w-6 rounded-full bg-accent" />
          <span className="font-bold">RITHIK·SAI</span>
        </div>
        <TopBarClock />
        <nav className="flex flex-wrap gap-5 md:justify-self-end">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="no-underline">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="md:justify-self-end">
          <ThemeToggle />
        </div>
      </header>

      <section id="hero" className="relative grid min-h-[720px] grid-cols-1 border-b-[2px] border-ink md:grid-cols-[1.2fr_1fr]">
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <InkTrail color="var(--accent)" max={16} size={20} />
        </div>
        <div className="relative z-[2] border-b-[2px] border-ink px-5 pb-10 pt-[60px] md:border-b-0 md:border-r-[2px] md:px-10 md:pb-10">
          <div className="mb-10 flex justify-between font-mono text-[11px] tracking-[0.2em] text-sub md:mb-[60px]">
            <span>FOLIO / 2026</span>
            <span>NO. 001</span>
          </div>
          <h1 className="m-0 font-display text-[82px] font-black leading-[0.85] tracking-[-0.05em] sm:text-[112px] md:text-[160px] lg:text-[220px]">
            R<span className="text-accent">I</span>THIK
            <br />
            S<span className="text-accent italic">A</span>I
          </h1>
          <div className="mt-10 flex items-center gap-[14px] font-mono text-[11px] tracking-[0.2em] text-sub md:absolute md:bottom-10 md:left-10 md:mt-0 md:text-[13px]">
            <span className="inline-block h-[2px] w-7 bg-accent" />
            ENGINEER · BUILDS THINGS THAT THINK
          </div>
        </div>

        <div className="relative z-[2] grid grid-cols-1 md:grid-rows-3">
          <div className="relative overflow-hidden border-b-[2px] border-ink px-5 py-9 md:px-10">
            <div className="absolute right-[-20px] top-[-10px] font-display text-[180px] font-black leading-none tracking-[-0.06em] text-accent opacity-90 md:right-[-30px] md:text-[240px]">あ</div>
            <div className="relative font-mono text-[11px] tracking-[0.2em] text-sub">STATEMENT / 01</div>
            <p className="relative mt-3 max-w-[320px] font-display text-[20px] font-medium leading-[1.35] md:text-[22px]">{RITHIK.statement}</p>
          </div>
          <div className="border-b-[2px] border-ink bg-accent px-5 py-9 text-bg dark:text-[#1c1916] md:px-10">
            <div className="font-mono text-[11px] tracking-[0.2em] opacity-80">NOW SHOWING</div>
            <div className="mt-[10px] font-display text-[30px] font-black leading-[1.05] tracking-[-0.02em] md:text-[36px]">{RITHIK.nowShowing}</div>
            <div className="mt-4 font-mono text-[11px] tracking-[0.18em]">→ READ MORE</div>
          </div>
          <div className="grid grid-cols-2 px-5 py-9 md:px-10">
            {[
              { k: 'BASED', v: RITHIK.based },
              { k: 'STATUS', v: RITHIK.status },
              { k: 'STACK', v: RITHIK.stack },
              { k: 'YEARS', v: RITHIK.years },
            ].map((item, index) => (
              <div
                key={item.k}
                className={`py-[14px] ${index % 2 === 0 ? 'border-r border-rule pr-4' : 'pl-4'} ${index < 2 ? 'border-b border-rule pb-[14px]' : 'pt-[14px]'}`}
              >
                <div className="font-mono text-[10px] tracking-[0.2em] text-sub">{item.k}</div>
                <div className="mt-1 font-display text-[20px] font-bold">{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="overflow-hidden whitespace-nowrap border-b-[2px] border-ink bg-ink py-4 text-bg">
        <div className="inline-block animate-marquee-c font-display text-[22px] font-black tracking-[-0.01em] md:text-[28px]">
          {Array.from({ length: 3 }).map((_, index) => (
            <span key={index}>
              {MARQUEE_ITEMS.map((item) => `${item} · `).join('')}　
            </span>
          ))}
        </div>
      </div>

      <section className="grid grid-cols-1 border-b-[2px] border-ink md:grid-cols-[1fr_1.4fr]">
        <div className="overflow-hidden border-b-[2px] border-ink px-5 py-[60px] md:border-b-0 md:border-r-[2px] md:px-10">
          <div className="mb-[30px] font-mono text-[11px] tracking-[0.25em] text-sub">CHAPTER 02 · ABOUT / 自 己</div>
          <h2 className="m-0 font-display text-[52px] font-black leading-[0.9] tracking-[-0.04em] sm:text-[64px] md:text-[86px]">
            HUMAN<span className="text-accent">·</span>
            <br />
            SCALE
            <br />
            <span className="text-accent">SOFTW</span>ARE.
          </h2>
          <div className="mt-[30px] flex gap-2">
            <span className="h-[60px] w-[60px] bg-accent" />
            <span className="h-[60px] w-[60px] rounded-full bg-ink" />
            <span className="h-[60px] w-[60px] border-[3px] border-ink bg-transparent" />
            <span className="h-[60px] w-[60px] scale-[0.7] rotate-45 bg-ink" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 px-5 py-[60px] md:grid-cols-2 md:px-10">
          <div className="text-[17px] leading-[1.65] text-sub">
            <p className="mb-[18px] mt-0">{RITHIK.about[0]}</p>
            <p className="m-0">{RITHIK.about[1]}</p>
          </div>
          <div>
            <div className="mb-[14px] font-mono text-[11px] tracking-[0.2em] text-sub">I CARE ABOUT —</div>
            <ul className="m-0 list-none p-0">
              {RITHIK.aboutCare.map((item, index) => (
                <li key={item} className="grid grid-cols-[32px_1fr] border-b border-rule py-3 font-display text-[17px] font-medium">
                  <span className="font-mono text-[11px] tracking-[0.1em] text-accent">0{index + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="work" className="border-b-[2px] border-ink px-5 pb-20 pt-[60px] md:px-10">
        <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
          <h2 className="m-0 font-display text-[58px] font-black leading-[0.9] tracking-[-0.04em] sm:text-[72px] md:text-[96px]">
            WORK <span className="text-accent italic">06.</span>
          </h2>
          <div className="font-mono text-[12px] tracking-[0.2em] text-sub">↓ HOVER FOR DETAILS · ク リ ッ ク</div>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-6 md:auto-rows-[220px]">
          {RITHIK.projects.map((project, index) => (
            <ProjectTile key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="path" className="grid grid-cols-1 border-b-[2px] border-ink md:grid-cols-[1fr_1.6fr]">
        <div className="border-b-[2px] border-ink bg-ink px-5 py-[60px] text-bg md:border-b-0 md:border-r-[2px] md:px-10">
          <div className="mb-[30px] font-mono text-[11px] tracking-[0.25em] opacity-60">CHAPTER 03 · PATH / 履 歴</div>
          <h2 className="m-0 font-display text-[62px] font-black leading-[0.88] tracking-[-0.04em] sm:text-[74px] md:text-[92px]">
            FIVE
            <br />
            YE<span className="text-accent">ARS</span>
            <br />
            OF
            <br />
            SHIPP<span className="text-accent">I</span>NG.
          </h2>
          <a href={RITHIK.resume} target="_blank" rel="noreferrer" className="mt-9 inline-block bg-accent px-[22px] py-[14px] font-mono text-[12px] font-bold tracking-[0.18em] text-[#1c1916] no-underline">
            ↗ FULL RÉSUMÉ — PDF
          </a>
        </div>
        <div className="px-5 py-[60px] md:px-10">
          {RITHIK.experience.map((item, index) => (
            <div key={`${item.yr}-${item.role}`} className={`grid gap-5 border-b-[2px] border-rule py-[26px] md:grid-cols-[60px_200px_1fr_1.2fr] md:gap-[30px] md:items-center ${index === 0 ? 'border-t-[2px] border-t-ink' : ''}`}>
              <div className="font-display text-[48px] font-black tracking-[-0.04em] text-accent md:text-[56px]">0{index + 1}</div>
              <div className="font-mono text-[12px] tracking-[0.1em] text-sub">{item.yr}</div>
              <div>
                <div className="font-display text-[24px] font-bold">{item.role}</div>
                <div className="mt-1 font-mono text-[12px] text-sub">@ {item.co}</div>
              </div>
              <div className="text-[14px] leading-[1.55] text-sub">{item.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="now" className="border-b-[2px] border-ink px-5 pb-20 pt-[60px] md:px-10">
        <div className="mb-10 flex items-center gap-6">
          <span className="h-[14px] w-[14px] rounded-full bg-accent animate-pulse-c" />
          <h2 className="m-0 font-display text-[52px] font-black tracking-[-0.04em] sm:text-[64px] md:text-[80px]">
            NOW <span className="text-accent italic">—</span> 現 在.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {RITHIK.now.map((item, index) => (
            <div key={item.k} className="flex min-h-[200px] flex-col justify-between border-[2px] border-ink bg-card p-6">
              <div className="font-mono text-[11px] tracking-[0.2em] text-accent">/ {String(index + 1).padStart(2, '0')} · {item.k.toUpperCase()}</div>
              <div className="font-display text-[18px] font-medium leading-[1.4]">{item.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="talk" className="bg-accent px-5 pb-[50px] pt-[60px] text-[#1c1916] md:px-10">
        <div className="mb-5 font-mono text-[12px] tracking-[0.2em]">CHAPTER 05 · TALK TO ME / 連 絡</div>
        <h2 className="m-0 font-display text-[72px] font-black leading-[0.85] tracking-[-0.06em] sm:text-[120px] md:text-[180px] lg:text-[240px]">
          MAIL
          <br />
          ME<span className="italic">.</span>
        </h2>
        <div className="mt-[50px] grid grid-cols-1 border-y-[2px] border-[#1c1916] md:grid-cols-2 xl:grid-cols-4">
          {[
            { k: 'EMAIL', v: RITHIK.email, h: `mailto:${RITHIK.email}` },
            { k: 'GITHUB', v: '@rithiksai', h: RITHIK.github },
            { k: 'LINKEDIN', v: 'in/rithik-sai', h: RITHIK.linkedin },
            { k: 'RÉSUMÉ', v: 'PDF · DRIVE', h: RITHIK.resume },
          ].map((item, index) => (
            <a
              key={item.k}
              href={item.h}
              target="_blank"
              rel="noreferrer"
              className={`group flex flex-col gap-2 px-5 py-6 no-underline transition-colors duration-200 hover:bg-[#1c1916] ${index < 3 ? 'xl:border-r-[2px] xl:border-r-[#1c1916]' : ''} ${index < 1 ? 'md:border-r-[2px] md:border-r-[#1c1916] xl:border-r-[2px]' : ''} ${index < 2 ? 'md:border-b-[2px] md:border-b-[#1c1916] xl:border-b-0' : ''}`}
            >
              <span className="font-mono text-[11px] tracking-[0.25em] opacity-70 transition-colors duration-200 group-hover:text-accent">{item.k}</span>
              <span className="font-display text-[22px] font-bold transition-colors duration-200 group-hover:text-accent">{item.v}</span>
              <span className="font-mono text-[11px] transition-colors duration-200 group-hover:text-accent">↗</span>
            </a>
          ))}
        </div>
        <div className="mt-[50px] flex flex-col gap-2 font-mono text-[11px] tracking-[0.2em] md:flex-row md:justify-between">
          <span>© 2026 RITHIK SAI</span>
          <span>SET IN ZEN KAKU GOTHIC NEW + JETBRAINS MONO</span>
          <span>あ り が と う</span>
        </div>
      </section>
    </main>
  );
}
