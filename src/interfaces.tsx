import { ReactNode } from "react"

export interface AuthContextObject {
  username?: string | null,
  loginErrors?: string,
  loginUser?: (values: object) => Promise<void>
}
export interface Props {
  children?: ReactNode
}

export interface Token {
  token_type: string,
  user_id: number,
  username: string
}