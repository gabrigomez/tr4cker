import { useState } from "react"

export const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <div className="flex flex-col w-screen">
      <div className="mt-20">
        <p className="mb-4">
          LOGIN
        </p>
        <form action="submit" onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              placeholder="E-mail" 
              className="bg-black m-2 p-2 rounded-md"
              onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Senha"
              className="bg-black m-4 p-2 rounded-md"
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="bg-black hover:bg-gray-900 duration-300 p-2 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}