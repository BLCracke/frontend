export default function Section({
  id,
  children,
  className = '',
  tone = 'light',
  bordered = false,
}) {
  const tones = {
    light: 'bg-white text-black',
    dark: 'bg-black text-white',
    muted: 'bg-black/[0.02] text-black',
  }

  return (
    <section
      id={id}
      className={[
        'px-6 py-20 sm:py-24 lg:px-10 lg:py-32',
        tones[tone],
        bordered ? 'border-t border-current/10' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}
