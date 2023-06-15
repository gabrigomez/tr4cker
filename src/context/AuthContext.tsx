import { createContext, FC, ReactNode } from "react";

interface AuthContextObject {
  username?: string
}

interface Props {
  children?: ReactNode
}

const AuthContext = createContext({} as AuthContextObject);

export default AuthContext

export const AuthProvider: FC<Props> = ({ children })  => {
  const contextData = {
    username: 'admin'
  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}

