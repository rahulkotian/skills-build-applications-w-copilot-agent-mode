import { useEffect, useState } from 'react'
import { apiUrl, collectionFromResponse } from '../api.js'

function displayValue(value) {
  if (value === null || value === undefined || value === '') return '—'
  if (Array.isArray(value)) return value.length ? value.join(', ') : '—'
  if (typeof value === 'object') {
    return value.name ?? value.title ?? value.email ?? value._id ?? '—'
  }
  return String(value)
}

export default function CollectionView({ resource, title, description, primary, fields }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadCollection() {
      setStatus('loading')
      setError('')

      try {
        const response = await fetch(apiUrl(resource), { signal: controller.signal })
        const payload = await response.json()
        if (!response.ok) {
          throw new Error(payload.error || `Request failed (${response.status})`)
        }
        setItems(collectionFromResponse(payload))
        setStatus('success')
      } catch (requestError) {
        if (requestError.name === 'AbortError') return
        setError(requestError.message || 'Unable to load this collection.')
        setStatus('error')
      }
    }

    loadCollection()
    return () => controller.abort()
  }, [resource])

  return (
    <section className="collection-view">
      <p className="section-kicker mb-2">OCTOFIT DATA</p>
      <div className="collection-heading">
        <div>
          <h1 className="page-title">{title}</h1>
          <p className="page-intro">{description}</p>
        </div>
        {status === 'success' && <span className="record-count">{items.length} records</span>}
      </div>

      {status === 'loading' && <p className="request-message" role="status">Loading {title.toLowerCase()}…</p>}
      {status === 'error' && <p className="request-message request-error" role="alert">{error}</p>}
      {status === 'success' && items.length === 0 && (
        <p className="request-message">No {title.toLowerCase()} found.</p>
      )}
      {status === 'success' && items.length > 0 && (
        <div className="collection-list">
          {items.map((item, index) => (
            <article className="collection-row" key={item._id ?? item.id ?? index}>
              <div className="collection-primary">
                <span className="row-number">{String(index + 1).padStart(2, '0')}</span>
                <h2>{displayValue(primary.value(item))}</h2>
              </div>
              <dl className="collection-fields">
                {fields.map((field) => (
                  <div className="collection-field" key={field.label}>
                    <dt>{field.label}</dt>
                    <dd>{displayValue(field.value(item))}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}