import * as React from 'react'
import type { DeveloperStats } from '../types'
import DeveloperContainer from './DeveloperContainer'

interface Props {
  developers: DeveloperStats[][]
}

function Home({ developers }: Props) {
  return (
    <>
      <DeveloperContainer developers={developers} />
    </>
  )
}

export default Home
