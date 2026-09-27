import CollectionView from './CollectionView.jsx'
import { API_BASE_URL } from '../api.js'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`
  : `${API_BASE_URL}/api/leaderboard/`

export default function Leaderboard() {
  return (
    <CollectionView
      endpoint={endpoint}
      title="Leaderboard"
      description="Member standings ranked by earned points."
      primary={{ label: 'Member', value: (entry) => entry.user }}
      fields={[
        { label: 'Rank', value: (entry) => entry.rank ? `#${entry.rank}` : null },
        { label: 'Team', value: (entry) => entry.team },
        { label: 'Points', value: (entry) => entry.points },
      ]}
    />
  )
}