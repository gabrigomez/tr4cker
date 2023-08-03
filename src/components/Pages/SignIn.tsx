import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import * as yup from "yup";

import { API_URL, initialValues, validateFormValues } from "../../utils";
import { SignInTemplate } from "../Templates/SignInTemplate";

export const SignIn = () => {
  const [errors, setErrors] = useState<string>('')
  const navigate = useNavigate();    

  const validationSchema = yup.object({
    username: yup.string().min(4, '4 caracteres ou mais').required('obrigatório'),
    email: yup.string().email('e-mail inválido').required('obrigatório'),
    password: yup.string().min(5, 'senha muito curta').required('obrigatório'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'senhas não conferem').required('obrigatório')
  });


  const onSubmit = async (values = { ...initialValues }) => {   
    try {
      await axios.post(`${API_URL}/register`, {...values})      
      navigate("/login")
    } catch (error) {
      setErrors('não foi possível realizar o registro')
      setTimeout(() => {
        setErrors('')
      }, 4000)
    }     
  }

  const validate = validateFormValues(validationSchema);
  
  return (
    // add an error case when submit fails
    <SignInTemplate onSubmit={onSubmit} validate={validate} />
  )
}