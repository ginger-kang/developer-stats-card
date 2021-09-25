import { GraphQLClient, gql } from 'graphql-request'

const END_POINT = 'https://api.github.com/graphql'

const graphQLClient = new GraphQLClient(END_POINT, {
  headers: {
    authorization: `bearer ${process.env.API_TOKEN}`,
  },
})

export async function graphQLQuery(developer: string) {
  const query = gql`
    {
      user(login: "${developer}") {
        repositories {
          totalCount
        }
        followers {
          totalCount
        }
        email
        avatarUrl
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
        issues {
          totalCount
        }
        pullRequests {
          totalCount
        }
      }
    }
  `
  try {
    const data = await graphQLClient.request(query)

    return data
  } catch (e: any) {
    throw new Error(e.message)
  }
}
