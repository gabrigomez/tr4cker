import { Keyhole } from "@phosphor-icons/react"
import { LoginAtom } from "../Atoms/LoginAtom"

export const LoginMolecule = () => {
  return (
    <div className='mr-4 flex items-center group'>
      <Keyhole className='text-2xl mr-1 group-hover:text-sky-700 cursor-pointer' />
      <LoginAtom />
    </div>
  )
}