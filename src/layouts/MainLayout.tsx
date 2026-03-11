import type { PropsWithChildren } from 'react'
import { Navbar } from '../components/Navbar'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-6xl p-6">{children}</main>
    </div>
  )
}