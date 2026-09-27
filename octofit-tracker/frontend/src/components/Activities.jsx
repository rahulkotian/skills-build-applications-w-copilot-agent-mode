import CollectionView from './CollectionView.jsx'

export default function Activities() {
  return (
    <CollectionView
      resource="activities"
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