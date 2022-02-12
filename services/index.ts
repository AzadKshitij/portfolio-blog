import { request, gql } from 'graphql-request'

export const getPosts = async () => {
  const graphqlAPI: any = process.env.NEXT_PUBLIC_GRAPCMS_API
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
  console.log('response.postsConnection.edges', response.postsConnection.edges)
  return response.postsConnection.edges
}
