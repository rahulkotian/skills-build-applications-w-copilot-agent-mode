import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

const overviewSections = [
  {
    label: 'ACTIVITY',
    title: 'Nothing logged',
    detail: 'Recorded activity will appear here.',
  },
  {
    label: 'TEAM',
    title: 'No team selected',
    detail: 'Team standings will appear here.',
  },
  {
    label: 'WORKOUT',
    title: 'No suggestion yet',
    detail: 'Personalized workouts will appear here.',
  },
]

function Dashboard() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="container-xl d-flex align-items-center gap-3 py-3">
          <img
            className="brand-logo"
            src="/octofitapp-small.png"
            alt="OctoFit Tracker"
          />
          <div className="brand-name">OctoFit Tracker</div>
        </div>
      </header>
      <main className="container-xl py-5">
        <div className="mb-4">
          <p className="section-kicker mb-2">YOUR SPACE</p>
          <h1 className="display-6 fw-semibold mb-0">Overview</h1>
        </div>
        <div className="row g-3">
          {overviewSections.map((section) => (
            <div className="col-12 col-md-6 col-xl-4" key={section.label}>
              <article className="overview-panel h-100 p-4">
                <p className="section-kicker mb-4">{section.label}</p>
                <h2 className="h5 fw-semibold">{section.title}</h2>
                <p className="text-secondary mb-0">{section.detail}</p>
              </article>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
