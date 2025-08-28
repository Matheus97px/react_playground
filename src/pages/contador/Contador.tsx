import { useState } from "react"

function Contador() {
  const [valor, setValor] = useState(0) 
  const salto = 2

const handleClick = (menosMais: boolean) => {
 menosMais ? setValor(valor - salto) : setValor(valor + salto)
}


  return (
    <>
    <h1>Componente Contador</h1>
    <p>O valor atual é: {valor}</p>
    <button onClick={() => handleClick(false)}>Incrementar em {salto}</button>
    <button onClick={() => handleClick(true)}>Diminuir em {salto}</button>
    </>
  )
}

export default Contador