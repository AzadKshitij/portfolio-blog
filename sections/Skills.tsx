import React, { useState } from 'react'
import Link from 'next/link'
import { ServiceCard } from '@components/index'
import Image from 'next/image'

export default function Skills() {
  let [skills] = useState([
    {
      title: 'HTML5',
      uri: '/work/001.png',
      bg: '#FFF4F2',
    },
    {
      title: 'CSS3',
      uri: '/work/001.png',
      bg: '#DDE8EE',
    },
    {
      title: 'Javascript',
      uri: '/work/001.png',
      bg: '#FDF7D1',
    },
    {
      title: 'React JS',
      uri: '/work/001.png',
      bg: '#ECFCFF',
    },
    {
      title: 'Node JS',
      uri: '/work/001.png',
      bg: '#E7FDF3',
    },
    {
      title: 'Figma',
      uri: '/work/001.png',
      bg: '#FCECE7',
    },
    {
      title: 'git',
      uri: '/work/001.png',
      bg: '#FCE8E3',
    },
    {
      title: 'React Native',
      uri: '/work/001.png',
      bg: '#ECFCFF',
    },
  ])

  let [experiences] = useState({
    '2020': [
      {
        title: 'React',
        subTitle: 'React',
      },
      {
        title: 'React',
        subTitle: 'React',
      },
      {
        title: 'React',
        subTitle: 'React',
      },
    ],
    '2021': [
      {
        title: 'React',
        subTitle: 'React',
      },
    ],
  })
  return (
    <section className="mb-10 flex flex-col content-center items-center justify-center self-center text-black">
      <h1 className=" my-4 font-rancho text-5xl uppercase text-gray-800 ">
        Skills & Experiences
      </h1>
      <p className=" mb-16 font-lobster text-lg tracking-wide text-gray-600">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour
      </p>

      <div className="flex flex-col flex-wrap space-x-10 md:flex-row">
        <div className="grid grid-flow-row grid-cols-4 grid-rows-4 gap-8">
          {Object.values(skills).map((item, idx) => (
            <div className="flex flex-col items-center justify-center">
              <div
                style={{ backgroundColor: item.bg }}
                className={`flex h-24 w-24 items-center justify-center overflow-hidden rounded-full`}
              >
                <Image src={item.uri} height={50} width={50} />
              </div>
              <p className=" mt-2 font-roboto text-sm font-normal text-gray-500 ">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-10">
          {Object.entries(experiences).map(([key, value]) => (
            <div className="flex flex-row space-x-12">
              <h1 className=" font-montserrat text-lg font-semibold text-blue-600">
                {key}
              </h1>
              <div className="flex flex-col">
                {value.map((item) => (
                  <div className=" mb-5">
                    <p className=" font-roboto text-lg font-semibold text-black ">
                      {item.title}
                    </p>
                    <p className=" font-roboto text-sm text-gray-500">
                      {item.subTitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
