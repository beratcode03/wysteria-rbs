import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import SmartImage from '@/components/SmartImage';

import { Eyebrow } from '@/components/SectionHeading';

import { siteImages } from '@/data/site';

export default function CraftSection() {

  const { t } = useLanguage();

  return (

    <section className="relative overflow-hidden bg-plum-600 px-6 py-24 lg:px-12 lg:py-32">

      {}

      <div className="ember-glow pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px]">

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">

          {}

          <Reveal className="lg:col-span-5">

            <Eyebrow className="text-brass-light">{t.craft.eyebrow}</Eyebrow>

            <h2 className="mt-5 font-serif text-4xl font-light leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">

              <span className="mask-line"><span className="mask-line-inner">{t.craft.title1}</span></span>

              <span className="mask-line"><span className="mask-line-inner italic text-brass-light">{t.craft.title2}</span></span>

            </h2>

            <div className="mt-10 overflow-hidden">

              <SmartImage

                src={siteImages.craft1}

                alt="Açık ateş üzerinde köz ızgarası"

                aspect="aspect-[16/10]"

                loading="lazy"

              />

            </div>

          </Reveal>

          {}

          <div className="lg:col-span-7 lg:pl-8">

            <ol>

              {t.craft.steps.map((step, i) => (

                <Reveal as="li" key={step.n} delay={(i + 1) as 1 | 2 | 3}>

                  <div className={`flex gap-6 py-8 sm:gap-10 lg:py-10 ${i > 0 ? 'border-t border-ivory/10' : ''}`}>

                    <span className="shrink-0 font-serif text-5xl font-light leading-none text-brass/60 sm:text-6xl" aria-hidden="true">

                      {step.n}

                    </span>

                    <div>

                      <h3 className="font-serif text-2xl font-medium text-ivory sm:text-3xl">{step.title}</h3>

                      <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/55 sm:text-base">

                        {step.copy}

                      </p>

                    </div>

                  </div>

                </Reveal>

              ))}

            </ol>

          </div>

        </div>

      </div>

    </section>

  );

}
