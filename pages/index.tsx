import type { NextPage, GetStaticProps } from 'next'
import styles from '../styles/Home.module.css'

const HomePage: NextPage = () => {
  return <div className={styles.container}>Hello</div>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      value: 'test',
    },
  }
}

export default HomePage
