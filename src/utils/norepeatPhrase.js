import { randomAleatoryArray } from "./randomAleatoryArray";

function noRepeatPhrase(phraseRandom, phrases) {
    const phraseIndex = randomAleatoryArray(phrases).phrase
    
    if (phraseRandom === phraseIndex) return noRepeatPhrase(phraseRandom, phrases);

    if (phraseRandom !== phraseIndex) return phraseIndex;
}

export { noRepeatPhrase };