import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ServiceCard } from '@components/index'

export default function Skills() {
  let [skills] = useState([
    {
      title: 'HTML5',
      uri: '/skills/html.png',
      bg: '#FFF4F2',
    },
    {
      title: 'CSS3',
      uri: '/skills/css.png',
      bg: '#DDE8EE',
    },
    {
      title: 'Javascript',
      uri: '/skills/js.png',
      bg: '#FDF7D1',
    },
    {
      title: 'React JS',
      uri: '/skills/react.png',
      bg: '#ECFCFF',
    },
    {
      title: 'React Native',
      uri: '/skills/react.png',
      bg: '#ECFCFF',
    },
    {
      title: 'Node JS',
      uri: '/skills/node.png',
      bg: '#E7FDF3',
    },
    {
      title: 'Figma',
      uri: '/skills/figma.png',
      bg: '#FCECE7',
    },
    {
      title: 'git',
      uri: '/skills/git.png',
      bg: '#FCE8E3',
    },

    {
      title: 'C#',
      uri: '/skills/csharp.png',
      bg: '#f4e0ff',
    },
    {
      title: 'C++',
      uri: '/skills/cpp.png',
      bg: '#c7d9ee',
    },
    {
      title: 'Django',
      uri: '/skills/django.png',
      bg: '#d1ffef',
    },
    {
      title: 'Flask',
      uri: '/skills/flask.png',
      bg: '#e6e6e6',
    },
    {
      title: 'Godot',
      uri: '/skills/godot.png',
      bg: '#bddaff',
    },
    {
      title: 'Unity',
      uri: '/skills/unity.png',
      bg: '#dbdbdb',
    },
    {
      title: 'Next JS',
      uri: '/skills/nextjs.png',
      bg: '#e4e4e4',
    },
    {
      title: 'Python',
      uri: '/skills/python.png',
      bg: '#f8ff96',
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
        <div className="grid grid-flow-row grid-cols-5  gap-8">
          {Object.values(skills).map((item, idx) => (
            <div
              className="flex flex-col items-center justify-center"
              key={idx}
            >
              <div
                style={{ backgroundColor: item.bg }}
                className={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-full`}
              >
                <Image src={item.uri} height={40} width={40} alt={item.title} />
              </div>
              <p className=" mt-2 font-roboto text-sm font-normal text-gray-500 ">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-10">
          {Object.entries(experiences).map(([key, value]) => (
            <div className="flex flex-row space-x-12" key={key}>
              <h1 className=" font-montserrat text-lg font-semibold text-blue-600">
                {key}
              </h1>
              <div className="flex flex-col">
                {value.map((item, idx) => (
                  <div className=" mb-5" key={idx}>
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
