import { LoginMolecule } from "../Molecules/LoginMolecule";
import { SignInMolecule } from "../Molecules/SignInMolecule";

export const LoginOptions = () => {
  return (
    <div className='flex'>
      <LoginMolecule />
      <SignInMolecule />
    </div>
  )
};