import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center border px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-200'

const variants = {
  solid: 'border-black bg-black text-white hover:bg-white hover:text-black',
  outline: 'border-black text-black hover:bg-black hover:text-white',
  inverseSolid: 'border-white bg-white text-black hover:bg-black hover:text-white',
  inverseOutline: 'border-white/40 text-white hover:bg-white hover:text-black',
}

export default function Button({
  children,
  to,
  href,
  variant = 'solid',
  className = '',
  ...rest
}) {
  const cls = `${base} ${variants[variant] ?? variants.solid} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}
