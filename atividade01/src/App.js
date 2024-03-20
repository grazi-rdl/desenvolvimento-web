import Pai from "./components/atividade01/questao01/01Pai";
import * as PC from "./components/atividade01/02MeuPC";
import {Arena, World} from "./components/atividade01/03Batalha";

function App() {
  return (
    <div>
      <Pai />
      <PC.PlacaMae nome="GigaByte BM450" preco="900"/>
      <PC.Memoria nome="HyperX 4GB" preco="300"/>
      <PC.PlacaDeVideo nome="GTX 1650" preco="2000"/>
      <World>
        <Arena />
        <Arena />
        <Arena />
      </World>
    </div>
  );
}

export default App;
