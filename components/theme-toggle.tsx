'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const dark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className="border-0 bg-ink px-[14px] py-[6px] font-mono text-[11px] font-bold tracking-[0.15em] text-bg transition-colors dark:bg-accent dark:text-[#1c1916]"
      aria-label="Toggle color theme"
    >
      {dark ? '☀ LIGHT' : '☾ DARK'}
    </button>
  );
}
