import { DashboardLink } from "../Molecules/DashboardLink"
import { LogoutMolecule } from "../Molecules/LogoutMolecule"

interface DashboardOptionsProps {
  logoutUser: (() => void) | undefined
}

export const DashboardOptions = ({logoutUser} : DashboardOptionsProps) => {
  return (
    <div className='flex'>
      <DashboardLink />
      <LogoutMolecule logoutUser={logoutUser} />
    </div> 
  )
}