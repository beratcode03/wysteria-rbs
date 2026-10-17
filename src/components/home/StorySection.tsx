import { Link } from 'react-router-dom';

import { siteImages } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import { useParallax } from '@/hooks/useScrollReveal';

import Reveal from '@/components/Reveal';

import SmartImage from '@/components/SmartImage';

import { Eyebrow } from '@/components/SectionHeading';

export default function StorySection() {

  const { t } = useLanguage();

  const parallaxRef = useParallax(0.06);

  return (

    <section className="bg-espresso px-6 py-24 lg:px-12 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">

          {}

          <Reveal className="relative lg:col-span-6">

            <div className="overflow-hidden">

              <div ref={parallaxRef}>

                <SmartImage

                  src={siteImages.story1}

                  alt="Loş ışıklı salon ve açık ızgara"

                  aspect="aspect-[16/12]"

                  loading="lazy"

                />

              </div>

            </div>

            <div className="absolute -bottom-10 -right-4 w-40 overflow-hidden border-4 border-espresso shadow-2xl shadow-black/50 sm:-right-8 sm:w-56">

              <SmartImage

                src={siteImages.craft2}

                alt="Közde mühürlenmiş steak dilimi"

                aspect="aspect-[4/5]"

                loading="lazy"

              />

            </div>

          </Reveal>

          {}

          <Reveal delay={1} className="lg:col-span-5 lg:col-start-8">

            <Eyebrow className="text-brass-light">{t.story.eyebrow}</Eyebrow>

            <h2 className="mt-5 font-serif text-4xl font-light leading-[1.08] text-ivory sm:text-5xl">

              <span className="mask-line"><span className="mask-line-inner">{t.story.title1}</span></span>

              <span className="mask-line"><span className="mask-line-inner">{t.story.title2}</span></span>

              <span className="mask-line"><span className="mask-line-inner italic text-brass-light">{t.story.title3}</span></span>

            </h2>

            <p className="mt-7 text-base leading-relaxed text-ivory/60">{t.story.p1}</p>

            <p className="mt-4 text-base leading-relaxed text-ivory/60">{t.story.p2}</p>

            <ul className="mt-8 space-y-3">

              {t.story.features.map((f) => (

                <li key={f} className="flex items-center gap-3 text-sm text-ivory/70">

                  <span className="h-1.5 w-1.5 rotate-45 bg-brass" aria-hidden="true" />

                  {f}

                </li>

              ))}

            </ul>

            <Link

              to="/menu"

              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide-2 text-brass-light transition-colors hover:text-ivory"

            >

              {t.story.link}

              <span className="h-px w-8 bg-brass-light transition-all duration-300 group-hover:w-12 group-hover:bg-ivory" aria-hidden="true" />

            </Link>

          </Reveal>

        </div>

      </div>

    </section>

  );

}
