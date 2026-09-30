import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { NAV_LINKS } from '../../routes/nav.js'

function navClass({ isActive }) {
  return [
    'relative py-1 text-[13px] uppercase tracking-[0.18em] transition-colors',
    'after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-current after:transition-all',
    isActive
      ? 'text-black after:w-full'
      : 'text-black/55 after:w-0 hover:text-black hover:after:w-full',
  ].join(' ')
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="border border-black px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white"
          >
            Talk to us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-black/15 md:hidden"
        >
          <span className="h-px w-5 bg-black" />
          <span className="h-px w-5 bg-black" />
          <span className="h-px w-5 bg-black" />
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-black/10 bg-white md:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    'border-b border-black/5 py-3.5 text-[13px] uppercase tracking-[0.18em] last:border-0',
                    isActive ? 'text-black' : 'text-black/60',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
