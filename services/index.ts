import { request, gql } from 'graphql-request'
const graphqlAPI: any = process.env.NEXT_PUBLIC_GRAPCMS_API

export const getPosts = async () => {
  const query = gql`
    query PostQuery {
      postsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            author {
              bio
              id
              name
              image {
                url
              }
            }
            createdAt
            title
            slug
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const response = await request(graphqlAPI, query)
  return response.postsConnection.edges
}

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query PostQuery($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          id
          name
          image {
            url
          }
        }
        createdAt
        title
        slug
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
          references {
            ... on CodeBlock {
              id
              code
              language
            }
          }
        }
      }
    }
  `
  const response = await request(graphqlAPI, query, { slug })
  return response.post
}

export const getRecentPosts = async () => {
  const query = gql`
     query GetPostDetails() {
      posts(
        orderBy: createdAt_DESC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const response = await request(graphqlAPI, query)
  return response.posts
}

export const getSimilarPosts = async (categories: string[], slug: string) => {
  // console.log(
  //   '🚀 ~ file: index.ts ~ line 101 ~ getSimilarPosts ~ categories',
  //   categories
  // )
  // console.log('🚀 ~ file: index.ts ~ line 101 ~ getSimilarPosts ~ slug', slug)

  const query = gql`
    query GetPostDetails($slug: String, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        orderBy: createdAt_DESC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const response = await request(graphqlAPI, query, { slug, categories })
  // console.log(
  //   '🚀 ~ file: index.ts ~ line 127 ~ getSimilarPosts ~ response',
  //   response
  // )
  return response.posts
}

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetFeaturesPost() {
      posts(where: {featured: true}) {
        author {
          name
          image {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.posts
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `
  const response = await request(graphqlAPI, query)
  return response.categories
}

export const getPostsWithCategories = async (categories: string[]) => {
  const query = gql`
    query GetPostsWithCategories($categories: [String!]) {
      posts(
        where: { AND: { categories_some: { slug_in: $categories } } }
        orderBy: createdAt_DESC
        last: 12
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const response = await request(graphqlAPI, query, { categories })
  return response.posts
}
