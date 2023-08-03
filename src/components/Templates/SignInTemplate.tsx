import { FieldMolecule } from "../Molecules/FieldMolecule";
import { FormOrganism } from "../Organisms/FormOrganism";
import { SignIn as SignInIcon } from  "@phosphor-icons/react";

interface SignInTemplateProps {
  onSubmit: () => void,
  validate: (values: any) => object | undefined,
}

export const SignInTemplate = ({...props} : SignInTemplateProps) => {
  return (
    <div className="flex flex-col w-screen">
      <div className="mt-20">
        <p className="mb-4 font-bold">
          SIGN IN
        </p>
      </div>
      <FormOrganism
        onSubmit={props.onSubmit}
        validate={props.validate}
      >
        <FieldMolecule
          name="username" 
          placeholder="Username" 
        />
        <FieldMolecule
          name="email" 
          placeholder="E-mail" 
        />
        <FieldMolecule
          name="password" 
          placeholder="password"
          type="password" 
        />
        <FieldMolecule
          name="confirmPassword" 
          placeholder="Confirme a senha"
          type="password" 
        />
        <button className="bg-black hover:bg-pink-500 duration-300 mt-4 p-2 rounded-md group">
          <SignInIcon className='text-2xl mr-1 group-hover:animate-pulse cursor-pointer' />
        </button>        
      </FormOrganism>  
    </div>
  )
}