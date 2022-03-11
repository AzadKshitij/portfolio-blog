import React from 'react'
import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/solid'

export default function Brand() {
  return (
    <section className="mb-10 text-white">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-6">
          <div className="grid grid-cols-3 grid-rows-3 gap-2 lg:grid-cols-3">
            {/* ------------------------------------ */}
            <div className="col-span-1 lg:col-span-1">
              <img src="banner/about-us.png" alt="banner-img" className="" />
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

        <div className="col-span-1 self-stretch lg:col-span-6 lg:mx-20">
          <div className="box-border block">
            <div className="flex flex-col content-between justify-between gap-x-10">
              <div className="flex flex-col items-center gap-y-10 md:items-start">
                <h3 className="flex flex-row align-middle  text-2xl font-bold">
                  <span className="mr-5 align-middle font-lobster text-9xl font-bold text-white">
                    2
                  </span>
                  <div className="flex flex-col py-5">
                    <span>Year</span>
                    <span>Experience</span>
                    <span>Working</span>
                  </div>
                </h3>
                <div className="mt-20 flex flex-row justify-center self-end">
                  <PhoneIcon
                    className="h-12 w-12   fill-current text-white"
                    aria-hidden="true"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, quisquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
