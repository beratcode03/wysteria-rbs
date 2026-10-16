import { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Menu as MenuIcon, X, Phone } from 'lucide-react';

import { brandLogo, siteConfig } from '@/data/site';

import { useScrollPosition, useHeaderHidden } from '@/hooks/useScrollReveal';

import { useLanguage } from '@/i18n/useLanguage';

import { getLenis } from '@/lib/smoothScroll';

import LangToggle from '@/components/LangToggle';

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const scrolled = useScrollPosition();

  const headerHidden = useHeaderHidden() && !open;

  const location = useLocation();

  const { t } = useLanguage();

  const isHome = location.pathname === '/';

  const isMenu = location.pathname === '/menu';

  const navLinks = [

    { to: '/', label: t.nav.home },

    { to: '/menu', label: t.nav.menuCta },

    { to: '/contact', label: t.nav.contact },

  ];

  useEffect(() => {

    const lenis = getLenis();

    if (open) {

      lenis?.stop();

      document.body.style.overflow = 'hidden';

    } else {

      lenis?.start();

      document.body.style.overflow = '';

    }

    return () => {

      lenis?.start();

      document.body.style.overflow = '';

    };

  }, [open]);

  useEffect(() => {

    setOpen(false);

  }, [location.pathname]);

  const transparent = isHome && !scrolled && !open;

  const barBg = transparent

    ? 'bg-transparent'

    : 'bg-espresso/90 backdrop-blur-lg border-b border-ivory/[0.08]';

  return (

    <>

      {}

      <div

        className={`fixed inset-x-0 top-0 z-50 hidden overflow-hidden border-b border-ivory/10 bg-espresso-400 transition-all duration-500 lg:block ${

          scrolled || !isHome ? 'h-0 border-transparent opacity-0' : 'h-9 opacity-100'

        }`}

      >

        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-12 text-[11px] tracking-wide-2 text-ivory/55">

          <span>{siteConfig.shortAddress}</span>

          <span className="text-ivory/35">Salı – Pazar · 12:00 – 23:00</span>

          <a href={`tel:${siteConfig.phoneRaw}`} className="transition-colors hover:text-brass-light">

            {siteConfig.phone}

          </a>

        </div>

      </div>

      <header

        className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${barBg} ${

          headerHidden ? '-translate-y-[120%]' : 'translate-y-0'

        } ${isHome && !scrolled ? 'top-0 lg:top-9' : 'top-0'}`}

      >

        <nav className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-all duration-500 lg:px-12 ${scrolled ? 'py-2.5' : 'py-3'}`}>

          {}

          <Link to="/" aria-label={t.nav.homeAria} className="group flex items-center">

            <img

              src={brandLogo}

              alt={siteConfig.name}

              className={`w-auto object-contain brightness-0 invert transition-all duration-500 group-hover:opacity-80 ${

                scrolled ? 'h-10 sm:h-12' : 'h-16 sm:h-20 lg:h-24'

              }`}

            />

          </Link>

          {}

          <div className="hidden items-center gap-9 lg:flex">

            {navLinks.map((link) => {

              const active = location.pathname === link.to;

              return (

                <Link

                  key={link.to}

                  to={link.to}

                  className={`relative text-[12px] font-semibold uppercase tracking-wide-3 transition-colors duration-300 ${

                    active ? 'text-brass-light' : 'text-ivory/70'

                  } after:absolute after:-bottom-1.5 after:left-1/2 after:h-px after:w-full after:-translate-x-1/2 after:scale-x-0 after:bg-brass after:transition-transform after:duration-300 after:ease-out hover:text-ivory ${

                    active ? 'after:scale-x-100' : 'hover:after:scale-x-100'

                  }`}

                >

                  {link.label}

                </Link>

              );

            })}

            {isMenu && <LangToggle />}

            <a

              href={`tel:${siteConfig.phoneRaw}`}

              className="sheen group inline-flex items-center gap-2.5 border border-ivory/30 px-6 py-2.5 text-[12px] font-semibold uppercase tracking-wide-3 text-ivory transition-all duration-300 hover:border-brass-light hover:bg-brass/10 hover:text-brass-light"

            >

              {t.nav.reserve}

            </a>

          </div>

          {}

          <div className="flex items-center gap-2.5 lg:hidden">

            {isMenu && <LangToggle />}

            <button

              className="flex h-11 w-11 items-center justify-center border border-ivory/20 text-ivory transition-colors hover:border-brass-light"

              onClick={() => setOpen(!open)}

              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}

              aria-expanded={open}

            >

              {open ? <X size={20} /> : <MenuIcon size={20} />}

            </button>

          </div>

        </nav>

      </header>

      {}

      <div

        className={`fixed inset-0 z-40 flex flex-col bg-espresso-400 transition-all duration-500 lg:hidden ${

          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'

        }`}

      >

        <div className="relative flex flex-1 flex-col items-center justify-center gap-2 px-8">

          {navLinks.map((link, i) => {

            const active = location.pathname === link.to;

            return (

              <Link

                key={link.to}

                to={link.to}

                onClick={() => setOpen(false)}

                style={{ transitionDelay: open ? `${140 + i * 80}ms` : '0ms' }}

                className={`flex items-baseline gap-4 py-3 font-serif text-4xl font-light transition-all duration-500 ${

                  open ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'

                } ${active ? 'italic text-brass-light' : 'text-ivory hover:text-brass-light'}`}

              >

                <span className="font-sans text-[11px] font-semibold tracking-wide-3 text-brass/70">0{i + 1}</span>

                {link.label}

              </Link>

            );

          })}

          <a

            href={`tel:${siteConfig.phoneRaw}`}

            style={{ transitionDelay: open ? `${140 + navLinks.length * 80}ms` : '0ms' }}

            className={`mt-8 inline-flex items-center gap-2.5 border border-brass/60 px-8 py-4 text-[12px] font-semibold uppercase tracking-wide-3 text-brass-light transition-all duration-500 hover:bg-brass/15 ${

              open ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'

            }`}

          >

            <Phone size={14} />

            {t.nav.reserve}

          </a>

        </div>

        <div className="border-t border-ivory/10 px-8 py-6 text-center">

          <p className="text-xs tracking-wide-2 text-ivory/40">{siteConfig.shortAddress}</p>

          <p className="mt-1 text-xs tracking-wide-2 text-ivory/30">Salı – Pazar · 12:00 – 23:00</p>

        </div>

      </div>

    </>

  );

}
