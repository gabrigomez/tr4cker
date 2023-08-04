import { SignOut } from "@phosphor-icons/react"
import { LogoutAtom } from "../Atoms/LogoutAtom"

interface logoutUserMoleculeProps {
  logoutUser: (() => void) | undefined 
}

export const LogoutMolecule = ({logoutUser} : logoutUserMoleculeProps) => {
  return (
    <div className='mr-4 flex items-center group'>
      <SignOut className='text-2xl mr-1 group-hover:text-sky-700 cursor-pointer' />
      <LogoutAtom logoutUser={logoutUser} />
    </div>
  )
}