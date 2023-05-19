import './ButtonRandom.css';

function ButtonRandom({ setPhraseRandom, 
    phrases, randomAleatoryArray, 
    setAleatoryImage, imageBackground,
    setBackground,
    background
    }) {

    const handleAleatory = () => {
        const phraseIndex = randomAleatoryArray(phrases).phrase
        setPhraseRandom(phraseIndex);
    
        const index = randomAleatoryArray(imageBackground);

        setAleatoryImage(index.numberImage);
        
        setBackground(index.backgroundButton);
    }

    const stylesButton = {
        backgroundColor: `${background}`,
    }

    return (
        <button style={stylesButton} onClick={handleAleatory} className="main__section--button">Ver otro</button>
    );
}

export { ButtonRandom };