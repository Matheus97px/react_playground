import { useEffect, useState } from "react";
import Home from "../home/Home";

function Login() {

  const [completed, setCompleted] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [login, setLogin] = useState('');


   useEffect(() => {
      if (completed) {
        setLogin('Logar');
      } 
      else {
        setLogin('Confirme antes de Logar');
      }
      
    
  
    }, [completed])
  

  return (
    <>
    
      {isLogged ? (<Home />) : (
        <div>
          <h2>Componente Login</h2>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => {setIsChecked(e.target.checked); setCompleted(e.target.checked)}} 
              
            />
            Confirmo que desejo Logar
          </label>
          <br />
          <button onClick={() => !isChecked ? alert('confirme primeiro antes de entrar') : setIsLogged(true)} disabled={!isChecked}>{login}</button>
        </div>
      )}
      
    </>

  )
}

export default Login
