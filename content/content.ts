export type Project = {
  n: string;
  slug: string;
  kana: string;
  title: string;
  sub: string;
  tags: string[];
  year: string;
  blurb: string;
  githubUrl?: string;
  appStoreUrl?: string;
};

export type ExperienceItem = {
  yr: string;
  role: string;
  co: string;
  note: string;
};

export type NowItem = {
  k: string;
  v: string;
};

export type PortfolioContent = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  about: string[];
  nowShowing: string;
  statement: string;
  based: string;
  status: string;
  stack: string;
  years: string;
  aboutCare: string[];
  now: NowItem[];
  projects: Project[];
  experience: ExperienceItem[];
};

export const RITHIK: PortfolioContent = {
  name: 'Rithik Sai',
  role: 'AI Engineer · iOS Developer',
  tagline: 'Building AI products, iOS apps, and production-grade workflow systems.',
  location: 'India · available worldwide',
  email: 'rithikmotupalli@gmail.com',
  github: 'https://github.com/rithiksai',
  linkedin: 'https://www.linkedin.com/in/rithik-sai-295bbb256/',
  resume: '/rithik-sai-resume.pdf',
  statement: 'I build production-grade AI agents, workflow automation systems, and iOS products that feel fast, useful, and real.',
  nowShowing: 'Picto - AI photo editor for aesthetic transformations, built and shipped for iOS.',
  based: 'India',
  status: 'Open to opportunities',
  stack: 'Python / FastAPI / Swift',
  years: '1+',
  about: [
    "I'm an AI engineer focused on building products that actually ship, from agent orchestration and workflow automation to mobile apps and backend systems. I like turning messy ideas into usable software with strong execution and clean product thinking.",
    "My work spans Python, FastAPI, OpenAI Agents SDK, GCP, React, Next.js, and Swift. Recently I've been building AI office workflows, iOS apps, and end-to-end systems that combine good UX with practical AI capabilities.",
  ],
  aboutCare: [
    'Production-ready AI systems.',
    'Fast, useful product execution.',
    'Workflow automation that saves real time.',
    'Clean frontend and developer experience.',
    'Shipping ideas end-to-end.',
  ],
  now: [
    { k: 'Building', v: 'AI workflow systems, iOS apps, and automation tools that move from prototype to production fast.' },
    { k: 'Working', v: 'As an AI Engineer Intern at Affint, building document, PPT, and workflow agents with Python, FastAPI, OpenAI Agents SDK, and GCP.' },
    { k: 'Learning', v: 'Deeper agent orchestration patterns, event-driven backend systems, and better on-device product experiences.' },
    { k: 'Open to', v: 'AI engineering roles, applied ML work, and product-focused software opportunities.' },
  ],
  projects: [
    {
      n: '01',
      slug: 'picto',
      kana: 'あ',
      title: 'Picto',
      sub: 'AI photo editor for iOS',
      tags: ['Swift', 'iOS', 'APIs'],
      year: '2026',
      blurb: 'Built and launched an AI-powered iOS photo editing app for aesthetic transformations and creative edits. Designed, developed, and shipped the app end-to-end with AI-driven editing workflows and a polished SwiftUI experience.',
      appStoreUrl: 'https://apps.apple.com/us/app/picto-ai-photo-editor/id6758458960',
    },
    {
      n: '02',
      slug: 'financial-insights-assistant',
      kana: 'い',
      title: 'Financial Insights Assistant',
      sub: 'Multi-agent RAG system for SEC query answering',
      tags: ['Python', 'FastAPI', 'LangChain'],
      year: '2025',
      blurb: 'Built a modular AI assistant for financial query answering using SEC filings, vector retrieval, and orchestrated LLM workflows, then deployed it with a voice-enabled Streamlit interface.',
      githubUrl: 'https://github.com/rithiksai/multi_agent_finance_assistant',
    },
    {
      n: '03',
      slug: 'defi-copy-trading-bot',
      kana: 'う',
      title: 'DeFi Copy Trading Bot',
      sub: 'Low-latency Solana wallet mirroring',
      tags: ['Rust', 'Solana', 'WebSockets'],
      year: '2025',
      blurb: 'Built a real-time Solana copy trading bot using low-latency wallet monitoring, swap replication, and smart contract interaction workflows for predictive trade execution.',
      githubUrl: 'https://github.com/rithiksai/solona_copy_trade',
    },
    {
      n: '04',
      slug: 'trend-intelligence-agent',
      kana: 'あ',
      title: 'Trend Intelligence Agent',
      sub: 'Real-time social signal and trend workflow',
      tags: ['Python', 'APIs', 'Automation'],
      year: '2025',
      blurb: 'Built a workflow for scraping, analyzing, and surfacing real-time social trends and engagement signals to support faster market and content decisions.',
      githubUrl: 'https://github.com/rithiksai/52wh-breakout-finder',
    },
    {
      n: '05',
      slug: 'skribbl-in',
      kana: 'い',
      title: 'Skribbl.in',
      sub: 'Real-time multiplayer drawing and guessing game',
      tags: ['React', 'Node.js', 'Socket.io'],
      year: '2024',
      blurb: 'Built a full-stack multiplayer web game with real-time drawing, chat, and score logic where players draw while others guess the word live.',
      githubUrl: 'https://github.com/rithiksai/scribble-game',
    },
    {
      n: '06',
      slug: 'chest-xray-report-generator',
      kana: 'う',
      title: 'Chest X-Ray Report AI',
      sub: 'Image-to-text medical report generation',
      tags: ['PyTorch', 'Transformers', 'Matplotlib'],
      year: '2024',
      blurb: 'Built an image-to-text generation system that analyzes chest X-rays using fine-tuned models to generate structured medical reports.',
    },
  ],
  experience: [
    {
      yr: 'Jul 2025 — Present',
      role: 'AI Engineer Intern',
      co: 'Affint (previously Slideoo)',
      note: 'Built workflow automation infrastructure for an AI office suite, created document and productivity agents, and implemented event-driven backend systems on GCP using Cloud Run, Pub/Sub, Cloud Functions, and Cloud Scheduler.',
    },
    {
      yr: 'Oct 2023 — Dec 2023',
      role: 'Internship Trainee',
      co: 'cSigma Finance Inc',
      note: 'Worked on frontend development, UI improvements, and blockchain feature integration while gaining hands-on experience with Web3 products and finance-focused applications.',
    },
    {
      yr: '2021 — Present',
      role: 'B.Tech in Computer Science and Engineering',
      co: 'Vellore Institute of Technology',
      note: 'Built projects across AI, web development, backend systems, automation, game development, and iOS while developing a strong product-engineering foundation.',
    },
  ],
};

export const MARQUEE_ITEMS = ['PYTHON', 'FASTAPI', 'OPENAI AGENTS SDK', 'あ', 'SWIFT', 'NEXT.JS', 'い', 'GCP', 'RAG', 'う', 'REACT', 'AUTOMATION', 'え', 'SUPABASE', 'お'];
