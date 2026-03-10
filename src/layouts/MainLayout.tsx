import type { PropsWithChildren } from 'react'
import { Navbar } from '../components/Navbar'

type MainLayoutProps = PropsWithChildren<{
  showNavbar: boolean
  navigate: (path: string) => void
}>

export function MainLayout({ children, showNavbar, navigate }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {showNavbar ? <Navbar navigate={navigate} /> : null}
      <main className="mx-auto max-w-6xl p-6">{children}</main>
    </div>
  )
}
