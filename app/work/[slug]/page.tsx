import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RITHIK } from '@/content/content';

type Params = { slug: string };

export function generateStaticParams() {
  return RITHIK.projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = RITHIK.projects.find((item) => item.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Rithik Sai`,
    description: project.blurb,
  };
}

export default function WorkDetailPage({ params }: { params: Params }) {
  const project = RITHIK.projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="mx-auto min-h-screen max-w-[1440px] bg-bg text-ink">
      <section className="border-b-[2px] border-ink px-5 py-5 font-mono text-[11px] tracking-[0.15em] md:px-10">
        <Link href="/" className="no-underline">← BACK / HOME</Link>
      </section>
      <section className="grid grid-cols-1 border-b-[2px] border-ink md:grid-cols-[1.1fr_0.9fr]">
        <div className="border-b-[2px] border-ink px-5 py-[60px] md:border-b-0 md:border-r-[2px] md:px-10">
          <div className="mb-6 font-mono text-[11px] tracking-[0.2em] text-sub">CASE STUDY / {project.n}</div>
          <h1 className="m-0 font-display text-[64px] font-black leading-[0.88] tracking-[-0.05em] sm:text-[88px] md:text-[124px]">
            {project.title}<span className="text-accent">.</span>
          </h1>
          <div className="mt-4 font-display text-[22px] font-medium leading-[1.3] md:text-[28px]">{project.sub}</div>
          <p className="mt-8 max-w-[720px] text-[16px] leading-[1.7] text-sub">{project.blurb}</p>
          {(project.githubUrl || project.appStoreUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border-[2px] border-ink px-4 py-3 font-mono text-[11px] font-bold tracking-[0.16em] no-underline transition-colors hover:bg-ink hover:text-bg"
                >
                  ↗ OPEN GITHUB
                </a>
              )}
              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border-[2px] border-ink bg-accent px-4 py-3 font-mono text-[11px] font-bold tracking-[0.16em] text-[#1c1916] no-underline transition-opacity hover:opacity-90"
                >
                  ↗ OPEN APP STORE
                </a>
              )}
            </div>
          )}
        </div>
        <div className="relative overflow-hidden px-5 py-[60px] md:px-10">
          <div className="absolute right-[-12px] top-[-20px] font-display text-[220px] font-black leading-none tracking-[-0.06em] text-accent opacity-15 md:text-[320px]">{project.kana}</div>
          <div className="relative space-y-8">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] text-sub">YEAR</div>
              <div className="mt-2 font-display text-[32px] font-bold">{project.year}</div>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] text-sub">STACK</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border-[2px] border-ink px-3 py-2 font-mono text-[11px] tracking-[0.1em]">{tag}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] text-sub">STATUS</div>
              <div className="mt-2 font-display text-[18px] font-medium leading-[1.5]">Detailed case study scaffolded. Full project narrative, metrics, and visuals can drop in here next without changing the layout system.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
