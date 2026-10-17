import { useLanguage } from '@/i18n/useLanguage';

export default function Marquee() {

  const { t } = useLanguage();

  const items = t.marquee.items;

  return (

    <section className="overflow-hidden border-y border-ivory/10 bg-espresso-400 py-7 lg:py-9" aria-hidden="true">

      <div className="marquee-track flex w-max items-center">

        {[0, 1].map((copy) => (

          <div key={copy} className="flex shrink-0 items-center">

            {items.map((item, i) => (

              <span key={`${copy}-${i}`} className="flex items-center">

                <span

                  className={`whitespace-nowrap px-7 font-serif text-4xl font-light sm:text-5xl lg:text-6xl ${

                    i % 2 === 1 ? 'marquee-outline italic' : 'text-ivory'

                  }`}

                >

                  {item}

                </span>

                <span className="h-2 w-2 rotate-45 bg-brass/70" aria-hidden="true" />

              </span>

            ))}

          </div>

        ))}

      </div>

    </section>

  );

}
