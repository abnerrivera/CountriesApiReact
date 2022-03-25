import './App.css';
import BuscadorFiltro from './componentes/BuscadorFiltro';
import Menu from './componentes/Menu';
import Tarjeta from './componentes/Tarjeta';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  //estado inicial del data
  const [data, setData] = useState([]);

  // search = estado con el que le asignamos a su setSearch desde el componente BuscadorFiltro
  const [search, setSearch] = useState("")

  //consulta al api cada ve que renderiza el componente o cada vez que searc cambia su valor
  useEffect(() => {
    // search (si search tiene valor) ? 'name/${search}' : 'all' la url se adapta segun su booleano
    axios.get(`https://restcountries.com/v3.1/${search ? `name/${search}` : 'all'}`)
      .then((paises) => { //la consulta anterior se le asigna a paises
        setData(paises.data) //se da el valor recibido al estado de setData
      })
  }, [search]);// al cambiar el estado de esta variable sera ejecutado el useEffect

  //region = setRegion que traemos desde el componente BuscadorFiltro
  const [region, setRegion] = useState()

  // regionPais = a la region que le damos en el selector (region) (filtro)
  const regionPais = data.filter(pais => pais.region === region)


  //==================================================================================================== RENDER DOM
  return (
    <div className="App">
      <div className='contenedor-principal'>

        {/* componente menu */}
        <Menu />

        {/* componente buscador y filtro */}
        <BuscadorFiltro
          setRegion={setRegion} // envia la prop al componente
          setSearch={setSearch} // envia la prop al componente
        />

        {/* contenedor para renderizar las tarjetas */}
        <div className='tarjetas-contenedor'>

          {/* creamos un ternario donde si (region tiene valor?)
            si= mapea las tarjetas segun la region que tiene en el filtro (valor seteado desde el componente)
            no= mapea todas las tarjatas del data */}
          {region ? (

            //mapeo con el valor del filtro 
            //(regionPais.map = pais (ya con pais accedemos a los elementos) 
            //(index = a una key para identificar cada elemento mapeado))
            regionPais.map((pais, index) => (
              <Tarjeta
                key={index}
                img={pais.flags.png}
                nombre={pais.name.common}
                poblacion={pais.population}
                region={pais.region}
                capital={pais.capital}
              />
            ))
          ) 
          :
            //mapeamos la data completa
            data.map((pais, index) => (
              <Tarjeta
                key={index}
                img={pais.flags.png}
                nombre={pais.name.common}
                poblacion={pais.population}
                region={pais.region}
                capital={pais.capital}
              />
            ))

            /*dato.map((nombreDato, index) => (
              <>
                COMPONENTE Y SUS PROPS
              </>
            ))*/
          }

        </div>
      </div>
    </div>
  );
}

export default App;
