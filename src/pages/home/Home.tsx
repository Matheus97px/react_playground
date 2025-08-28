﻿import Card from "../card/Card"
import Contador from "../contador/Contador"
import Tarefa from "../tarefa/Tarefa"


function Home() {
  return (
    <>
    <h1>Componente Home</h1>
    <Card titulo="Bem vindo" texto="Até mais um dia" img="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0& ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGNhdHN8ZW58MHx8MHx8fDA%3D" img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdvnQQODydLFCtJhNHImDpJ5BGYcXfdNWRQ&s"/>
    <Card titulo="Bem vindo" texto="Até mais um dia" img="https://i.pinimg.com/originals/a6/1d/e1/a61de12663904e43b4a677d200e894e5.gif" img2="https://i.pinimg.com/originals/f2/ab/1a/f2ab1af79d72d94a114bc9fe5a891835.gif"/>
    

    <Contador />
    <Tarefa />
    </>
    
  )
}

export default Home