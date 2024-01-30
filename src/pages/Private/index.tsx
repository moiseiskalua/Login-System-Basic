import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

const Private = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h2>Página Privada</h2>

      Olá {auth.user?.name}
    </div>
  )
}

export default Private