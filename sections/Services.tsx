import React from 'react'
import Link from 'next/link'
import { ServiceCard } from '@components/index'

export default function Services() {
  return (
    <section className="mb-10 text-white">
      <h1>Services</h1>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour
      </p>

      <div className="flex flex-col flex-wrap items-center justify-center align-middle md:flex-row">
        <ServiceCard
          image="/services/s1.png"
          title="WEB DEVELOPER"
          description="Can make sites using JavaScript or python."
        />
        <ServiceCard
          image="/services/s1.png"
          title="WEB DEVELOPER"
          description="Can make sites using JavaScript or python."
        />
        <ServiceCard
          image="/services/s1.png"
          title="WEB DEVELOPER"
          description="Can make sites using JavaScript or python."
        />
        <ServiceCard
          image="/services/s1.png"
          title="WEB DEVELOPER"
          description="Can make sites using JavaScript or python."
        />
        <ServiceCard
          image="/services/s1.png"
          title="WEB DEVELOPER"
          description="Can make sites using JavaScript or python."
        />
      </div>
    </section>
  )
}
