import type { DeveloperInfo } from '../types'

interface hProps {
  developers: DeveloperInfo[][]
}

function Home({ developers }: hProps) {
  return <div>Home</div>
}

export default Home
