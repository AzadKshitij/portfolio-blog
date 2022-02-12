import Head from 'next/head'

import { PostCard, PostWidgets, Categories } from '../components'
import { getPosts } from '../services'

const posts = [
  {
    title: 'Hello Next.js',
    excerpt: 'This is the content of the first post',
  },
  {
    title: 'Hello Next.js',
    excerpt: 'asdn alkjsndljhjkda kdakjahsdjh dk',
  },
]

export default function Home({ posts }: { posts: any }) {
  return (
    <div className="container mx-auto mb-8 px-10 ">
      <Head>
        <title>Azad Kshitij</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12  ">
        <div className=" col-span-1 lg:col-span-8 ">
          {posts.map((post: any, index: number) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className=" col-span-1  lg:col-span-4 ">
          <div className=" relative top-8 lg:sticky ">
            <PostWidgets />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: {
      posts,
    },
  }
}
