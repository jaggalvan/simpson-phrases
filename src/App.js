import {useState} from 'react';

import Container from './componets/Container';
import Header from './componets/Header';

import Welcome from './componets/Welcome';
import CharacaterContainer from './componets/CharacterContainer';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async() =>{
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3");
    const frase = await api.json();
    setCharacters(frase);
  };






  return (
    

    <Container>
      <Header />

      {!characters ? (
        <Welcome reqApi={reqApi} />

      ): (

        <CharacaterContainer characters={characters} reqApi={reqApi}/>
      )}


      
      
    </Container>

  );
}
export default App;

