import * as React from 'react'
import styles from './Developer.module.css'
import type { DeveloperStats, GlobalContextType } from '../types'
import { useGlobalState } from './GlobalContext'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import DeveloperCard from './DeveloperCard'

interface Props {
  developers: DeveloperStats[][]
}

const DeveloperContainer = ({ developers }: Props) => {
  const {
    cursor,
    currentPage,
    isInitializing,
    developerStatsHandler,
    loadMore,
    hasMore,
  }: GlobalContextType = useGlobalState()
  const loadMoreButtonRef = React.useRef(null)
  const [hasMoreDeveloper, setHasMoreDeveloper] = React.useState<boolean>(true)

  React.useEffect(() => {
    if (isInitializing()) {
      developerStatsHandler(developers)
    }
  }, [isInitializing, developerStatsHandler, developers])

  React.useEffect(() => {
    setHasMoreDeveloper(hasMore())
  }, [cursor, hasMore])

  useIntersectionObserver({
    root: null,
    target: loadMoreButtonRef,
    onIntersect: loadMore,
    enabled: hasMoreDeveloper,
  })

  console.log(currentPage, cursor, hasMoreDeveloper)

  return (
    <>
      {currentPage.length ? (
        <div className={styles.container}>
          {currentPage.map(developer => (
            <DeveloperCard key={developer.name} developer={developer} />
          ))}
          {hasMoreDeveloper && <div ref={loadMoreButtonRef} />}
        </div>
      ) : (
        <>
          <div>loading...</div>
        </>
      )}
      {hasMoreDeveloper && <div ref={loadMoreButtonRef} />}
    </>
  )
}

export default DeveloperContainer
