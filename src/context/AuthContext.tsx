import { createContext, FC, useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { API_URL, AuthToken, Email, User } from "../utils";
import { AuthContextObject, Props, Token } from "../interfaces";
import { useNavigate } from "react-router";

const AuthContext = createContext({} as AuthContextObject);
export default AuthContext

export const AuthProvider: FC<Props> = ({ children })  => {
  const [authToken, setAuthToken] = useState<AuthToken>(localStorage.getItem("token") ? localStorage.getItem("token") : null)
  const [loginErrors, setLoginErrors] = useState<string>('')
  const [username, setUsername] = useState<User>(null)
  const [email, setEmail] = useState<Email>(null)
  const [id, setId] = useState<number>(0)
  
  const navigate = useNavigate();
  const headers = { Authorization: `Bearer ${authToken}` };

  const loginUser = async (values: object) => {    
    try {
      const response = await axios.post(`${API_URL}/login`, {...values})
      const data: Token = jwt_decode(response.data.access)
      
      localStorage.setItem("token", response.data.access)
      setAuthToken(response.data.access)
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
    setAuthToken(null)
    setUsername(null)
    navigate("/login")
  }
  
  const contextData = {
    username: username,
    id: id,
    email: email,
    authToken: authToken,
    loginErrors: loginErrors,
    loginUser: loginUser,
    logoutUser: logoutUser,
    editUser: editUser    
  } 

  useEffect(() => {
    if(authToken) {
      const data: Token = jwt_decode(authToken)
      setUsername(data.username)
    }
  })

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}


