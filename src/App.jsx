import phrases from './utils/phrases.json';
import { randomAleatoryArray } from './utils/randomAleatoryArray';
import { SectionChildren } from './components/SectionChildren';
import { ButtonRandom } from './components/ButtonRandom';
import { PhraseRandom } from './components/PhraseRandom';

import './App.css'
import { useState } from 'react';

const imageAndBackground = [
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

  const assetsAleatory = randomAleatoryArray(imageAndBackground);

  const numberImage = assetsAleatory.numberImage;
  const backgroundButton = assetsAleatory.backgroundButton;

  const [currentPhrase, setCurrentPhrase] = useState(phraseAleatory);
  const [currentImage, setCurrentImage] = useState(numberImage);
  const [currentBackground, setCurrentBackground] = useState(backgroundButton);

  const mainStyles = {
    backgroundImage: `url('../images/fondo${currentImage}.jpg')`
  }

  return (
    <main className='main' style={mainStyles}>
      <SectionChildren>
        <h1>galletas de la fortuna</h1>
        <PhraseRandom phrase={currentPhrase} />
        <ButtonRandom 
          setCurrentPhrase={setCurrentPhrase}
          phrases={phrases}
          phraseRandom={currentPhrase}
          setCurrentImage={setCurrentImage}
          currentImage={currentImage}
          setCurrentBackground={setCurrentBackground}
          currentBackground={currentBackground}
          imageAndBackground={imageAndBackground}
        />
      </SectionChildren>
    </main>
  )
}

export default App
