const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export function apiUrl(resource) {
  return `${API_BASE_URL}/${resource}/`
}

export function collectionFromResponse(payload) {
  if (Array.isArray(payload)) return payload
  if (!payload || typeof payload !== 'object') return []

  for (const key of ['data', 'results', 'items', 'docs', 'records']) {
    const collection = collectionFromResponse(payload[key])
    if (collection.length > 0 || Array.isArray(payload[key])) return collection
  }

  return []
}