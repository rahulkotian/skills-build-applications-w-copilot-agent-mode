import CollectionView from './CollectionView.jsx'

export default function Leaderboard() {
  return (
    <CollectionView
      endpoint="/api/leaderboard/"
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