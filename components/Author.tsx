import React from 'react'
import Image from 'next/image'
import { author } from '../types'

function Author({ author: author }: { author: author }) {
  return (
    <div className="relative mt-20 mb-8 rounded-lg border-2 bg-white p-12 text-center shadow-lg">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          // loader={grpahCMSImageLoader}
          alt={author.name}
          height="100px"
          width="100px"
          className="rounded-full align-middle"
          src={author.image.url}
        />
      </div>
      <h3 className="mt-4 mb-4 text-xl font-bold text-gray-800">
        {author.name}
      </h3>
      <p className="text-ls text-gray-800">{author.bio}</p>
    </div>
  )
}

export default Author
