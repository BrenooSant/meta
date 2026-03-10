import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-md bg-maingreen px-4 py-2 text-white transition-opacity hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
