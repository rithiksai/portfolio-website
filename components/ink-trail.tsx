'use client';

import { useEffect, useRef, useState } from 'react';

type Dab = { id: number; x: number; y: number; r: number; rot: number };

export function InkTrail({ color, max = 16, size = 20 }: { color: string; max?: number; size?: number }) {
  const [dabs, setDabs] = useState<Dab[]>([]);
  const idRef = useRef(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const last = useRef({ x: 0, y: 0, t: 0 });

  useEffect(() => {
    return () => {
      setDabs([]);
    };
  }, []);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const now = performance.now();
    const dx = x - last.current.x;
    const dy = y - last.current.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 14 && now - last.current.t < 40) return;

    last.current = { x, y, t: now };
    const id = ++idRef.current;
    const r2 = Math.random() * 0.6 + 0.7;
    setDabs((current) => [...current.slice(-max + 1), { id, x, y, r: size * r2, rot: Math.random() * 360 }]);
    window.setTimeout(() => {
      setDabs((current) => current.filter((p) => p.id !== id));
    }, 1100);
  }

  return (
    <div ref={ref} onMouseMove={onMove} className="absolute inset-0 overflow-hidden pointer-events-auto">
      {dabs.map((p, i) => (
        <span
          key={p.id}
          className="pointer-events-none absolute rounded-full blur-[0.4px] animate-inkfade"
          style={{
            left: p.x - p.r / 2,
            top: p.y - p.r / 2,
            width: p.r,
            height: p.r,
            background: color,
            transform: `rotate(${p.rot}deg) scale(${1 - (i / max) * 0.4})`,
            opacity: 0.55 - (i / max) * 0.4,
            mixBlendMode: 'multiply',
          }}
        />
      ))}
    </div>
  );
}
