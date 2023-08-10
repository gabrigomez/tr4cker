import { useContext } from "react";
import { initialValues } from "../../utils";
import { EditUserTemplate } from "../Templates/EditUserTemplate";
import AuthContext from "../../context/AuthContext";

export const EditUserPage = () => {
  const { username, email, editUser } = useContext(AuthContext);
  
  const onSubmit = (values = { ...initialValues }) => {
    editUser?.({...values});
  }

  const validate = (values = { ...initialValues }) => {
    const errors = {
      username: '',
    }
    
    if (!values.username) {
      errors.username = 'obrigatório';
      return errors;              
    }          
    return;
  }

  return (
    <div>
      <div className="w-screen">
        <EditUserTemplate 
          {...{
            onSubmit,
            validate,
            username,
            email
          }} 
        />
      </div>
    </div>
  )
};