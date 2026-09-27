import CollectionView from './CollectionView.jsx'

export default function Workouts() {
  return (
    <CollectionView
      endpoint="/api/workouts/"
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