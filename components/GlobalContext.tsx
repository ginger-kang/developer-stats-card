/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'
import type { GlobalContextType } from '../types'

interface Props {
  children: React.ReactNode
}

const globalContextDefaultValues: GlobalContextType = {
  cursor: 0,
  cursorHandler: () => {},
}

const GlobalStateContext = React.createContext<GlobalContextType>(
  globalContextDefaultValues
)

export function useGlobalState() {
  return React.useContext(GlobalStateContext)
}

export function GlobalContextProvider({ children }: Props) {
  const [cursor, setCursor] = React.useState<number>(0)

  const cursorHandler = (nextCursor: number) => {
    setCursor(nextCursor)
  }

  const value = {
    cursor,
    cursorHandler,
  }

  return (
    <>
      <GlobalStateContext.Provider value={value}>
        {children}
      </GlobalStateContext.Provider>
    </>
  )
}
