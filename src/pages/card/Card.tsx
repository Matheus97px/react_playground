import { useState } from "react";

interface cardProps {
    titulo: string;
    texto: string;
    op?: number;
    img?: string;
    img2?: string
}



function Card(props: cardProps) {
    const [completed, setCompleted] = useState(false);

    const imagemAtual = completed ? props.img2 : props.img;

    return (
        <>
            <h1>Card</h1>
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
            <p>{props.op}</p>
            <img src={imagemAtual} alt="" style={{ width: "150px" , height: "200px" }} />
            <br />
            <button onClick={() => setCompleted(!completed)}>{completed ? 'Imagem 1' : 'Imagem 2'}</button>
        </>

    )
}

export default Card