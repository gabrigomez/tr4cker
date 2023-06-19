import { createContext, FC, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { API_URL, Email, User } from "../utils";
import { AuthContextObject, Props, Token } from "../interfaces";
import { useNavigate } from "react-router";

const AuthContext = createContext({} as AuthContextObject);
export default AuthContext

export const AuthProvider: FC<Props> = ({ children })  => {
  const [token, setToken] = useState<string>('')
  const [loginErrors, setLoginErrors] = useState<string>('')
  const [username, setUsername] = useState<User>(null)
  const [email, setEmail] = useState<Email>(null)
  const [id, setId] = useState<number>(0)
  
  const navigate = useNavigate();
  const headers = { Authorization: `Bearer ${token}` };

  const loginUser = async (values: object) => {    
    try {
      const response = await axios.post(`${API_URL}/login`, {...values})
      const data: Token = jwt_decode(response.data.access)
      
      localStorage.setItem("token", response.data.access)
      setToken(response.data.access)
      setUsername(data.username)
      setId(data.user_id)
      setEmail(data.email)
      navigate("/dashboard")      
    } catch (error) {
      setLoginErrors('Não foi possível realizar o login')
      setTimeout(() => {
        setLoginErrors('')
      }, 4000);      
    }    
  }

  const editUser = async (values: AuthContextObject) => { 
    try {      
      const response = await axios.patch(`${API_URL}/user/${id}`, {
        email: email,
        id: id,
        username: values.username,        
      }, {
        headers: {...headers},        
      })
            
      setUsername(response.data.username)      
      navigate("/dashboard")      
    } catch (error) {
      setLoginErrors('Não foi possível realizar a solicitação')
      setTimeout(() => {
        setLoginErrors('')
      }, 4000);      
    }    
  }

  const logoutUser = () => {
    localStorage.removeItem("token")
    setUsername(null)
    navigate("/login")
  }
  
  const contextData = {
    username: username,
    id: id,
    email: email,
    loginErrors: loginErrors,
    loginUser: loginUser,
    logoutUser: logoutUser,
    editUser: editUser    
  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}


