import React from 'react'
import Link from 'next/link'

export default function Banner() {
  return (
    <section className="mb-10 text-white">
      <div className="grid grid-cols-1 items-center justify-items-center gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-6">
          <p className=" mt-10 font-rancho text-7xl lg:text-8xl">Hey </p>
          <p className=" my-3   font-lobster text-7xl font-bold uppercase lg:text-8xl">
            I am Kshitij
          </p>
          <p className="my-5 font-rancho text-2xl uppercase">
            Fullstack Developer
          </p>
          <div className="">
            <div className="">
              <button
                type="button"
                className=" mr-4 rounded border-transparent bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-padding px-9 py-3 font-rancho uppercase tracking-widest duration-500 hover:border-purple-700 hover:bg-transparent hover:text-black hover:duration-500 "
              >
                hire me
              </button>
              <a href="./img/kshitij1.png">
                <button
                  type="button"
                  className="rounded border-2 border-purple-700 bg-clip-padding py-3 px-9 font-rancho uppercase tracking-widest transition duration-500 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700"
                >
                  Get cv
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-6   ">
          <img
            src="banner/banner-image.png"
            alt="banner-img"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  )
}
