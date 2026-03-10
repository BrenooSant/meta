import LogoMeta from '../assets/logo-meta.png'
import { CalendarIcon, MoneyIcon, ProfileIcon } from './icons/SimpleIcons'

type NavbarProps = {
  navigate: (path: string) => void
}

export function Navbar({ navigate }: NavbarProps) {
  return (
    <header className="w-full bg-maingreen flex flex-row items-center px-12 py-2 text-white justify-between">
      <img src={LogoMeta} alt="Logo Meta Centro Esportivo" className="h-14" />

      <div className="flex flex-row gap-8">
        <button className="navbar-button" onClick={() => navigate('/agendamentos')}>
          <CalendarIcon />
          Agendamentos
        </button>

        <button className="navbar-button" onClick={() => navigate('/perfil')}>
          <ProfileIcon />
          Perfil
        </button>

        <button className="navbar-button" onClick={() => navigate('/home')}>
          <MoneyIcon />
          Home
        </button>
      </div>
    </header>
  )
}
