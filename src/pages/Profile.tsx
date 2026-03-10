import { getProfile } from '../features/profile/profileService'

export function Profile() {
  const profile = getProfile()

  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-bold font-montserrat">Perfil</h1>
      <p>Nome: {profile.name}</p>
      <p>E-mail: {profile.email}</p>
    </section>
  )
}
