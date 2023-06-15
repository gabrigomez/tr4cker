import { createContext, FC, ReactNode } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";
import { API_URL } from "../Utils";
import axios from "axios";

interface AuthContextObject {
  username?: string | null
  loginUser?: (values: object) => Promise<void>
}
interface Props {
  children?: ReactNode
}

const AuthContext = createContext({} as AuthContextObject);
export default AuthContext

export const AuthProvider: FC<Props> = ({ children })  => {
  // const token = localStorage.getItem("token") ? jwt_decode(localStorage.getItem("token")) : null
  // const token = localStorage.getItem("token")
  // const decode = token ? jwt_decode(token) : null
  const navigate = useNavigate();
  let token = {}  

  const loginUser = async (values: object) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {...values})
      token = jwt_decode(response.data.access)
      console.log(token)
      //navigate("/dashboard")
    } catch (error) {
      console.log(error)      
    }    
  }

  
  const contextData = {
    //username: token?.username
    loginUser: loginUser
  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}


