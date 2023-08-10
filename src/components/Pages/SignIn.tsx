import { useNavigate } from "react-router";
import * as yup from "yup";

import { initialValues, validateFormValues } from "../../utils";
import { SignInTemplate } from "../Templates/SignInTemplate";
import { toast } from "react-hot-toast";
import { registerUser } from "../../services/apiService";

export const SignIn = () => {
  const navigate = useNavigate();    

  const validationSchema = yup.object({
    username: yup.string().min(4, '4 caracteres ou mais').required('obrigatório'),
    email: yup.string().email('e-mail inválido').required('obrigatório'),
    password: yup.string().min(5, 'senha muito curta').required('obrigatório'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'senhas não conferem').required('obrigatório')
  });


  const onSubmit = async (values = { ...initialValues }) => {   
    try {
      await registerUser({...values})      
      navigate("/login")
    } catch (error) {
      toast.error('E-mail já registrado');
    }     
  }

  const validate = validateFormValues(validationSchema);
  
  return (
    <SignInTemplate onSubmit={onSubmit} validate={validate} />
  )
}