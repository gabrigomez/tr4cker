import { ReactNode } from "react"
import { User } from "./utils"

export interface ArtistProps {
  name?: string,
  id?: string,
  image: string,
  genre?: string,
  followers?: number,
  songs?: Array<string>,
  link?: string
  deleteMode?: boolean 
}
export interface AuthContextObject {
  username?: string | null,
  email?: string | null,
  id?: number,
  authToken?: string | null,
  loginErrors?: string,
  setUsername: (value: React.SetStateAction<User>) => void
  loginUser?: (values: UserObject) => Promise<void>
  logoutUser?: () => void,
  editUser?: (values: UserObject) => Promise<void>
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
export interface UserObject {
  username?: string,
  email?: string,
  password?: string
}

