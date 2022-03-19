import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <section className="mb-10 text-black">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-6   ">
          <img
            src="banner/about-us.png"
            alt="banner-img"
            className="img-fluid"
          />
        </div>

        <div className="col-span-1 lg:col-span-6">
          <p className=" my-3  font-lobster text-6xl font-bold uppercase">
            LET ME INTRODUCE MYSELF
          </p>
          <p className="my-5 font-rancho text-2xl  text-gray-600">
            Hello my name is Kshitij and I am a full-stack developer and can
            make websites frontend using HTML, CSS, JavaScript and can make
            backend using JavaScript and python (using django framework).
          </p>
          <p className="my-5 font-rancho text-2xl text-gray-600">
            Now days I am learning flask to make simple websites without SQL
            data base if you have any type of work according to my skills then{' '}
            <a
              href=""
              className=" mb-4 text-link transition duration-200 ease-in hover:text-title"
              rel="noopener noreferrer"
            >
              {' '}
              contact me{' '}
            </a>{' '}
            or hire my on
            <a
              href=""
              className=" mb-4 text-link transition duration-200 ease-in hover:text-title"
              rel="noopener noreferrer"
            >
              {' '}
              Fiver
            </a>{' '}
            or{' '}
            <a
              href=""
              className=" mb-4 text-link transition duration-200 ease-in hover:text-title"
              rel="noopener noreferrer"
            >
              {' '}
              Freelanser.com
            </a>
            . If you want to know my other skills then check out my cv.
          </p>
          <div className="">
            <div className="">
              <button
                type="button"
                className=" mr-4 rounded border-transparent bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-padding px-9 py-3 font-rancho uppercase tracking-widest transition duration-500 hover:border-purple-700 hover:bg-transparent hover:text-white"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
