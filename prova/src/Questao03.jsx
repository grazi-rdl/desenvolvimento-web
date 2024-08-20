import React, { useEffect, useState } from 'react'

const Questao03 = () => {
  // Estado para armazenar a capital com a maior população
  const [maxCapital, setMaxCapital] = useState(null)
  // Estado para armazenar a capital com a menor população
  const [minCapital, setMinCapital] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
      const data = await response.json()

      // Verifica se há dados retornados
      if (data.length > 0) {
        let max = data[0]
        let min = data[0]

        // Itera sobre os dados para encontrar a capital com a maior e menor população
        data.forEach(item => {
          if (item.population > max.population) max = item
          if (item.population < min.population) min = item
        })

        setMaxCapital(max)
        setMinCapital(min)
      }
    }

    fetchData()
  }, []) // Dependência vazia para garantir que a função seja chamada apenas uma vez

  return (
    <div>
      {/* Renderiza a capital com a maior população, se disponível */}
      {maxCapital && (
        <div>
          {`Maior População: ${maxCapital.capital[0]} (${maxCapital.population})`}
        </div>
      )}
      {/* Renderiza a capital com a menor população, se disponível */}
      {minCapital && (
        <div>
          {`Menor População: ${minCapital.capital[0]} (${minCapital.population})`}
        </div>
      )}
    </div>
  )
}

export default Questao03