import CollectionView from './CollectionView.jsx'

export default function Teams() {
  return (
    <CollectionView
      endpoint="/api/teams/"
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