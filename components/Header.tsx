import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import { category } from '../types'

function Header() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res)
    })
  }, [])

  return (
    <div className=" container mx-auto mb-8 px-10 ">
      <div className="inline-block w-full border-b border-blue-400 py-8 ">
        <div className=" block md:float-left ">
          <Link href="/">
            <span className=" cursor-pointer text-4xl font-bold text-white">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category: category, index) => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <span
                className="mt-2 ml-4 cursor-pointer align-middle text-lg font-semibold
                 text-white md:float-right"
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
