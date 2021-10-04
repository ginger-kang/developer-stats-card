import * as React from 'react'
import styles from './Developer.module.css'
import type { DeveloperStats } from '../types'

interface Props {
  developer: DeveloperStats
}

const DeveloperCard = ({ developer }: Props) => {
  return (
    <div key={developer.name} className={styles.card}>
      <img src={developer.avatarUrl} className={styles.avatar} alt="avatar" />
      <h1>{developer.developer}</h1>
      <p>
        contributions{' '}
        {
          developer.contributionsCollection.contributionCalendar
            .totalContributions
        }
      </p>
      <p>followers {developer.followers.totalCount}</p>
      <p>pullRequests {developer.pullRequests.totalCount}</p>
    </div>
  )
}

export default DeveloperCard
