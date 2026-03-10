import type { PropsWithChildren } from 'react'

type ModalProps = PropsWithChildren<{ open: boolean; title: string }>

export function Modal({ open, title, children }: ModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-5">
        <h2 className="mb-3 text-lg font-semibold">{title}</h2>
        {children}
      </div>
    </div>
  )
}
