import { useState } from 'react';

import { MapPin, Clock, ArrowRight } from 'lucide-react';

import { getOpenStatus, siteConfig } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import MapFallback from '@/components/MapFallback';

import { Eyebrow } from '@/components/SectionHeading';

export default function VisitSection() {

  const [status] = useState(() => getOpenStatus());

  const { t } = useLanguage();

  return (

    <section className="bg-ivory px-6 py-24 lg:px-12 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

          <Reveal className="lg:col-span-5">

            <Eyebrow className="text-brass-dark">{t.visit.eyebrow}</Eyebrow>

            <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-[1.08] text-espresso sm:text-5xl lg:text-6xl">

              <span className="mask-line"><span className="mask-line-inner">{t.visit.title}</span></span>

            </h2>

            <div className="mt-10 space-y-8">

              <div className="flex gap-4">

                <MapPin className="mt-1 flex-shrink-0 text-brass" size={20} />

                <div>

                  <p className="text-[11px] font-semibold uppercase tracking-wide-3 text-espresso/45">{t.visit.address}</p>

                  <p className="mt-1.5 text-base leading-relaxed text-espresso/75">{siteConfig.address}</p>

                </div>

              </div>

              <div className="flex gap-4">

                <Clock className="mt-1 flex-shrink-0 text-brass" size={20} />

                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">

                    <p className="text-[11px] font-semibold uppercase tracking-wide-3 text-espresso/45">{t.visit.hours}</p>

                    <span className="inline-flex items-center gap-2 text-sm text-espresso/60">

                      <span className={`h-1.5 w-1.5 rotate-45 ${status.open ? 'animate-ember bg-brass' : 'bg-espresso/30'}`} aria-hidden="true" />

                      {status.open ? t.visit.open : t.visit.closed}

                    </span>

                  </div>

                  <div className="mt-3 space-y-2">

                    {siteConfig.hoursRows.map((row, i) => (

                      <div key={row.key} className="flex items-baseline justify-between gap-8 text-base text-espresso/75">

                        <span>{t.visit.days[i]}</span>

                        <span className="flex-1 border-b border-dotted border-espresso/20" aria-hidden="true" />

                        <span className="text-espresso">{row.time}</span>

                      </div>

                    ))}

                    <p className="pt-1 text-xs uppercase tracking-wide-2 text-espresso/40">{t.visit.closedDay}</p>

                  </div>

                </div>

              </div>

            </div>

            <a

              href={siteConfig.directionsUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="sheen group mt-10 inline-flex items-center gap-2.5 bg-espresso px-8 py-4 text-[12px] font-semibold uppercase tracking-wide-3 text-ivory transition-all duration-300 hover:bg-plum-500"

            >

              {t.visit.cta}

              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

            </a>

          </Reveal>

          <Reveal delay={1} className="lg:col-span-7">

            <MapFallback />

          </Reveal>

        </div>

      </div>

    </section>

  );

}
