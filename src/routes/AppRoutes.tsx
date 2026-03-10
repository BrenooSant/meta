import { useEffect, useState } from 'react'
import { MainLayout } from '../layouts/MainLayout'
import { Home } from '../pages/Home'
import { Courts } from '../pages/Courts'
import { Bookings } from '../pages/Bookings'
import { Profile } from '../pages/Profile'

const NAVBAR_PATHS = new Set(['/home', '/agendamentos', '/perfil'])

function normalizePath(path: string) {
  return path === '/' ? '/home' : path.toLowerCase()
}

export function AppRoutes() {
  const [path, setPath] = useState(normalizePath(window.location.pathname))

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (to: string) => {
    const nextPath = normalizePath(to)
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
  }

  let page = <Home />

  if (path === '/quadras') page = <Courts />
  if (path === '/agendamentos') page = <Bookings />
  if (path === '/perfil') page = <Profile />

  return (
    <MainLayout showNavbar={NAVBAR_PATHS.has(path)} navigate={navigate}>
      {page}
    </MainLayout>
  )
}
