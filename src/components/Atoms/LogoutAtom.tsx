interface logoutUserAtomProps {
  logoutUser: (() => void) | undefined 
}

export const LogoutAtom = ({logoutUser} : logoutUserAtomProps) => {
  return (
    <button onClick={logoutUser} className='group-hover:text-sky-700 duration-300 cursor-pointer'>
      Log out
    </button>
  )
}