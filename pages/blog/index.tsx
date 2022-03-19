import Head from 'next/head'

import { PostCard, PostWidget, Categories } from '@components/index'
import { getPosts } from '@services/index'
import { FeaturedPost } from '@sections/index'

export default function Home({ posts }: { posts: any }) {
  return (
    <div className="container mx-auto bg-bg px-10">
      <Head>
        <title>Kshitij</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedPost />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12  ">
        <div className=" col-span-1 lg:col-span-8 ">
          {posts.map((post: any, index: number) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className=" col-span-1  lg:col-span-4 ">
          <div className=" relative top-8 lg:sticky ">
            <PostWidget slug={''} categories={['']} />
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
