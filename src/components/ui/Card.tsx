import type { PropsWithChildren } from 'react'

export function Card({ children }: PropsWithChildren) {
  return <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">{children}</div>
}
