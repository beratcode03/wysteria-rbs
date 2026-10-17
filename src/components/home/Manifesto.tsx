import { siteConfig } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import { Eyebrow } from '@/components/SectionHeading';

export default function Manifesto() {

  const { t } = useLanguage();

  const stats = [

    { value: siteConfig.est, label: t.manifesto.stat1 },

    { value: '15–29', label: t.manifesto.stat2 },

    { value: '43', label: t.manifesto.stat3 },

  ];

  return (

    <section className="relative bg-espresso px-6 py-24 lg:px-12 lg:py-36">

      <div className="relative mx-auto max-w-[1400px]">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

          <Reveal className="lg:col-span-7">

            <Eyebrow className="text-brass-light">{t.manifesto.eyebrow}</Eyebrow>

            <h2 className="mt-6 max-w-xl text-balance font-serif text-4xl font-light leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">

              <span className="mask-line"><span className="mask-line-inner">{t.manifesto.line1}</span></span>

            </h2>

          </Reveal>

          <Reveal delay={1} className="flex flex-col justify-end lg:col-span-5">

            <p className="max-w-md text-base leading-relaxed text-ivory/60">

              {t.manifesto.copy}

            </p>

          </Reveal>

        </div>

        <Reveal delay={2} className="mt-16 lg:mt-20">

          <div className="grid grid-cols-3 divide-x divide-ivory/10 border-y border-ivory/10">

            {stats.map((s) => (

              <div key={s.label} className="px-4 py-8 text-center sm:px-8 lg:py-10">

                <p className="font-serif text-3xl font-light text-brass-light sm:text-5xl">{s.value}</p>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide-3 text-ivory/45 sm:text-[11px]">

                  {s.label}

                </p>

              </div>

            ))}

          </div>

        </Reveal>

      </div>

    </section>

  );

}
