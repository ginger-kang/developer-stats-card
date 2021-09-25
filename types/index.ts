export interface GithubUser {
  email: string
  repositories: RepositoryConnection
  followers: FollowerConnection
  avatarUrl: string
  issues: IssueConnection
  pullRequests: PullRequestConnection
  contributionsCollection: ContributionsCollection
}

export interface DeveloperStats extends GithubUser {
  name: string
  developer: string
}

interface RepositoryConnection {
  totalCount: number
}

interface FollowerConnection {
  totalCount: number
}

interface ContributionCalendar {
  totalContributions: number
}

interface ContributionsCollection {
  contributionCalendar: ContributionCalendar
}

interface IssueConnection {
  totalCount: number
}

interface PullRequestConnection {
  totalCount: number
}

export interface GlobalContextType {
  cursor: number
  currentPage: DeveloperStats[]
  cursorHandler: (nextCursor: number) => void
  isInitializing: () => boolean
  developerStatsHandler: (nextDeveloperStats: DeveloperStats[][]) => void
  loadMore: () => void
  hasMore: () => boolean
}
