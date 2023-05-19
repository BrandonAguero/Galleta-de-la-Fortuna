import './ButtonRandom.css';
import { noRepeatBackground } from '../utils/norepeatBackground';
import { noRepeatPhrase } from '../utils/norepeatPhrase';

function ButtonRandom({
        setCurrentPhrase,
        phrases,
        phraseRandom,
        setCurrentImage,
        setCurrentBackground,
        currentBackground,
        imageAndBackground
    }) {
    const handleAleatory = () => {

        const phraseIndex = noRepeatPhrase(phraseRandom, phrases)
        setCurrentPhrase(phraseIndex);

        let index = noRepeatBackground(currentBackground, imageAndBackground)

        setCurrentImage(index.numberImage);
        
        setCurrentBackground(index.backgroundButton);
    }

    const stylesButton = {
        backgroundColor: `${currentBackground}`,
    }

    return (
        <button style={stylesButton} onClick={handleAleatory} className="main__section--button">Ver otro</button>
    );
}

export { ButtonRandom };