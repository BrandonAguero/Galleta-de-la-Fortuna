import phrases from './utils/phrases.json';
import { randomAleatoryArray } from './utils/randomAleatoryArray';
import { SectionChildren } from './components/SectionChildren';
import { ButtonRandom } from './components/ButtonRandom';
import { PhraseRandom } from './components/PhraseRandom';

import './App.css'
import { useState } from 'react';

const numberImage = [1, 2, 3, 4];

function App() {
  
  const phraseAleatory = randomAleatoryArray(phrases).phrase;
  const numberAleatory = randomAleatoryArray(numberImage);

  const [phraseRandom, setPhraseRandom] = useState(phraseAleatory);
  const [aleatoryImage, setAleatoryImage] = useState(numberAleatory);

  const objStyles = {
    backgroundImage: `url('../images/fondo${aleatoryImage}.jpg')`
  }

  return (
    <main className='main' style={objStyles}>
      <h1>galletas de la fortuna</h1>
      <SectionChildren>
        <PhraseRandom phrase={phraseRandom} />
        <ButtonRandom 
          setPhraseRandom={setPhraseRandom} 
          phrases={phrases} 
          randomAleatoryArray={randomAleatoryArray}
          setAleatoryImage={setAleatoryImage}
          numberImage={numberImage}
        />
      </SectionChildren>
    </main>
  )
}

export default App
