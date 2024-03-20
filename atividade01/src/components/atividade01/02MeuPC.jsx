const PlacaMae = (props) => {
    return (
        <div>
            <h1>Placa Mãe:</h1>
            <h1>{props.nome}</h1>
            <h1>{props.preco}</h1>
        </div>
    );
}

const Memoria = (props) => {
    return (
        <div>
            <h1>Memoria:</h1>
            <h1>{props.nome}</h1>
            <h1>{props.preco}</h1>
        </div>
    );
}

const PlacaDeVideo = (props) => {
    return (
        <div>
            <h1>Placa de Vídeo:</h1>
            <h1>{props.nome}</h1>
            <h1>{props.preco}</h1>
        </div>
    );
}

export {PlacaMae, Memoria, PlacaDeVideo};