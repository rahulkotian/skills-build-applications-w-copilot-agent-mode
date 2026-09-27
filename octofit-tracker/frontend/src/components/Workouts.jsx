import CollectionView from './CollectionView.jsx'
import { API_BASE_URL } from '../api.js'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
  : `${API_BASE_URL}/api/workouts/`

export default function Workouts() {
  return (
    <CollectionView
      endpoint={endpoint}
      title="Workouts"
      description="Suggested sessions and their training details."
      primary={{ label: 'Workout', value: (workout) => workout.title }}
      fields={[
        { label: 'Difficulty', value: (workout) => workout.difficulty },
        { label: 'Duration', value: (workout) => `${workout.duration} min` },
        { label: 'Exercises', value: (workout) => workout.exercises },
        { label: 'Description', value: (workout) => workout.description },
      ]}
    />
  )
}