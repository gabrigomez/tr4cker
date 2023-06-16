import { createContext, FC, ReactNode, useState } from "react";
import { API_URL } from "../Utils";

import axios from "axios";
import jwt_decode from "jwt-decode";

interface AuthContextObject {
  username?: string | null,
  loginErrors?: string,
  loginUser?: (values: object) => Promise<void>
}
interface Props {
  children?: ReactNode
}

interface Token {
  token_type: string,
  user_id: number,
  username: string
}

const AuthContext = createContext({} as AuthContextObject);
export default AuthContext

export const AuthProvider: FC<Props> = ({ children })  => {
  const [loginErrors, setLoginErrors] = useState<string>('')
  const [username, setUsername] = useState<string>('')

  const loginUser = async (values: object) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {...values})
      localStorage.setItem("token", response.data.access)
      const token: Token = jwt_decode(response.data.access)
      setUsername(token.username)
    } catch (error) {
      setLoginErrors('Não foi possível realizar o login')
      setTimeout(() => {
        setLoginErrors('')
      }, 4000);      
    }    
  }
  
  const contextData = {
    username: username,
    loginUser: loginUser,
    loginErrors: loginErrors
  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}


