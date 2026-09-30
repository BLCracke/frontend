import { Link } from 'react-router-dom'

export default function Logo({ variant = 'dark' }) {
  const tone = variant === 'light' ? 'text-white' : 'text-black'

  return (
    <Link
      to="/"
      aria-label="BL Cracke home"
      className={`group inline-flex items-center gap-3 ${tone}`}
    >
      <span className="flex h-9 w-9 items-center justify-center border border-current text-[13px] font-semibold tracking-tight">
        BL
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg tracking-tight">BL Cracke</span>
        <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.28em] opacity-60">
          Applied AI
        </span>
      </span>
    </Link>
  )
}
