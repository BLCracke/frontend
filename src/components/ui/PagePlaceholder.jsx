import Eyebrow from './Eyebrow.jsx'
import Button from './Button.jsx'

export default function PagePlaceholder({ eyebrow, title, description }) {
  return (
    <div className="px-6 py-28 sm:py-36 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Eyebrow>{eyebrow}</Eyebrow>

        <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <div className="mt-10 h-px w-24 bg-black" />

        <p className="mt-10 max-w-xl text-lg leading-relaxed text-black/60">
          {description ?? 'This page is coming soon.'}
        </p>

        <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.24em] text-black/40">
          Coming soon
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button to="/contact" variant="solid">
            Talk to us
          </Button>
          <Button to="/" variant="outline">
            Back to home
          </Button>
        </div>
      </div>
    </div>
  )
}
