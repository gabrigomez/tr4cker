import { UserInfo } from "../Molecules/UserInfo"
import { EditUser } from "../Organisms/EditUser"

interface EditUserTemplateProps {
  username: string | null,
  email: string | null,
  onSubmit: () => void,
  validate: () => object | undefined
}

export const EditUserTemplate = ({...props} : EditUserTemplateProps) => {
  return (
    <div>
      <UserInfo email={props.email} username={props.username} />
      <EditUser onSubmit={props.onSubmit} validate={props.validate} />
    </div>
  )
}