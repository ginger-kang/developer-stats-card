import fs from 'fs'
import path from 'path'

import type { GetStaticProps } from 'next'
import type { DeveloperInfo } from '../types'
import { graphQLQuery } from './api'
import Home from '../components/Home'

interface Props {
  developers: DeveloperInfo[][]
}

const HomePage: React.FC<Props> = ({ developers }) => {
  return <Home developers={developers} />
}

export const getStaticProps: GetStaticProps = async () => {
  const paths = path.join(process.cwd(), 'developers.json')
  const contents = JSON.parse(fs.readFileSync(paths, 'utf-8'))

  const githubUsers: DeveloperInfo[] = await Promise.all(
    Object.keys(contents).map(async developer => {
      try {
        const { user } = await graphQLQuery(developer)

        return { ...user, ...contents[developer], developer }
      } catch (e) {
        console.error(e)
      }
    })
  )

  const batchedGithubUsers: DeveloperInfo[][] = githubUsers.reduce(
    (batch: DeveloperInfo[][], user: DeveloperInfo) => {
      if (batch[batch.length - 1].length === 2) {
        batch.push([user])
      } else {
        batch[batch.length - 1].push(user)
      }
      return batch
    },
    [[]]
  )

  return {
    props: {
      developers: batchedGithubUsers,
    },
  }
}

export default HomePage
