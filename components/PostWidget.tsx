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
  categories: category
  slug: string
}) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((res) => {
        setPosts(res)
      })
    } else {
      getRecentPosts().then((res) => {
        setPosts(res)
      })
    }
  }, [slug])

  return (
    <div className="mb-8 rounded-lg bg-primary p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold text-white">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {posts.map((post: post, index) => (
        <Link href={`/post/${post.slug}`} key={index}>
          <div
            key={index}
            className="mb-4 flex w-full cursor-pointer items-center"
          >
            <div className="w-16 flex-none">
              <Image
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
              <p className="font-xs text-gray-200">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <text className="text-md text-white">
                <Link href={`/post/${post.slug}`} key={index}>
                  {post.title}
                </Link>
              </text>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostWidget
