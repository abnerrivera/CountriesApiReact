import React from 'react'
import '../estilos/Tarjeta.css'


//CREAMOS UNA TARJETA DONDE LE DAMOS PROPS DESTRUCTURADOS PARA SER REUTILIZADA
const Tarjeta = ({ img, nombre, poblacion, region, capital }) => {
    return (
        <div className='tarjeta-contenedor'>
            <img className='img-tarjeta' src={img} />
            <div className='textos-tarjeta'>
                <div className='nombre-pais'>
                    <strong>{nombre}</strong>
                </div>
                <div className='poblacion'>
                    <strong>Population:</strong> {poblacion}
                </div>
                <div className='region'>
                    <strong>Region:</strong> {region}
                </div>
                <div className='capital'>
                    <strong>Capital:</strong> {capital}
                </div>
            </div>
        </div>
    )
}

export default Tarjeta