import { Link } from 'react-router-dom';

import { ArrowRight, Phone } from 'lucide-react';

import { siteConfig } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import Magnetic from '@/components/Magnetic';

import { Eyebrow } from '@/components/SectionHeading';

export default function CtaBand() {

  const { t } = useLanguage();

  return (

    <section className="relative overflow-hidden bg-espresso-400 px-6 py-24 lg:px-12 lg:py-32">

      {}

      <div className="ember-glow pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

      <Reveal className="relative mx-auto max-w-3xl text-center">

        <Eyebrow className="text-brass-light">{t.cta.eyebrow}</Eyebrow>

        <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">

          <span className="mask-line"><span className="mask-line-inner">{t.cta.title1}</span></span>

          <span className="mask-line"><span className="mask-line-inner italic text-brass-light">{t.cta.title2}</span></span>

        </h2>

        <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-ivory/60">

          {t.cta.copy}

        </p>

        {}

        <a

          href={`tel:${siteConfig.phoneRaw}`}

          className="group mt-10 inline-flex items-baseline gap-3 font-serif text-3xl font-light tracking-wide text-ivory transition-colors hover:text-brass-light sm:text-4xl"

        >

          <Phone size={22} className="translate-y-0.5 text-brass-light" />

          {siteConfig.phone}

        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

          <Magnetic>

            <Link

              to="/menu"

              className="sheen group inline-flex items-center gap-2.5 bg-brass px-8 py-4 text-[12px] font-semibold uppercase tracking-wide-3 text-ivory transition-colors duration-300 hover:bg-brass-dark"

            >

              {t.cta.viewMenu}

              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

            </Link>

          </Magnetic>

          <Magnetic strength={0.22}>

            <a

              href={`tel:${siteConfig.phoneRaw}`}

              className="inline-flex items-center gap-2.5 border border-ivory/30 px-8 py-4 text-[12px] font-semibold uppercase tracking-wide-3 text-ivory transition-all duration-300 hover:border-ivory/70 hover:bg-ivory/5"

            >

              {t.cta.reserve}

            </a>

          </Magnetic>

        </div>

      </Reveal>

    </section>

  );

}
