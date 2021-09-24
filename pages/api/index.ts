import { GraphQLClient, gql } from 'graphql-request'

const END_POINT = 'https://api.github.com/graphql'

const graphQLClient = new GraphQLClient(END_POINT, {
  headers: {
    authorization: `bearer ${process.env.API_TOKEN}`,
  },
})

export async function graphQLQuery() {
  const query = gql`
    {
      user(login: "ginger-kang") {
        repositories {
          totalCount
        }
        followers {
          totalCount
        }
        email
        avatarUrl
      }
    }
  `

  const data = await graphQLClient.request(query)

  return data
}
