import type { DeveloperInfo } from '../types'
import { useGlobalState } from './GlobalContext'

interface hProps {
  developers: DeveloperInfo[][]
}

function Home({ developers }: hProps) {
  const { cursor, cursorHandler } = useGlobalState()

  console.log(developers, cursor)
  return (
    <>
      <div>Home</div>
      <button onClick={() => cursorHandler(cursor + 1)}>버튼</button>
    </>
  )
}

export default Home
