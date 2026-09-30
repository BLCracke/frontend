import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { NAV_LINKS } from '../../routes/nav.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black/10 bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-3 lg:px-10">
        <div>
          <Logo variant="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
            We deploy custom AI agents into enterprise workflows, and build our
            own AI products and research.
          </p>
        </div>

        <div>
          <h2 className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">
            Navigate
          </h2>
          <ul className="mt-6 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">
            Get in touch
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li>
              <a
                href="mailto:hello@blcracke.com"
                className="transition-colors hover:text-white"
              >
                hello@blcracke.com
              </a>
            </li>
            <li>Nairobi, Kenya</li>
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-block border border-white/30 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-black"
          >
            Partner with us
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-[11px] uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {year} BL Cracke. All rights reserved.</p>
          <p>Applied AI · Research · Products</p>
        </div>
      </div>
    </footer>
  )
}
