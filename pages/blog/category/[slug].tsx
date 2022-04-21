// @ts-ignore
import React, { FunctionComponent } from 'react'
import { GetStaticPaths } from 'next'
import dynamic from 'next/dynamic'
import { ElementNode } from '@graphcms/rich-text-types'

import {
  getPosts,
  getPostDetails,
  getPostsWithCategories,
} from '@services/index'

const Categories = dynamic(() => import('@components/Categories'))
const PostWidget = dynamic(() => import('@components/PostWidget'))
const PostDetails = dynamic(() => import('@components/PostDetails'))
const Author = dynamic(() => import('@components/Author'))
const CategoryPostCard = dynamic(() => import('@components/CategoryPostCard'))

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

function Slug({ post: post }: { post: any }) {
  return (
    <>
      <div className="container mx-auto bg-bg px-2 pb-8 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {post.map((post: any, idx: number) => (
            <CategoryPostCard key={idx} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Slug

// Fetch data at build time
export async function getStaticProps({ params: params }: { params: params }) {
  const data = await getPostsWithCategories([params.slug])
  //   console.log('data =========================: ', data)
  return {
    props: {
      post: data,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  //   console.log('posts =========================: ', posts)
  const paths_arr = posts.map((post: { node: { slug: string } }) => {
    const slug = post.node.slug
    return {
      params: { slug },
    }
  })
  return {
    paths: paths_arr,
    fallback: true,
  }
}
