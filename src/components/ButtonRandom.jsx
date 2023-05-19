function ButtonRandom({ setPhraseRandom, phrases, randomAleatoryArray, setAleatoryImage, numberImage}) {

    const handleAleatory = () => {
        const phraseIndex = randomAleatoryArray(phrases).phrase
        setPhraseRandom(phraseIndex);

        const numberIndex = randomAleatoryArray(numberImage);
        setAleatoryImage(numberIndex);

    }

    return (
        <button onClick={handleAleatory} className="main__section--button">Ver otro</button>
    );
}

export { ButtonRandom };