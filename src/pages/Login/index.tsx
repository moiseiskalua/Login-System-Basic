import { ChangeEvent, useContext, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    if(email && password) {
      const isLogged = await auth.signin(email, password);
      if(isLogged) {
        navigate("/");
      } else {
        alert("Mão deu certo.")
      }
    }
  }

  return (
    <div>
        <h2>Página Fechada</h2>

        <input
          type="text"
          value={email}
          onChange={handleEmailInput}
          placeholder="Digite seu e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordInput}
          placeholder="Digite sua senha"
        />
        <button onClick={handleLogin}>
            Logar
        </button>
    </div>
  )
}

export default Login