import Section from '../ui/Section.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'

const CAPABILITIES = [
  {
    index: '01',
    title: 'Agents that fit your process',
    body: 'We map how work actually moves through your organisation, then deploy AI agents that operate inside those steps — not beside them.',
  },
  {
    index: '02',
    title: 'Integrated, not bolted on',
    body: 'Agents connect to the systems you already run, so adoption does not depend on replacing your stack or retraining your teams from zero.',
  },
  {
    index: '03',
    title: 'Enterprise-grade by default',
    body: 'Access control, auditability and reliability are designed in from the first deployment, because that is what enterprise trust requires.',
  },
]

export default function WhatWeDo() {
  return (
    <Section id="what-we-do" tone="muted" bordered>
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl leading-[1.1] tracking-tight text-black sm:text-4xl lg:text-5xl">
            Custom AI agents,
            <br />
            deployed into the
            <br />
            workflows you already run.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-black/60">
            Most AI stalls at the pilot stage. We take it the rest of the way —
            into the day-to-day operations where it has to work reliably, at
            scale, alongside your people.
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ul>
            {CAPABILITIES.map((item) => (
              <li
                key={item.index}
                className="grid grid-cols-[auto_1fr] gap-6 border-t border-black/10 py-8 first:border-t-0 first:pt-0 sm:gap-10"
              >
                <span className="pt-1 text-[11px] font-medium tracking-[0.2em] text-black/35">
                  {item.index}
                </span>
                <div>
                  <h3 className="font-serif text-xl tracking-tight text-black sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60 sm:text-base">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
