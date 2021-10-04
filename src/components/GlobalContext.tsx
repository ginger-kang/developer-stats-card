/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'
import type { GlobalContextType, DeveloperStats } from '../types'

interface Props {
  children: React.ReactNode
}

const globalContextDefaultValues: GlobalContextType = {
  cursor: 0,
  currentPage: [],
  cursorHandler: () => {},
  isInitializing: () => true,
  developerStatsHandler: () => {},
  loadMore: () => {},
  hasMore: () => true,
}

const GlobalStateContext = React.createContext<GlobalContextType>(
  globalContextDefaultValues
)

export function useGlobalState() {
  return React.useContext(GlobalStateContext)
}

export function GlobalContextProvider({ children }: Props) {
  const [developerStats, setDeveloperStats] = React.useState<
    DeveloperStats[][]
  >([[]])
  const [currentPage, setCurrentPage] = React.useState<DeveloperStats[]>([])
  const [cursor, setCursor] = React.useState<number>(0)

  const developerStatsHandler = (nextDeveloperStats: DeveloperStats[][]) => {
    setDeveloperStats(nextDeveloperStats)
  }

  const loadMore = () => {
    const pageNum: number = cursor

    console.log('loadMore', cursor, developerStats)

    if (pageNum >= developerStats.length) return

    setCursor(cursor => cursor + 1)
    setCurrentPage([...currentPage, ...developerStats[pageNum]])
  }

  const hasMore = () => cursor <= developerStats.length - 1

  const cursorHandler = (nextCursor: number) => {
    setCursor(nextCursor)
  }

  const isInitializing = () => cursor === 0

  const value = {
    cursor,
    currentPage,
    cursorHandler,
    isInitializing,
    developerStatsHandler,
    loadMore,
    hasMore,
  }

  return (
    <>
      <GlobalStateContext.Provider value={value}>
        {children}
      </GlobalStateContext.Provider>
    </>
  )
}
