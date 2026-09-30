import { Link } from 'react-router-dom'
import Section from '../ui/Section.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'

const PRODUCTS = [
  {
    name: 'BL Cracke Finance',
    tagline: 'An AI financial advisor built for the Kenyan context.',
    blurb:
      'Financial management, investment guidance, regulatory compliance and fee structures — interpreted intelligently, and plainly.',
  },
  {
    name: 'Smart Gazette',
    tagline: 'Government gazettes, made readable for the public.',
    blurb:
      'An AI platform that interprets official gazette notices and turns them into clear, actionable information for citizens and businesses.',
  },
]

export default function ProductsTeaser() {
  return (
    <Section id="products" tone="light" bordered>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Eyebrow>Our products</Eyebrow>
          <h2 className="mt-6 max-w-xl font-serif text-3xl leading-[1.1] tracking-tight text-black sm:text-4xl lg:text-5xl">
            Research that ships as products.
          </h2>
        </div>
        <Link
          to="/products"
          className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/50 underline decoration-black/20 underline-offset-8 transition-colors hover:text-black hover:decoration-black"
        >
          View all products
        </Link>
      </div>

      <div className="mt-16 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
        {PRODUCTS.map((product) => (
          <article
            key={product.name}
            className="flex flex-col justify-between bg-white p-8 sm:p-10 lg:p-12"
          >
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/35">
                Coming soon
              </p>
              <h3 className="mt-6 font-serif text-2xl tracking-tight text-black sm:text-3xl">
                {product.name}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-black/75">
                {product.tagline}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-black/50">
                {product.blurb}
              </p>
            </div>

            <Link
              to="/products"
              className="mt-10 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-60"
            >
              Learn more
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </Section>
  )
}
