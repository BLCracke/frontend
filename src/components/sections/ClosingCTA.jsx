import Button from '../ui/Button.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'

export default function ClosingCTA() {
  return (
    <section className="border-t border-black/10 bg-white px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>Work with us</Eyebrow>

        <h2 className="mt-8 font-serif text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
          Let us put AI to work
          <br />
          inside your organisation.
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-black/60 sm:text-lg">
          Whether you are deploying agents into an existing operation or
          looking at what we are building next, we would like to hear from you.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button to="/contact" variant="solid">
            Talk to us
          </Button>
          <Button to="/about" variant="outline">
            About BL Cracke
          </Button>
        </div>
      </div>
    </section>
  )
}
