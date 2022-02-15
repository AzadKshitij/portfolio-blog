import { request, gql } from 'graphql-request'
const graphqlAPI: any = process.env.NEXT_PUBLIC_GRAPCMS_API

export const getPosts = async () => {
  const query = gql`
    query PostQuery {
      postsConnection {
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
  console.log('getPostDetails', slug)
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
        orderBy: createdAt_ASC
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

export const getSimilarPosts = async (categories: any, slug: string) => {
  const query = gql`
    query GetPostDetails($categories: [String], $slug: String) {
      posts(
        where: {
          slug_not: $slug,
          AND: {
            categories_some: [slug_in: $categories]
          }
        }
        orderBy: createdAt_DESC,
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
