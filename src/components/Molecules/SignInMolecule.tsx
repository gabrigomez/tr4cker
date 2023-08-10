import { SignInAtom } from "../Atoms/SignInAtom";
import { UserCirclePlus } from "@phosphor-icons/react";

export const SignInMolecule = () => {
  return (
    <div className='mr-4 flex items-center group'>
      <UserCirclePlus className='text-2xl mr-1 group-hover:text-sky-700 cursor-pointer' />
      <SignInAtom />
    </div>
  )
};