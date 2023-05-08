import styled from "@emotion/styled"

const Resultado = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
    `

const Imagen = styled.img`
display: block;
width: 120px;

`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Resultados = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, IMAGEURL, CHANGEPCT24HOUR, LASTUPDATE} = resultado
  return (
    <Resultado>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación del día: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>La última actualización es: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Resultado>
  )
}

export default Resultados