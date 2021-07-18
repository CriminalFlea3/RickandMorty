import { useState, useEffect } from "react";
import FirstSection from "./components/FirstSection/FirstSection";
import Portada from "./components/FirstSection/Portada";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import SecondCards from "./components/SecondSection/SecondCards";
import Characters from "./components/Characters/Characters";
import Footer from "./components/Footer/Footer";

function App() {

  const [mitical, setMitical] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [characters2, setCharacters2] = useState([]);
  const [characters3, setCharacters3] = useState([]);
  const [characters4, setCharacters4] = useState([]);


  


  const character = async () => {

    const api = await fetch('https://rickandmortyapi.com/api/character/?species=mythological');
    const charact = await fetch('https://rickandmortyapi.com/api/character')
    const charact2 = await fetch(`https://rickandmortyapi.com/api/character?page=2`)
    const charact3 = await fetch(`https://rickandmortyapi.com/api/character?page=20`)
    const charact4 = await fetch(`https://rickandmortyapi.com/api/character?page=30`)


    const respuesta2 = await charact2.json()
    const respuesta3 = await charact3.json()
    const respuesta4 = await charact4.json()
    const respuesta = await charact.json()
    const img = await api.json();

    setMitical(img)
    setCharacters(respuesta)
    setCharacters2(respuesta2)
    setCharacters3(respuesta3)
    setCharacters4(respuesta4)
  }

  useEffect( () => {
    character()
  },[])


  return (
    <>
      <div className='bg-planet bg-no-repeat w-screen bg-cover bg-center'> 
          <div className='bg-gray-100 bg-opacity-80'>
            <NavBar />
            <Header />
          </div>
          
      </div>
      <div className='-mt-6'>
        <FirstSection mitical={mitical} />
      </div>

      <div className='bg-first bg-no-repeat h-96 bg-cover bg-center'>
        <div className='bg-black bg-opacity-30 h-full w-screen'>
          <Portada />
        </div>    
      </div>

      <div className='bg-gray-100' >
        <SecondCards characters={characters} />
        <Characters characters={characters3} mitical={characters4} characters2={characters2} />
      </div>

      <div className='bg-second h-96 bg-no-repeat mt-11 bg-cover bg-center '>
        <div className='bg-gray-900 bg-opacity-50 h-full pt-11'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
