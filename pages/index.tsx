import type { NextPage, GetStaticProps } from 'next'
import styles from '../styles/Home.module.css'
import { graphQLQuery } from './api'

const HomePage: NextPage = () => {
  return <div className={styles.container}>Hello</div>
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await graphQLQuery()

  console.log(JSON.stringify(res, undefined, 2))

  return {
    props: {
      value: 'test',
    },
  }
}

export default HomePage
