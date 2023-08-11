import jwt_decode from "jwt-decode";
import { AuthToken } from "../utils";
import { loginUser, refreshTokenCall } from "./apiService";
import { Token, UserObject } from "../interfaces";
import { toast } from "react-hot-toast";

export const loginUserService = async (values: UserObject) => {
  try {
    const response = await loginUser({ ...values });
    const data: Token = jwt_decode(response.data.access);

    localStorage.setItem("token", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);

    toast.success("Login realizado!");
    return {
      authToken: response.data.access,
      username: data.username,
      id: data.user_id,
      email: data.email,
    };
    
  } catch (error: any) {
    toast.error(`${error.response.data.non_field_errors[0]}`);    
  }
};

export const updateTokenService = async (headers: object, refreshToken: AuthToken) => {
  try {
    const response = await refreshTokenCall({
      headers: {...headers},
      'refresh': refreshToken,      
    });
         
    localStorage.setItem("token", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);

    const data: Token = jwt_decode(response.data.access);

    return {
      username: data.username,
      id: data.user_id,
      email: data.email,
      authToken: response.data.access,
      refreshToken: response.data.refreshToken
    };
  } catch (error) {
    throw new Error("Não foi possível realizar a atualização");
  }
};
