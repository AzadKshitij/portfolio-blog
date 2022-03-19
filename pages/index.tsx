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
        <title> Kshitij</title>
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
