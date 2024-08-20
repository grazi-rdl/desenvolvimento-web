const Questao01A = () => {

    const lista = [
        {a:10, b:3, c: 7},
        {a:5, b:-3, c: 9},
        {a:1, b:9, c: 40}
    ]

    //Renderiza o componente Questao01B e passa a lista de objetos como uma prop.
    return (
        <div>
            <Questao01B lista = {lista}/>
        </div>
    )
}

function Questao01B ({lista}){

    // Função para encontrar o maior valor em um objeto.
    // A função extrai os valores das propriedades do objeto e identifica o maior valor.
    const encontrarMaiorValor = (obj) => {
        
        let valores = Object.values(obj)
        let maiorValor = valores[0]

        // Itera sobre o array de valores, começando do segundo elemento.
        /*Compara cada valor com 'maiorValor' e atualiza 
        'maiorValor' se um valor maior for encontrado.*/
        for (let i = 1; i < valores.length; i++){
            if (valores[i] > maiorValor){
                maiorValor = valores[i]
            }
        }
        return maiorValor
    }

    // Renderiza uma lista não ordenada com o maior valor de cada objeto.
    return (
        <div>
            <ul>
                {lista.map((item, index) => (
                    <li key={index}>
                        Maior valor do objeto {index + 1}: {encontrarMaiorValor(item)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Questao01A