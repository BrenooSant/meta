import { Link } from 'react-router-dom'
import LogoMeta from '../assets/logo-meta.png'

export function Navbar() {
  return (
    <header className="w-full gradient-background flex flex-row items-center px-4 py-2 text-white justify-between">
      <img src={LogoMeta} alt="Logo Meta Centro Esportivo" className="h-14" />

      <div className="flex flex-row gap-6">
        <Link className="navbar-button" to="/">
          Home
        </Link>

        <Link className="navbar-button" to="/agendamentos">
          Agendamentos
        </Link>

        <Link className="navbar-button" to="/perfil">
          Perfil
        </Link>
      </div>
    </header>
  )
}