import { useState, useEffect } from "react";
import FirstSection from "./components/FirstSection/FirstSection";
import Portada from "./components/FirstSection/Portada";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import SecondCards from "./components/SecondSection/SecondCards";
import Characters from "./components/Characters/Characters";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom";

function App() {

  const [characters, setCharacters] = useState({
    mitical: {},
    character1: {},
    character2: {},
    character3: {},
    character4: {},
    search: null
  });
  // const [mitical, setMitical] = useState([]);
  // const [characters, setCharacters] = useState([]);
  // const [characters2, setCharacters2] = useState([]);
  // const [characters3, setCharacters3] = useState([]);
  // const [characters4, setCharacters4] = useState([]);

  const character = async () => {

    const api = await fetch('https://rickandmortyapi.com/api/character/?species=mythological');
    const character1 = await fetch('https://rickandmortyapi.com/api/character')
    const character2 = await fetch(`https://rickandmortyapi.com/api/character?page=2`)
    const character3 = await fetch(`https://rickandmortyapi.com/api/character?page=20`)
    const character4 = await fetch(`https://rickandmortyapi.com/api/character?page=30`)

    const respuesta = await character1.json()
    const respuesta2 = await character2.json()
    const respuesta3 = await character3.json()
    const respuesta4 = await character4.json()
    const mitical = await api.json();

    setCharacters({
      mitical,
      character1: respuesta,
      character2: respuesta2,
      character3: respuesta3,
      character4: respuesta4
    })
  }

  useEffect( () => {
    character()
  },[])

  const onSearch = async (name) => {
    const api = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    const resultado = await api.json();
    setCharacters({
      ...characters,
      search: resultado
    })
  }

  return (
    <Switch>
      <Route path='/' >
        <div className='bg-planet bg-no-repeat w-screen bg-cover bg-center'> 
            <div className='bg-gray-100 bg-opacity-80'>
              <NavBar />
              <Header onSearch={onSearch} />
            </div>
            
        </div>
        <div className='-mt-6'>
          <FirstSection mitical={characters.mitical} />
        </div>

        <div className='bg-first bg-no-repeat h-96 bg-cover bg-center'>
          <div className='bg-black bg-opacity-30 h-full w-screen'>
            <Portada />
          </div>    
        </div>

        <div className='bg-gray-100' >
          <SecondCards characters={characters.character1} />
          <Characters characters2={characters.character2} search={characters.search}/>
        </div>

        <div className='bg-second h-96 bg-no-repeat mt-11 bg-cover bg-center '>
          <div className='bg-gray-900 bg-opacity-50 h-full pt-11'>
            <Footer />
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
