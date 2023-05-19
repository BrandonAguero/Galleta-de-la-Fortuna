import phrases from './utils/phrases.json';
import { randomPhrase } from './utils/randomPhrase';
import { SectionChildren } from './components/SectionChildren';
import { ButtonRandom } from './components/ButtonRandom';
import { PhraseRandom } from './components/PhraseRandom';

import './App.css'

const numberImage = [1, 2, 3, 4];

function App() {
  

  return (
    <>
      <header className='header'>
        <h1 className='header__h1'>galletas de la fortuna</h1>
      </header>
      <main className='main'>
        <SectionChildren>
          <PhraseRandom  />
          <ButtonRandom />
        </SectionChildren>
      </main>
    </>
  )
}

export default App
