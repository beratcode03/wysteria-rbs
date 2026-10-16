import { useEffect, useState } from 'react';

export default function Preloader() {

  const [count, setCount] = useState(0);

  const [leaving, setLeaving] = useState(false);

  const [gone, setGone] = useState(false);

  useEffect(() => {

    let raf = 0;

    const start = performance.now();

    const duration = 1100;

    const tick = (now: number) => {

      const p = Math.min(1, (now - start) / duration);

      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));

      if (p < 1) raf = requestAnimationFrame(tick);

    };

    raf = requestAnimationFrame(tick);

    const t1 = setTimeout(() => setLeaving(true), 1350);

    const t2 = setTimeout(() => setGone(true), 2250);

    return () => {

      cancelAnimationFrame(raf);

      clearTimeout(t1);

      clearTimeout(t2);

    };

  }, []);

  if (gone) return null;

  return (

    <div

      className={`preloader-curtain fixed inset-0 z-[100] flex flex-col items-center justify-center bg-espresso-400 ${

        leaving ? 'is-leaving' : ''

      }`}

      aria-hidden="true"

    >

      <div className="flex items-baseline gap-4">

        <p className="animate-fade-up font-serif text-4xl font-light text-ivory sm:text-6xl" style={{ animationDelay: '0.1s' }}>

          Wysteria <span className="italic text-brass-light">Works</span>

        </p>

      </div>

      <div className="mt-6 flex animate-fade-up items-center gap-3" style={{ animationDelay: '0.3s' }}>

        <span className="h-px w-10 bg-ivory/20" />

        <span className="text-[10px] font-semibold uppercase tracking-wide-4 text-ivory/40">

          Fire Kitchen

        </span>

        <span className="h-px w-10 bg-ivory/20" />

      </div>

      {}

      <p className="absolute bottom-8 right-8 font-serif text-6xl font-light tabular-nums text-ivory/25 sm:text-7xl">

        {count}

      </p>

      <div className="absolute bottom-0 left-0 h-px bg-brass transition-none" style={{ width: `${count}%` }} aria-hidden="true" />

    </div>

  );

}
