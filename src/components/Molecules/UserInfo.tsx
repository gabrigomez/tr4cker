import { Email } from "../Atoms/Email";
import { Username } from "../Atoms/Username";

interface UserInfoProps {
  username: string | null,
  email: string | null,
}

export const UserInfo = ({username, email} : UserInfoProps) => {
  return (
    <div>
      <Username username={username} />
      <Email email={email} />
    </div>
  )
};