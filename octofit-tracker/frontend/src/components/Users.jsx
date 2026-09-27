import CollectionView from './CollectionView.jsx'

export default function Users() {
  return (
    <CollectionView
      resource="users"
      title="Users"
      description="People taking part in the OctoFit community."
      primary={{ label: 'Member', value: (user) => user.name }}
      fields={[
        { label: 'Email', value: (user) => user.email },
        { label: 'Joined', value: (user) => user.createdAt && new Date(user.createdAt).toLocaleDateString() },
      ]}
    />
  )
}