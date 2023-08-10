import jwt_decode from "jwt-decode";
import { loginUser } from "./apiService";
import { Token, UserObject } from "../interfaces";

export const loginUserService = async (values: UserObject) => {
  try {
    const response = await loginUser({ ...values });
    const data: Token = jwt_decode(response.data.access);

    localStorage.setItem("token", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);

    return {
      authToken: response.data.access,
      username: data.username,
      id: data.user_id,
      email: data.email,
    };
  } catch (error) {
    throw new Error("Não foi possível realizar o login");
  }
};
