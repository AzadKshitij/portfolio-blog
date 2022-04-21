/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

import { post, category } from '../types'

import Image from 'next/image'

function PostWidget({
  categories,
  slug,
}: {
  categories: string[]
  slug: string
}) {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    // console.log('fetching related posts')
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        // console.log(
        //   '🚀 ~ file: PostWidget.tsx ~ line 25 ~ getSimilarPosts ~ result',
        //   result
        // )
        setRelatedPosts(result)
      })
    } else {
      getRecentPosts().then((result) => {
        // console.log(
        //   '🚀 ~ file: PostWidget.tsx ~ line 31 ~ getRecentPosts ~ result',
        //   result
        // )
        setRelatedPosts(result)
      })
    }
  }, [slug, categories])

  return (
    <div className="mb-8 rounded-lg border-2 bg-primary p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold text-black">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post: post, index) => (
        <div
          className="rounded-lg p-2 transition duration-300 ease-in hover:bg-bg"
          key={index}
        >
          <Link href={`blog/post/${post.slug}`} key={index} passHref>
            <div
              key={index}
              className=" flex w-full cursor-pointer items-center"
            >
              <div className="flex-none">
                <img
                  // loader={grpahCMSImageLoader}
                  alt={post.title}
                  height="60px"
                  width="60px"
                  // unoptimized
                  className="rounded-full align-middle"
                  src={post.featuredImage.url}
                />
              </div>
              <div className="ml-4 flex-grow">
                <p className="font-xs text-gray-800">
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </p>
                <p className="text-md text-gray-900">
                  <Link href={`blog/post/${post.slug}`} key={index}>
                    {post.title}
                  </Link>
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PostWidget

// export function getServerSideProps(ctx: { params: any }) {
//   const { params } = ctx
//   const { id } = params

//   return {
//     props: {
//       // Pass id as key here, remember that the file name is [id].tsx
//       key: id,
//     }, // will be passed to the page component as props
//   }
// }
