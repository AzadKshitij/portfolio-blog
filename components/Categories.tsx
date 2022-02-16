import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import { category } from '../types'

export default function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res)
    })
  }, [])

  return (
    <div className="mb-8 rounded-lg bg-primary p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold text-white">
        Categories
      </h3>
      {categories.map((category: category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`block cursor-pointer ${
              index === categories.length - 1 ? 'border-b-0' : 'border-b'
            } mb-3 pb-3 text-white`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}
