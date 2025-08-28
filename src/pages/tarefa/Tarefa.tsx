import { useEffect, useState } from "react";

function Tarefa() {

  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completed) {
      setTarefa('Tarefa concluida');
    } 
    else {
      setTarefa('');
    }
    
  

  }, [completed])

  

  return (
    <>
      <h1>Componente Tarefa</h1>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(!completed)}>{completed ? 'Reiniciar' : 'Concluir'}</button>
      
    </>

  )
}

export default Tarefa