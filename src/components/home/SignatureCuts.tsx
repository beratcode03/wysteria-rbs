import { useRef, type MouseEvent } from 'react';

import { Link } from 'react-router-dom';

import { ArrowRight, Flame } from 'lucide-react';

import { products } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import { Eyebrow } from '@/components/SectionHeading';

const signatureIds = ['p11', 'p15', 'p06', 'p12', 'p02'];

export default function SignatureCuts() {

  const { t } = useLanguage();

  const items = signatureIds

    .map((id) => products.find((p) => p.id === id))

    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const peekRef = useRef<HTMLDivElement>(null);

  const peekImgRef = useRef<HTMLImageElement>(null);

  const rowRef = useRef<HTMLElement | null>(null);

  const onMove = (e: MouseEvent) => {

    const el = peekRef.current;

    const row = rowRef.current;

    if (!el || !row) return;

    const rect = row.getBoundingClientRect();

    const w = el.offsetWidth;

    const h = el.offsetHeight;

    const x =

      e.clientX + 28 + w > window.innerWidth - 16

        ? e.clientX - 28 - w

        : e.clientX + 28;

    const y = Math.min(

      Math.max(rect.top + rect.height / 2 - h / 2, 16),

      window.innerHeight - h - 16,

    );

    el.style.transform = `translate(${x}px, ${y}px)`;

  };

  const showPeek = (src: string, row: HTMLElement) => {

    rowRef.current = row;

    if (peekImgRef.current) peekImgRef.current.src = src;

    peekRef.current?.classList.add('is-on');

  };

  const hidePeek = () => peekRef.current?.classList.remove('is-on');

  return (

    <section className="bg-ivory px-6 py-24 lg:px-12 lg:py-32" onMouseMove={onMove}>

      <div className="mx-auto max-w-[1400px]">

        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-x-10 gap-y-6">

          <div>

            <Eyebrow className="text-brass-dark">{t.signature.eyebrow}</Eyebrow>

            <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-[1.08] text-espresso sm:text-5xl lg:text-6xl">

              <span className="mask-line"><span className="mask-line-inner">{t.signature.title1}</span></span>

              <span className="mask-line"><span className="mask-line-inner italic text-brass-dark">{t.signature.title2}</span></span>

            </h2>

          </div>

          <p className="max-w-sm pb-2 text-sm leading-relaxed text-espresso/55">

            {t.signature.copy}

          </p>

        </Reveal>

        <Reveal>

          <ol className="border-t border-espresso/15" onMouseLeave={hidePeek}>

            {items.map((item, i) => {

              const localized = t.products[item.id];

              return (

                <li

                  key={item.id}

                  className="group border-b border-espresso/15"

                  onMouseEnter={(e) => showPeek(item.image, e.currentTarget)}

                >

                  <Link

                    to="/menu"

                    className="flex items-baseline gap-5 py-6 transition-all duration-300 group-hover:pl-3 sm:gap-8 sm:py-8"

                  >

                    <span className="w-8 shrink-0 font-serif text-sm italic text-espresso/35 transition-colors group-hover:text-brass">

                      {String(i + 1).padStart(2, '0')}

                    </span>

                    <span className="min-w-0 flex-1">

                      <span className="flex flex-wrap items-baseline gap-x-3">

                        <span className="font-serif text-3xl font-medium text-espresso transition-colors duration-300 group-hover:text-brass-dark sm:text-4xl lg:text-5xl">

                          {localized?.name ?? item.name}

                        </span>

                        {item.featured && (

                          <span className="inline-flex translate-y-[-4px] items-center gap-1" title={t.signature.chefsPick}>

                            <Flame size={14} className="text-brass" aria-hidden="true" />

                            <span className="sr-only">{t.signature.chefsPick}</span>

                          </span>

                        )}

                      </span>

                      <span className="mt-1.5 block font-serif text-sm italic text-espresso/50">

                        {localized?.notes ?? item.description}

                      </span>

                    </span>

                    <span className="mx-2 hidden flex-1 -translate-y-1 border-b border-dotted border-espresso/25 transition-colors group-hover:border-brass/50 sm:block" aria-hidden="true" />

                    <span className="shrink-0 font-serif text-xl text-espresso/70 transition-colors group-hover:text-espresso sm:text-2xl">

                      ₺{item.price}

                    </span>

                    <ArrowRight

                      size={18}

                      className="shrink-0 -translate-x-1 text-brass opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"

                    />

                  </Link>

                </li>

              );

            })}

          </ol>

        </Reveal>

        <Reveal delay={1}>

          <Link

            to="/menu"

            className="group mt-10 inline-flex items-center gap-2.5 border border-espresso/30 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-wide-3 text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-ivory"

          >

            {t.signature.ctaAll}

            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

          </Link>

        </Reveal>

      </div>

      {}

      <div ref={peekRef} className="peek" aria-hidden="true">

        <img ref={peekImgRef} alt="" />

      </div>

    </section>

  );

}
