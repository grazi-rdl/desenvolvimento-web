function mensagemImc(imc) {
    if(imc < 18) return "Abaixo do peso";
    else if(imc > 25) return "Acima do peso";
    else return "Peso ideal";
}

const Filho = (props) => {
    const imc = props.peso / (props.altura*props.altura);
    return (
        <div>
            <h1>IMC: {imc}</h1>
            <h3>{mensagemImc(imc)}</h3>
        </div>
    );
}

export default Filho;