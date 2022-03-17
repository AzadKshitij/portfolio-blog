import Head from 'next/head'

import { PostCard, PostWidget, Categories, Social } from '@components/index'
import { getPosts } from '@services/index'

import {
  Banner,
  About,
  Brand,
  Services,
  Projects,
  Skills,
  Contact,
} from '@sections/index'

export default function Home({ posts }: { posts: any }) {
  return (
    <div className="container mx-auto mb-8 px-10 ">
      <Head>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=0.5,initial-scale=1"
        />
        <title>Azad Kshitij</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Social /> */}
      <Banner />
      <About />
      <Brand />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <div className="flex flex-row items-center justify-center">
        <p className="">Copyright © 2020-2022 Kshitij</p>
      </div>
      {/* <div className="grid grid-cols-1 gap-12 lg:grid-cols-12  ">
        <div className=" col-span-1 lg:col-span-8 ">
          {posts.map((post: any, index: number) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className=" col-span-1  lg:col-span-4 ">
          <div className=" relative top-8 lg:sticky ">
            <PostWidget
              slug={''}
              categories={{
                name: '',
                slug: '',
              }}
            />
            <Categories />
          </div>
        </div>
      </div> */}
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
