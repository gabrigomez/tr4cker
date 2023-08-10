import jwt_decode from "jwt-decode";
import { createContext, FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { AuthToken, Email, User } from "../utils";
import { AuthContextObject, Props, Token, UserObject } from "../interfaces";
import { toast } from "react-hot-toast";

import { editUserCall, loginUser as loginUserCall, refreshTokenCall } from "../services/apiService";

const AuthContext = createContext({} as AuthContextObject);
export default AuthContext

export const AuthProvider: FC<Props> = ({ children })  => {
  const [username, setUsername] = useState<User>(null)
  const [email, setEmail] = useState<Email>(null)
  const [authToken, setAuthToken] = useState<AuthToken>(localStorage.getItem("token") ? localStorage.getItem("token") : null)
  const [refreshToken, setRefreshToken] = useState<AuthToken>(localStorage.getItem("refresh") ? localStorage.getItem("refresh") : null)
  
  const [id, setId] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  
  const headers = { Authorization: `Bearer ${authToken}` }
  const navigate = useNavigate();

  const loginUser = async (values: UserObject) => {    
    try {
      const response = await loginUserCall({...values})
      const data: Token = jwt_decode(response.data.access)
      
      localStorage.setItem("token", response.data.access)
      localStorage.setItem("refresh", response.data.refresh)

      setAuthToken(response.data.access)
      setUsername(data.username)
      setId(data.user_id)
      setEmail(data.email)

    } catch (error) {
      toast.error('Não foi possível realizar o login')   
    }    
  }  

  const updateToken = async () => {
    try {
      const response = await refreshTokenCall({
        headers: {...headers},
        'refresh': refreshToken        
      })
           
      localStorage.setItem("token", response.data.access)
      localStorage.setItem("refresh", response.data.refresh)

      const data: Token = jwt_decode(response.data.access)
      
      setUsername(data.username)
      setId(data.user_id)
      setEmail(data.email)
      setAuthToken(response.data.access)
      setRefreshToken(response.data.refresh)
    
    } catch (error) {
      console.log('Não foi possível realizar a atualização')          
    }
    
    if(loading){
      setLoading(false)
    }
  }

  const editUser = async (values: UserObject) => { 
    try {      
      const response = await editUserCall(id, {
        email: email,
        id: id,
        username: values.username,        
      }, {
        headers: {...headers},        
      })
            
      setUsername(response.data.username)      
      toast.success("Informações atualizadas!")
      navigate("/dashboard")
    } catch (error) {
      toast.error('Não foi possível realizar a solicitação')   
    }    
  }

  const logoutUser = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("refresh")
    setAuthToken(null)
    setUsername(null)
  }
  
  const contextData: AuthContextObject = {
    username: username,
    email: email,
    id: id,
    authToken: authToken,
    setUsername: setUsername,
    loginUser: loginUser,
    logoutUser: logoutUser,
    editUser: editUser    
  }

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

  useEffect(() => {
    if(authToken) {
      const data: Token = jwt_decode(authToken)
      setUsername(data.username)
    }
  }, [authToken])

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}


