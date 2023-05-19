import phrases from './utils/phrases.json';
import { randomAleatoryArray } from './utils/randomAleatoryArray';
import { SectionChildren } from './components/SectionChildren';
import { ButtonRandom } from './components/ButtonRandom';
import { PhraseRandom } from './components/PhraseRandom';

import './App.css'
import { useState } from 'react';

const imageBackground = [
  {
    numberImage: 1,
    backgroundButton: '#71ada1'
  },
  {
    numberImage: 2,
    backgroundButton: '#ff2ae8'
  },
  {
    numberImage: 3,
    backgroundButton: '#feae00'
  },
  {
    numberImage: 4,
    backgroundButton: '#758ffe'
  }
]

function App() {
  
  const phraseAleatory = randomAleatoryArray(phrases).phrase;

  const assetsAleatory = randomAleatoryArray(imageBackground);

  const [phraseRandom, setPhraseRandom] = useState(phraseAleatory);
  const [aleatoryImage, setAleatoryImage] = useState(assetsAleatory.numberImage);
  const [background, setBackground] = useState(assetsAleatory.backgroundButton);

  const mainStyles = {
    backgroundImage: `url('../images/fondo${aleatoryImage}.jpg')`
  }

  
  return (
    <main className='main' style={mainStyles}>
      <SectionChildren>
        <h1>galletas de la fortuna</h1>
        <PhraseRandom phrase={phraseRandom} />
        <ButtonRandom 
          setPhraseRandom={setPhraseRandom} 
          phrases={phrases} 
          randomAleatoryArray={randomAleatoryArray}
          setAleatoryImage={setAleatoryImage}
          imageBackground={imageBackground}
          setBackground={setBackground}
          background={background}
        />
      </SectionChildren>
    </main>
  )
}

export default App
