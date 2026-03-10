import LogoMeta from '../assets/logo-meta.png'

type NavbarProps = {
  navigate: (path: string) => void
}

export function Navbar({ navigate }: NavbarProps) {
  return (
    <header className="w-full bg-maingreen flex flex-row items-center px-4 py-2 text-white justify-between">
      <img src={LogoMeta} alt="Logo Meta Centro Esportivo" className="h-14" />

      <div className="flex flex-row gap-6">
      <button className="navbar-button" onClick={() => navigate('/home')}>
          Home
        </button>
        <button className="navbar-button" onClick={() => navigate('/agendamentos')}>
          Agendamentos
        </button>

        <button className="navbar-button" onClick={() => navigate('/perfil')}>
          Perfil
        </button>

      </div>
    </header>
  )
}
