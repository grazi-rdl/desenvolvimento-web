import React, { useEffect, useState } from 'react'

// Função que retorna uma Promise com os dados simulados
const fetchCapitals = () => {
  return new Promise((resolve) => {
    resolve([
      { capital: ["Dublin"], population: 4994724 },
      { capital: ["Nicosia"], population: 1207361 },
      { capital: ["Madrid"], population: 47351567 }
    ])
  })
}

const Questao04 = () => {
  const [maxCapital, setMaxCapital] = useState(null)
  const [minCapital, setMinCapital] = useState(null)

  useEffect(() => {
    // Função assíncrona para buscar os dados da Promise
    const fetchData = async () => {
      // Usa a Promise para obter os dados das capitais
      const data = await fetchCapitals()

      if (data.length > 0) {
        let max = data[0]
        let min = data[0]

        data.forEach(item => {
          if (item.population > max.population) max = item
          if (item.population < min.population) min = item
        })

        setMaxCapital(max)
        setMinCapital(min)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {maxCapital && (
        <div>
          {`Maior População: ${maxCapital.capital[0]} (${maxCapital.population})`}
        </div>
      )}
      {minCapital && (
        <div>
          {`Menor População: ${minCapital.capital[0]} (${minCapital.population})`}
        </div>
      )}
    </div>
  )
}

export default Questao04