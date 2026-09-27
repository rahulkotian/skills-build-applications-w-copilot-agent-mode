import CollectionView from './CollectionView.jsx'
import { API_BASE_URL } from '../api.js'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/teams/`
  : `${API_BASE_URL}/api/teams/`

export default function Teams() {
  return (
    <CollectionView
      endpoint={endpoint}
      title="Teams"
      description="Squads competing across the OctoFit community."
      primary={{ label: 'Team', value: (team) => team.name }}
      fields={[
        { label: 'Members', value: (team) => Array.isArray(team.members) ? team.members.length : 0 },
        { label: 'Points', value: (team) => team.points },
      ]}
    />
  )
}