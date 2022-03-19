import { ElementNode } from '@graphcms/rich-text-types'

export type category = [
  {
    name: string
    slug: string
  }
]

export type post = {
  id: number
  createdAt: string
  slug: string
  title: string
  featuredImage: {
    url: string
  }
}

export type author = {
  name: string
  image: {
    url: string
  }
  bio: string
}

export type postComplete = {
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
