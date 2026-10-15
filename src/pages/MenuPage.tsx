import { useRef, useState, type MouseEvent } from 'react';

import { Link } from 'react-router-dom';

import { ArrowRight, Flame } from 'lucide-react';

import { products, categories } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import PageHeader from '@/components/PageHeader';

import Reveal from '@/components/Reveal';

export default function MenuPage() {

  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const { t } = useLanguage();

  const activeIndex = categories.indexOf(activeCategory);

  const filtered = products.filter((p) => p.category === activeCategory);

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

    <>

      <PageHeader

        eyebrow={t.menu.eyebrow}

        title={t.menu.title}

        subtitle={t.menu.subtitle}

        crumb={t.menu.crumb}

      />

      <section className="bg-ivory px-6 py-16 lg:px-12 lg:py-24" onMouseMove={onMove}>

        <div className="mx-auto max-w-[1400px]">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">

            {}

            <aside className="hidden lg:col-span-3 lg:block">

              <nav className="sticky top-28">

                <p className="mb-5 text-[11px] font-semibold uppercase tracking-wide-3 text-espresso/40">

                  {t.menu.course}

                </p>

                <ul className="border-l border-espresso/15">

                  {categories.map((cat, i) => {

                    const active = cat === activeCategory;

                    return (

                      <li key={cat}>

                        <button

                          onClick={() => setActiveCategory(cat)}

                          aria-pressed={active}

                          className={`group relative flex w-full items-baseline gap-3 py-3 pl-6 text-left transition-colors duration-300 ${

                            active ? 'text-espresso' : 'text-espresso/45 hover:text-espresso/80'

                          }`}

                        >

                          <span

                            className={`absolute -left-px top-0 h-full w-px bg-brass transition-transform duration-300 ${

                              active ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-50'

                            }`}

                            aria-hidden="true"

                          />

                          <span className={`font-serif text-sm italic ${active ? 'text-brass-dark' : 'text-espresso/30'}`}>

                            {String(i + 1).padStart(2, '0')}

                          </span>

                          <span className={`font-serif text-xl ${active ? 'font-medium' : ''}`}>

                            {t.menu.categories[cat] ?? cat}

                          </span>

                        </button>

                      </li>

                    );

                  })}

                </ul>

              </nav>

            </aside>

            {}

            <div className="sticky top-16 z-30 -mx-6 bg-ivory/95 px-6 py-3 backdrop-blur-md lg:hidden">

              <div className="flex gap-1.5 overflow-x-auto scrollbar-none">

                {categories.map((cat) => {

                  const active = cat === activeCategory;

                  return (

                    <button

                      key={cat}

                      onClick={() => setActiveCategory(cat)}

                      aria-pressed={active}

                      className={`shrink-0 border px-4 py-2 text-[11px] font-semibold uppercase tracking-wide-2 transition-all duration-300 ${

                        active

                          ? 'border-espresso bg-espresso text-ivory'

                          : 'border-espresso/20 text-espresso/60 hover:border-espresso/50'

                      }`}

                    >

                      {t.menu.categories[cat] ?? cat}

                    </button>

                  );

                })}

              </div>

            </div>

            {}

            <div className="lg:col-span-9">

              <div key={activeCategory}>

                <div className="mb-4 flex items-baseline gap-4">

                  <span className="font-serif text-sm italic text-brass-dark">

                    {String(activeIndex + 1).padStart(2, '0')}

                  </span>

                  <h2 className="font-serif text-3xl font-light text-espresso sm:text-4xl">

                    {t.menu.categories[activeCategory] ?? activeCategory}

                  </h2>

                  <span className="h-px flex-1 bg-espresso/15" aria-hidden="true" />

                </div>

                <div className="grid grid-cols-1 gap-x-14 md:grid-cols-2" onMouseLeave={hidePeek}>

                  {filtered.map((product, index) => {

                    const localized = t.products[product.id];

                    return (

                      <article

                        key={product.id}

                        className="group py-6 opacity-0"

                        style={{ animation: `fadeUp 0.5s ease-out ${index * 0.05}s forwards` }}

                        onMouseEnter={(e) => showPeek(product.image, e.currentTarget)}

                      >

                        <div className="flex items-baseline gap-x-3">

                          <h3 className="font-serif text-xl font-medium text-espresso transition-colors group-hover:text-brass-dark sm:text-2xl">

                            {localized?.name ?? product.name}

                          </h3>

                          {product.featured && (

                            <span className="inline-flex shrink-0 items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide-2 text-brass-dark">

                              <Flame size={11} aria-hidden="true" />

                              <span className="sr-only">{t.menu.popular}</span>

                              {t.menu.popular}

                            </span>

                          )}

                          <span className="mx-1 min-w-4 flex-1 -translate-y-1 border-b border-dotted border-espresso/25 transition-colors duration-300 group-hover:border-brass/50" aria-hidden="true" />

                          <span className="shrink-0 font-serif text-lg text-espresso/80">

                            ₺{product.price}

                          </span>

                        </div>

                        <p className="mt-1.5 font-serif text-sm italic leading-relaxed text-espresso/50">

                          {localized?.notes ?? product.description}

                        </p>

                      </article>

                    );

                  })}

                </div>

              </div>

              {}

              <div className="mt-14 border-t border-espresso/15 pt-8">

                <p className="max-w-xl text-sm leading-relaxed text-espresso/50">

                  {t.menu.note}

                </p>

                <Reveal className="mt-8">

                  <Link

                    to="/contact"

                    className="group inline-flex items-center gap-2.5 border border-espresso/30 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-wide-3 text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-ivory"

                  >

                    {t.menu.cta}

                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

                  </Link>

                </Reveal>

              </div>

            </div>

          </div>

        </div>

        {}

        <div ref={peekRef} className="peek" aria-hidden="true">

          <img ref={peekImgRef} alt="" />

        </div>

      </section>

    </>

  );

}
