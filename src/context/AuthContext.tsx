import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import jwt_decode from "jwt-decode";

import { AuthToken, Email, User } from "../utils";
import { AuthContextObject, Props, Token, UserObject } from "../interfaces";
import { toast } from "react-hot-toast";
import { editUserCall } from "../services/apiService";
import { loginUserService, updateTokenService } from "../services/authService";

const AuthContext = createContext({} as AuthContextObject);

export const AuthProvider = ({ children } : Props)  => {
  const [authToken, setAuthToken] = useState<AuthToken>(() => localStorage.getItem("token"));
  const [refreshToken, setRefreshToken] = useState<AuthToken>(() => localStorage.getItem("refresh"));
  const [email, setEmail] = useState<Email>(null);
  const [username, setUsername] = useState<User>(null);
  
  const [id, setId] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  
  const headers = { Authorization: `Bearer ${authToken}` };
  const navigate = useNavigate();

  const handleLogin = async (values: UserObject) => {    
    const response = await loginUserService({...values});

    setAuthToken(response!.authToken);
    setUsername(response!.username);
    setId(response!.id);
    setEmail(response!.email);
  };

  const updateToken = async () => {    
    const response = await updateTokenService({...headers}, refreshToken);
  
    setUsername(response.username);
    setId(response.id);
    setEmail(response.email);
    setAuthToken(response.authToken);
    setRefreshToken(response.refreshToken);    
    
    if(loading){
      setLoading(false);
    }
  };

  const editUser = async (values: UserObject) => { 
    try {      
      const response = await editUserCall(id, {
        email: email,
        id: id,
        username: values.username,        
      }, {
        headers: {...headers},        
      })
            
      setUsername(response.data.username);     
      toast.success("Informações atualizadas!");
      
      navigate("/dashboard");
    } catch (error) {
      toast.error('Não foi possível realizar a solicitação');   
    }    
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    
    setAuthToken(null);
    setUsername(null);
  };
  
  const contextData: AuthContextObject = {
    username: username,
    email: email,
    id: id,
    authToken: authToken,
    setUsername: setUsername,
    loginUser: handleLogin,
    logoutUser: logoutUser,
    editUser: editUser,  
  };

  useEffect(() => {
    setRefreshToken(localStorage.getItem("refresh"));
    const expireTime = 1000 * 60 * 4;
    
    if(loading){
      updateToken();
    }

    const interval =  setInterval(()=> {
      if(authToken){
        updateToken()
      }
    }, expireTime);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if(authToken) {
      const data: Token = jwt_decode(authToken);
      setUsername(data.username);
    }
  }, [authToken]);

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;


