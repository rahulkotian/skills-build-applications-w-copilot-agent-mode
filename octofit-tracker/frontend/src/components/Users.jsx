import CollectionView from './CollectionView.jsx'
import { API_BASE_URL } from '../api.js'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/users/`
  : `${API_BASE_URL}/api/users/`

export default function Users() {
  return (
    <CollectionView
      endpoint={endpoint}
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