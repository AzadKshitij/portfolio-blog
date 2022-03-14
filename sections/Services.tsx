import React from 'react'
import Link from 'next/link'
import { ServiceCard } from '@components/index'

export default function Services() {
  return (
    <section className="mb-10 flex flex-col content-center items-center justify-center self-center text-black">
      <h1 className=" my-4 font-rancho text-5xl text-gray-800 ">
        SERVICES OFFERED
      </h1>
      <p className=" mb-16 font-lobster text-lg tracking-wide text-gray-600">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour
      </p>

      <div className="flex flex-col flex-wrap items-center justify-center align-middle md:flex-row">
        <ServiceCard
          image="/services/001.png"
          title="WEB DEVELOPER"
          description="Can make sites using JavaScript or python."
        />
        <ServiceCard
          image="/services/002.png"
          title="UX/UI DESIGN"
          description="Can make sites using JavaScript or python."
        />
        <ServiceCard
          image="/services/003.png"
          title="SOFTWARE DEVELOPER"
          description="Can make sites using JavaScript or python."
        />
        <ServiceCard
          image="/services/004.png"
          title="SEO OPTIMIZE"
          description="Can make sites using JavaScript or python."
        />
        <ServiceCard
          image="/services/005.png"
          title="APP DEVELOPER"
          description="Android App Development with ReactNative"
        />
        <ServiceCard
          image="/services/006.png"
          title="BACKEND DEVELOPER"
          description="Backend Development with NodeJS, Express and PostgreSQL & Django"
        />
      </div>
    </section>
  )
}
