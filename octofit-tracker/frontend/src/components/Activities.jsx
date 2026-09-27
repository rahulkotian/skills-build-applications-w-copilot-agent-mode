import CollectionView from './CollectionView.jsx'
import { API_BASE_URL } from '../api.js'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
  : `${API_BASE_URL}/api/activities/`

export default function Activities() {
  return (
    <CollectionView
      endpoint={endpoint}
      title="Activities"
      description="Training sessions recorded by OctoFit members."
      primary={{ label: 'Activity', value: (activity) => activity.type }}
      fields={[
        { label: 'Member', value: (activity) => activity.user },
        { label: 'Duration', value: (activity) => `${activity.duration} min` },
        { label: 'Distance', value: (activity) => activity.distance ? `${activity.distance} km` : null },
        { label: 'Points', value: (activity) => activity.points },
        { label: 'Completed', value: (activity) => activity.completedAt && new Date(activity.completedAt).toLocaleDateString() },
      ]}
    />
  )
}