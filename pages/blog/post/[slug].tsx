import React, { FunctionComponent } from 'react'

import { getPosts, getPostDetails } from '../../../services'

import {
  Categories,
  PostWidget,
  PostDetails,
  Author,
  Comments,
  CommentsForm,
} from '../../../components'
import { GetStaticPaths, GetStaticProps } from 'next'

import { postComplete } from '../../../types'

type params = {
  slug: string
}

function PostDetail({ post: post }: { post: postComplete }) {
  return (
    <>
      <div className="container mx-auto mb-8 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetails post={post} />
            <Author author={post.author} />
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
            {/* <CommentsForm slug={post.slug} /> */}
            {/* <Comments slug={post.slug} /> */}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              {/* <PostWidget
                // slug={post.slug}
                // categories={post.categories.map((category) => category.slug)}
              /> */}
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetail

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
    fallback: true,
  }
}
