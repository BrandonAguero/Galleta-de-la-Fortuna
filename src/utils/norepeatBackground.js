import { randomAleatoryArray } from "./randomAleatoryArray";

function noRepeatBackground(background, imageBackground) {
    let index = randomAleatoryArray(imageBackground);

    if (index.backgroundButton === background) {
        return noRepeatBackground(background, imageBackground);
    } 
    if (index.backgroundButton !== background) return index;
}

export { noRepeatBackground };
