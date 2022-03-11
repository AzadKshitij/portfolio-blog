import React from 'react'
import Link from 'next/link'

export default function Brand() {
  return (
    <section className="mb-10 text-white">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-6">
          <div className="grid grid-cols-3 grid-rows-3 gap-6 lg:grid-cols-3">
            {/* ------------------------------------ */}
            <div className="col-span-1 lg:col-span-1">
              <img
                src="banner/about-us.png"
                alt="banner-img"
                className="img-fluid"
              />
            </div>
            <div className="col-span-1 lg:col-span-1">
              <img
                src="banner/about-us.png"
                alt="banner-img"
                className="img-fluid"
              />
            </div>
            <div className="col-span-1 lg:col-span-1">
              <img
                src="banner/about-us.png"
                alt="banner-img"
                className="img-fluid"
              />
            </div>
            {/* ------------------------------------ */}
            {/* ------------------------------------ */}
            <div className="col-span-1 lg:col-span-1">
              <img
                src="banner/about-us.png"
                alt="banner-img"
                className="img-fluid"
              />
            </div>
            <div className="col-span-1 lg:col-span-1">
              <img
                src="banner/about-us.png"
                alt="banner-img"
                className="img-fluid"
              />
            </div>
            <div className="col-span-1 lg:col-span-1">
              <img
                src="banner/about-us.png"
                alt="banner-img"
                className="img-fluid"
              />
            </div>
            {/* ------------------------------------ */}
            {/* ------------------------------------ */}
            <div className="col-span-1 lg:col-span-1">
              <img
                src="banner/about-us.png"
                alt="banner-img"
                className="img-fluid"
              />
            </div>
            <div className="col-span-1 lg:col-span-1">
              <img
                src="banner/about-us.png"
                alt="banner-img"
                className="img-fluid"
              />
            </div>
            <div className="col-span-1 lg:col-span-1">
              <img
                src="banner/about-us.png"
                alt="banner-img"
                className="img-fluid"
              />
            </div>
            {/* ------------------------------------ */}
          </div>
        </div>

        <div className="col-span-1 mx-20 self-stretch bg-neutral-900 lg:col-span-6">
          <div className="box-border block">
            <div className="flex flex-col content-between justify-between gap-x-10">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Branding &amp; Identity
                </h2>
                <h2 className="text-3xl font-bold text-white">
                  Branding &amp; Identity
                </h2>
              </div>
              <div className="h-full flex-1"></div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Branding &amp; Identity
                </h2>
                <h2 className="text-3xl font-bold text-white">
                  Branding &amp; Identity
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
