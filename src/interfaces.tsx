import { ReactNode } from "react"
import { User } from "./utils"

export interface AuthContextObject {
  username?: string | null,
  setUsername: (value: React.SetStateAction<User>) => void
  id?: number,
  email?: string | null,
  authToken?: string | null,
  loginErrors?: string,
  loginUser?: (values: UserObject) => Promise<void>
  logoutUser?: () => void,
  editUser?: (values: UserObject) => Promise<void>
}

export interface UserObject {
  username?: string,
  email?: string,
  password?: string
}
export interface Props {
  children?: ReactNode
}

export interface Token {
  token_type: string,
  user_id: number,
  email: string,
  username: string
}