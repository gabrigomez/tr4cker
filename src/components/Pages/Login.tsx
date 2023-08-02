import AuthContext from "../../context/AuthContext";
import * as yup from "yup";
import { useNavigate } from "react-router";

import { useContext, useEffect } from "react";
import { initialValues, validateFormValues } from '../../utils';
import { LoginTemplate } from "../Templates/LoginTemplate";

export const Login = () => {
  const { loginUser, authToken } = useContext(AuthContext)
  const navigate = useNavigate()
  
  const validationSchema = yup.object({
    email: yup.string().email('e-mail inválido').required('obrigatório'),
    password: yup.string().required('obrigatório')
  });

  const onSubmit = (values = { ...initialValues }) => {
    loginUser?.({...values})
  }

  const validate = validateFormValues(validationSchema);
  
  useEffect(() => {
    if (authToken) {
      navigate("/dashboard")
    }
  }) 

  return (
    <div className="flex flex-col w-screen">
      <LoginTemplate onSubmit={onSubmit} validate={validate} />
    </div>
  )
}