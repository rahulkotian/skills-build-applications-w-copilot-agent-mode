import { Link, Navigate, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import { API_BASE_URL } from './api.js'
import './App.css'

const sections = [
  { path: '/', label: 'Overview', end: true },
  { path: '/activities', label: 'Activities' },
  { path: '/leaderboard', label: 'Leaderboard' },
  { path: '/teams', label: 'Teams' },
  { path: '/users', label: 'Users' },
  { path: '/workouts', label: 'Workouts' },
]

function Overview() {
  return (
    <section className="overview-content">
      <p className="section-kicker mb-2">YOUR SPACE</p>
      <h1 className="page-title">Overview</h1>
      <p className="page-intro">Explore the latest training and team data.</p>
      <div className="row g-3 mt-2">
        {sections.slice(1).map((section, index) => (
          <div className="col-12 col-md-6 col-xl-4" key={section.path}>
            <Link className="overview-panel" to={section.path}>
              <span className="overview-index">0{index + 1}</span>
              <span className="overview-label">{section.label}</span>
              <span className="overview-arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        ))}
      </div>
      <p className="api-origin"><span className="status-dot" /> API: {API_BASE_URL}/api</p>
    </section>
  )
}

function AppLayout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="container-xl header-inner">
          <Link className="brand" to="/" aria-label="OctoFit Tracker home">
            <img className="brand-logo" src="/octofitapp-small.png" alt="" />
            <span className="brand-name">OctoFit Tracker</span>
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            {sections.map((section) => (
              <NavLink
                key={section.path}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                to={section.path}
                end={section.end}
              >
                {section.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="container-xl main-content">
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Overview />} />
        <Route path="activities" element={<Activities />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="teams" element={<Teams />} />
        <Route path="users" element={<Users />} />
        <Route path="workouts" element={<Workouts />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
