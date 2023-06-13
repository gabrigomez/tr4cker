import { useState } from "react";
import { SignIn as SignInIcon } from  "@phosphor-icons/react";


export const SignIn = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(username, email, password, confirmPassword);
  }

  return (
    <div className="flex flex-col w-screen">
      <div className="mt-20">
        <p className="mb-4">
          SIGN IN
        </p>
      </div>
      <form action="submit" onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              placeholder="Username" 
              className="bg-black m-2 p-2 rounded-md"
              onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="E-mail" 
              className="bg-black m-2 p-2 rounded-md"
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Senha"
              className="bg-black m-2 p-2 rounded-md"
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Confirme a senha"
              className="bg-black m-2 p-2 rounded-md"
              onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button className="bg-black hover:bg-gray-900 duration-300 mt-4 p-2 rounded-md group">
            <SignInIcon className='text-2xl mr-1 group-hover:animate-pulse cursor-pointer' />
          </button>
        </form>
    </div>
  )
}