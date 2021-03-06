// @ts-ignore
import React, { FunctionComponent } from 'react'
import { GetStaticPaths } from 'next'
import dynamic from 'next/dynamic'
import { ElementNode } from '@graphcms/rich-text-types'

import { getPosts, getPostDetails } from '@services/index'

const Categories = dynamic(() => import('@components/Categories'))
const PostWidget = dynamic(() => import('@components/PostWidget'))
const PostDetails = dynamic(() => import('@components/PostDetails'))
const Author = dynamic(() => import('@components/Author'))

// import {
//   Categories,
//   PostWidget,
//   PostDetails,
//   Author,
// } from '../../../components'

type params = {
  slug: string
}

interface postComplete {
  author: {
    bio: string
    id: string
    name: string
    image: {
      url: string
    }
  }
  createdAt: string
  title: string
  slug: string
  excerpt: string
  featuredImage: {
    url: string
  }
  categories: [
    {
      name: string
      slug: string
    }
  ]
  content: {
    raw: {
      children: ElementNode[]
    }
    references: {
      code: string
    }
  }
}

function Slug({ post: post }: { post: postComplete }) {
  return (
    <>
      <div className="container mx-auto bg-bg px-2 pb-8 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetails post={post} />
            <Author author={post.author} />
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slug

// Fetch data at build time
export async function getStaticProps({ params: params }: { params: params }) {
  const data = await getPostDetails(params.slug)
  return {
    props: {
      post: data,
    },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
// export async function getStaticPaths() {
//   const posts = await getPosts()
//   const paths_arr = posts.map((post: { node: { slug: string } }) => {
//     const slug = post.node.slug
//     return {
//       params: { slug },
//     }
//   })
//   return {
//     paths: paths_arr,
//     fallback: true,
//   }
// }

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()
  const paths_arr = posts.map((post: { node: { slug: string } }) => {
    const slug = post.node.slug
    return {
      params: { slug },
    }
  })
  return {
    paths: paths_arr,
    fallback: false,
  }
}
