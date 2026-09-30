export default function Eyebrow({ children, className = '' }) {
  return (
    <p
      className={`text-[10px] font-medium uppercase tracking-[0.32em] opacity-50 ${className}`}
    >
      {children}
    </p>
  )
}
