import { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import { ArrowRight, Phone } from 'lucide-react';

import { getOpenStatus, siteConfig, siteImages } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import { useParallax } from '@/hooks/useScrollReveal';

import Magnetic from '@/components/Magnetic';

export default function Hero() {

  const { t } = useLanguage();

  const [status] = useState(() => getOpenStatus());

  const videoRef = useRef<HTMLVideoElement>(null);

  const videoWrapRef = useParallax(0.09);

  useEffect(() => {

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

      videoRef.current?.pause();

    }

  }, []);

  return (

    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-espresso-400">

      {}

      <div ref={videoWrapRef} className="absolute inset-0 scale-[1.15] will-change-transform">

        <video

          ref={videoRef}

          className="h-full w-full object-cover"

          autoPlay

          muted

          loop

          playsInline

          poster={siteImages.heroPoster}

          aria-hidden="true"

        >

          <source src={siteImages.heroVideo} type="video/mp4" />

        </video>

      </div>

      {}

      <div className="absolute inset-0 bg-espresso-400/45" aria-hidden="true" />

      <div

        className="absolute inset-0 bg-gradient-to-t from-espresso-400 via-espresso-400/35 to-espresso-400/55"

        aria-hidden="true"

      />

      {}

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-28 pt-40 lg:px-12 lg:pb-32">

        <div className="animate-fade-up flex items-center gap-4" style={{ animationDelay: '0.9s' }}>

          <span className="h-px w-12 bg-brass" aria-hidden="true" />

          <span className="font-serif text-lg italic text-brass-light">

            {t.hero.eyebrow}

          </span>

        </div>

        <h1 className="mt-7 font-serif text-[clamp(3.4rem,11vw,9.5rem)] font-light leading-[0.94] tracking-[-0.01em] text-ivory">

          <span className="block overflow-hidden">

            <span className="hero-line" style={{ animationDelay: '1s' }}>{t.hero.title1}</span>

          </span>

          <span className="block overflow-hidden">

            <span className="hero-line italic text-brass-light" style={{ animationDelay: '1.12s' }}>{t.hero.title2}</span>

          </span>

          <span className="block overflow-hidden">

            <span className="hero-line" style={{ animationDelay: '1.24s' }}>{t.hero.title3}</span>

          </span>

        </h1>

        <p className="mt-9 max-w-lg animate-fade-up text-base leading-relaxed text-ivory/65" style={{ animationDelay: '1.4s' }}>

          {t.hero.subtitle}

        </p>

        <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-4" style={{ animationDelay: '1.55s' }}>

          <Magnetic>

            <Link

              to="/menu"

              className="sheen group inline-flex items-center gap-2.5 bg-brass px-8 py-4 text-[12px] font-semibold uppercase tracking-wide-3 text-ivory transition-colors duration-300 hover:bg-brass-dark"

            >

              {t.hero.ctaMenu}

              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

            </Link>

          </Magnetic>

          <Magnetic strength={0.22}>

            <a

              href={`tel:${siteConfig.phoneRaw}`}

              className="group inline-flex items-center gap-2.5 border border-ivory/30 px-8 py-4 text-[12px] font-semibold uppercase tracking-wide-3 text-ivory transition-all duration-300 hover:border-ivory/70 hover:bg-ivory/5"

            >

              <Phone size={14} />

              {t.hero.ctaReserve}

            </a>

          </Magnetic>

        </div>

        {}

        <div className="mt-14 hidden animate-fade-up items-center gap-3 sm:flex" style={{ animationDelay: '1.8s' }} aria-hidden="true">

          <span className="h-px w-14 bg-ivory/30" />

          <span className="animate-ember h-1.5 w-1.5 rotate-45 bg-brass-light" />

          <span className="text-[10px] font-semibold uppercase tracking-wide-4 text-ivory/40">

            {t.hero.scroll}

          </span>

        </div>

      </div>

      {}

      <div className="relative border-t border-ivory/10">

        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-4 text-[11px] uppercase tracking-wide-3 text-ivory/45 lg:px-12">

          <span>{siteConfig.shortAddress}</span>

          <span className="hidden sm:inline">est. {siteConfig.est}</span>

          <span className="inline-flex items-center gap-2">

            <span

              className={`h-1.5 w-1.5 rotate-45 ${status.open ? 'animate-ember bg-brass-light' : 'bg-ivory/30'}`}

              aria-hidden="true"

            />

            {status.open ? t.visit.open : t.visit.closed}

          </span>

        </div>

      </div>

    </section>

  );

}
