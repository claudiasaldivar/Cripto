import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Formulario from "./components/Formulario"
import Resultados from "./components/Resultados"
import ImagenCripto from './img/imagen-criptos.png'
import Loading from "./components/Loading"

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto ;
  }
`
function App() {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({});
  const [loading, setLoading] = useState(false)

  useEffect(() => {
   if(Object.keys(monedas).length > 0){
    const { moneda, criptomoneda } = monedas
    const cotizarCripto = async () => {
      setLoading(true)
      setResultado({})
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      setResultado(resultado.DISPLAY[criptomoneda][moneda])
      setLoading(false)
   }
   cotizarCripto()
   }
  }, [monedas]);
  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="Imagenes cripto" />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Formulario setMonedas={setMonedas} />
        {loading && <Loading />}
        {Object.keys(resultado).length > 0 && (
          <Resultados resultado={resultado}/>
        )}
      </div>
    </Contenedor>
  )
}

export default App
