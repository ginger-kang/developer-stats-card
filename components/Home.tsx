import * as React from 'react'
import type { DeveloperStats, GlobalContextType } from '../types'
import { useGlobalState } from './GlobalContext'

interface Props {
  developers: DeveloperStats[][]
}

function Home({ developers }: Props) {
  const {
    cursor,
    currentPage,
    cursorHandler,
    isInitializing,
    developerStatsHandler,
    loadMore,
    hasMore,
  }: GlobalContextType = useGlobalState()

  React.useEffect(() => {
    if (isInitializing()) {
      developerStatsHandler(developers)
    }
  }, [isInitializing, developerStatsHandler, developers])

  console.log(currentPage, cursor)

  return (
    <>
      {currentPage.length ? (
        <>
          {currentPage.map(developer => (
            <div key={developer.name}>
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
          ))}
        </>
      ) : (
        <div>loading...</div>
      )}
      <button onClick={() => loadMore()}>Load More</button>
    </>
  )
}

export default Home
