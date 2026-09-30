import Section from '../ui/Section.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'

const PILLARS = [
  {
    title: 'Research-led',
    body: 'We build our own AI products, so our research is tested against real problems rather than kept theoretical.',
  },
  {
    title: 'Applied by design',
    body: 'Every engagement is measured by whether the agent works in production — not by the sophistication of the demo.',
  },
  {
    title: 'Built for enterprise trust',
    body: 'We work to the standards enterprises are accountable to: clarity, control, and predictable behaviour.',
  },
  {
    title: 'Built for this market',
    body: 'We design for the realities of the organisations we serve, including regulatory and local-context constraints.',
  },
]

export default function WhyUs() {
  return (
    <Section id="why-us" tone="dark">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow className="text-white/50">Why BL Cracke</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            A research house that
            <br />
            ships to production.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-white/60">
            We are not a consultancy that hands over a report, and not a lab
            that stops at a paper. We do both — and hold ourselves to what
            actually runs.
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <dl className="grid sm:grid-cols-2">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="border-t border-white/15 py-8 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"
              >
                <dt className="font-serif text-lg tracking-tight">
                  {pillar.title}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-white/55">
                  {pillar.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
