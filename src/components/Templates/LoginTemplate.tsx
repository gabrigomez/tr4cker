import { FormOrganism } from "../Organisms/FormOrganism";
import { FieldMolecule } from "../Molecules/FieldMolecule";
import { Keyhole } from "@phosphor-icons/react";
interface LoginTemplateProps {
  onSubmit: () => void,
  validate: (values: any) => object | undefined,
}

export const LoginTemplate = ({...props} : LoginTemplateProps) => {
  return (
    <div className="mt-20">
      <p className="mb-4 font-bold">
        LOGIN
      </p>
      <FormOrganism
        onSubmit={props.onSubmit}
        validate={props.validate}
      >
        <FieldMolecule
          name="email" 
          placeholder="E-mail" 
        />
        <FieldMolecule
          name="password" 
          placeholder="password"
          type="password" 
        />
        <button className="bg-black hover:bg-pink-500 duration-300 p-2 rounded-md group">
          <Keyhole className='text-2xl mr-1 group-hover:animate-spin cursor-pointer' />
        </button> 
      </FormOrganism>     
    </div>
  )
};