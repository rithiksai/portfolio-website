'use client';

import { useEffect, useState } from 'react';

export function TopBarClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    let intervalId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => setNow(new Date()), 1000);
    }, 6000);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, []);

  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  return (
    <div className="text-sub hidden text-[11px] tracking-[0.15em] md:block">
      ENGINEER / AI / iOS — {hh}:{mm}:<span className="text-accent">{ss}</span> PT
    </div>
  );
}
