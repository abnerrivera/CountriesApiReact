import '../estilos/BuscadorFiltro.css'

// CREAMOS UN COMPONENTE QUE RECIBE 2 PROPS QUE SERAN DEFINIDAS EN EL PADRE (APP)
const BuscadorFiltro = ({ setRegion, setSearch }) => {

    return (
        <div className='buscador-filtro-contenedor'>

            {/*BUSCADOR (onChange: ejecuta una funcion al hacer cambios en el componente)*/}
            {/*onChange={(nombre que damos a todo el objeto en este caso el input) => setSearch(tomamos el valor de lo digitado y se lo asignamos a setSearch)}*/}
            <input className='buscador' type="text" placeholder='-Search for a Country...' onChange={(buscador) => setSearch(buscador.target.value)} />

            {/*onChange={(nombre que le asiganamos al objeto) => setRegion(toma el valor actual del select y lo asigna a setRegion)}*/}
            <select onChange={(selector) => setRegion(selector.target.value)} className="selector" name="filtro">
                <option value="">Fylter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default BuscadorFiltro