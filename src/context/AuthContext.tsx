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
  const [refreshToken, setRefreshToken] = useState<AuthToken>(localStorage.getItem("refresh") ? localStorage.getItem("refresh") : null)
  const [loading, setLoading] = useState<boolean>(true)
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
      localStorage.setItem("refresh", response.data.refresh)

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
    localStorage.removeItem("refresh")
    setAuthToken(null)
    setUsername(null)
    navigate("/login")
  }
  
  const updateToken = async () => {   
    console.log('Update!!!!') 
    try {
      const response = await axios.post(`${API_URL}/token/refresh`, {
        headers: {...headers},
        'refresh':refreshToken        
      })
           
      localStorage.setItem("token", response.data.access)
      localStorage.setItem("refresh", response.data.refresh)

      setAuthToken(response.data.access)
      setRefreshToken(response.data.refresh)
    
    } catch (error) {
      console.log('Não foi possível realizar a atualização')          
    }
    
    if(loading){
      setLoading(false)
    }
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
  }, [authToken])

  useEffect(() => {
    const expireTime = 1000 * 60 * 4
    
    if(loading){
      updateToken()
    }

    const interval =  setInterval(()=> {
      if(authToken){
        updateToken()
      }
    }, expireTime)

    return () => clearInterval(interval)

  })

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}


