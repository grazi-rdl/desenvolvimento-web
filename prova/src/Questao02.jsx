import { useState } from "react"

const Questao02 = () =>{

    // Estado para controlar o tipo de imagem exibida
    const [deFrente, setDeFrente] = useState(true)

    const frenteImagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    const costaImagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"

    // Função para alternar o estado da imagem
    const virarImagem = () => {
        setDeFrente(alterarEstado => !alterarEstado)
    }

    // Determina a URL da imagem a ser exibida
    let imagem 
    if (deFrente){
        imagem = frenteImagem
    } else {
        imagem = costaImagem
    }

    // Retorna o JSX
    return (
        <>
            <img
                src={imagem}
                alt="Pikachu"
                style={{ width: '200px', height: '200px'}}
            />
            <button onClick={virarImagem}>
                Virar
            </button>
        </>
    )
}

export default Questao02