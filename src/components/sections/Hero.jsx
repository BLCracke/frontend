import Button from '../ui/Button.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:px-10 lg:pt-36 lg:pb-40">
      <div className="mx-auto max-w-6xl">
        <Eyebrow>BL Cracke · Applied AI for the Enterprise</Eyebrow>

        <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight text-black sm:text-6xl lg:text-8xl">
          Intelligence,
          <br />
          built into the
          <br />
          way you work.
        </h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-relaxed text-black/65 sm:text-xl">
              BL Cracke helps enterprises deploy custom AI agents directly into
              their existing workflows — and builds its own AI products and
              research.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/contact" variant="solid">
                Talk to us
              </Button>
              <Button to="/services" variant="outline">
                See what we do
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[28rem] w-[28rem] -translate-y-1/2 border border-black/5 lg:block"
      />
    </section>
  )
}
