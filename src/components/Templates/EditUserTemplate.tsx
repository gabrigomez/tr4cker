import { CheckCircle } from "@phosphor-icons/react";
import { FormOrganism } from "../Organisms/FormOrganism";
import { FieldMolecule } from "../Molecules/FieldMolecule";
import { UserInfo } from "../Molecules/UserInfo";

interface EditUserTemplateProps {
  username: string | null,
  email: string | null,
  onSubmit: () => void,
  validate: () => object | undefined,
}

export const EditUserTemplate = ({...props} : EditUserTemplateProps) => {
  return (
    <div>
      <UserInfo email={props.email} username={props.username} />
      <FormOrganism onSubmit={props.onSubmit} validate={props.validate}>
        <FieldMolecule
          name="username" 
          placeholder="new username" 
        />
        <button className="bg-black hover:bg-pink-500 duration-300 p-2 rounded-md group">
          <CheckCircle className='text-2xl mr-1 group-hover:animate-spin cursor-pointer' />
        </button> 
      </FormOrganism>
    </div>
  )
};