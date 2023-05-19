import './styles/PhraseRandom.css';

function PhraseRandom({ phrase }) {
    return (
        <div className="main__section--div">
            <p>
                {phrase}
            </p>
        </div>
    );
}

export { PhraseRandom };