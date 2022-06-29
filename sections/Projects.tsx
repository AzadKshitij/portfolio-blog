import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ServiceCard } from '@components/index'
import { Tab } from '@headlessui/react'
import { EyeIcon } from '@heroicons/react/solid'
import { FaGithub } from 'react-icons/fa'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Projects() {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Astu',
        uri: '/work/001.png',
        view: 'google.com',
        github: 'github.com',
      },
    ],
    App: [
      {
        id: 1,
        title: 'Astu App',
        uri: '/work/001.png',
        view: 'google.com',
        github: 'github.com',
      },
      {
        id: 2,
        title: 'Screen Recorder',
        uri: '/work/001.png',
        view: 'google.com',
        github: 'github.com',
      },
    ],
    'UI/UX': [
      {
        id: 1,
        title: 'Astu Blog',
        uri: '/work/001.png',
        view: 'google.com',
        github: 'github.com',
      },
    ],
  })

  return (
    <section className="mb-10 flex flex-col content-center items-center justify-center self-center bg-purple-50 text-black">
      <h1 className=" my-4 font-rancho text-5xl text-gray-800 ">PROJECTS</h1>
      <p className=" mb-16 font-lobster text-lg tracking-wide text-gray-600">
        QUALITY WORK
      </p>

      <div className="flex w-full flex-col items-center px-2 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex flex-wrap items-center justify-center space-x-1 self-center rounded-xl bg-blue-600 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-28 rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 flex flex-row flex-wrap">
            {Object.values(categories).map((items, idx) => (
              <Tab.Panel key={idx} className={classNames('rounded-xl p-3')}>
                <ul className="flex flex-row flex-wrap items-center justify-evenly">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="hover:bg-coolGray-500  relative  mx-5 my-5 flex max-w-xs cursor-pointer flex-col content-center items-center justify-center rounded-lg bg-white p-3 duration-500 hover:drop-shadow-2xl"
                    >
                      <div className="group relative flex items-center justify-center rounded-lg ">
                        <div className="rounded-lg duration-500 ease-in group-hover:brightness-50 ">
                          <Image
                            src={item.uri}
                            height={250}
                            width={250}
                            className="rounded-lg bg-black"
                          />
                        </div>
                        <div className="absolute flex flex-row space-x-10 opacity-0 duration-500 ease-in  group-hover:opacity-100">
                          <a
                            title="View"
                            href="#"
                            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-neutral-800 bg-opacity-80 duration-300 ease-in hover:scale-125"
                          >
                            <EyeIcon
                              className="h-5 w-5 text-white"
                              aria-hidden="true"
                            />
                          </a>
                          <a
                            title="Github"
                            href="#"
                            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-neutral-800 bg-opacity-80 duration-300 hover:scale-125"
                          >
                            <FaGithub color="white" size={20} />
                          </a>
                        </div>
                      </div>
                      <h3 className=" text-lg font-semibold leading-5">
                        {item.title}
                      </h3>

                      {/* <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                        <li>{item.date}</li>
                        <li>&middot;</li>
                        <li>{item.commentCount} comments</li>
                        <li>&middot;</li>
                        <li>{item.shareCount} shares</li>
                      </ul> */}
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>

      <div className="flex flex-col flex-wrap items-center justify-center align-middle md:flex-row"></div>
    </section>
  )
}
