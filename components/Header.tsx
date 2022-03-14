import React, { useState, useEffect, useRef, Fragment, createRef } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { getCategories } from '../services'
import { category } from '../types'

function Header() {
  const [categories, setCategories] = useState([])
  const transition = createRef()

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res)
    })
  }, [])

  return (
    <div className=" container mx-auto mb-8 px-10 ">
      <div className="inline-block w-full border-b border-blue-400 py-8 ">
        <div className=" float-left block ">
          <Link href="/">
            <span className=" cursor-pointer text-2xl font-bold  text-black md:text-4xl">
              Azad Kshitij
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:hidden lg:contents">
          <Link href={`/blog`} key="blog">
            <span
              className="mt-2 ml-4 cursor-pointer align-middle text-lg font-semibold
                 text-black md:float-right"
            >
              Blog
            </span>
          </Link>
          {categories.map((category: category) => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <span
                className="mt-2 ml-4 cursor-pointer align-middle text-lg font-semibold
                 text-black md:float-right"
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        {/* <div className="fixed top-16 z-10 float-right w-56 text-right md:float-left md:contents"> */}
        <div className="z-10 float-right lg:hidden">
          <Menu as="div" className="relative z-10 inline-block">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white bg-opacity-20 px-2 py-2 text-sm font-medium text-black hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75">
                {({ open }) =>
                  open ? (
                    <XIcon
                      className="ml-2 -mr-1 h-5 w-5 animate-spinO bg-primaryLight text-violet-200 transition-all hover:text-violet-100"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="ml-2 -mr-1 h-5 w-5 bg-primaryLight text-violet-200 transition-all hover:text-violet-100"
                      aria-hidden="true"
                    />
                  )
                }
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-500 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Link href={`/blog`} key="blog">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? ' bg-background text-black' : ' text-black'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {/* {active ? (
                          <EditActiveIcon
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <EditInactiveIcon
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        )} */}
                          Blog
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Link>
                {categories.map((category: category) => (
                  <Link href={`/category/${category.slug}`} key={category.slug}>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? ' bg-background text-black'
                                : ' text-black'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {/* {active ? (
                          <EditActiveIcon
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <EditInactiveIcon
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        )} */}
                            {category.name}
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Link>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Header
