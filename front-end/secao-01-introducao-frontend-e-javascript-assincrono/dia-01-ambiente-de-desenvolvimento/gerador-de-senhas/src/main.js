import { nanoid } from 'nanoid'
import "./src/style.css";

const passwordBtEl = document.querySelector('button');
const displayPassworEl = document.querySelector('h2');

passwordBtEl.addEventListener('click', () => {
    const randomPassword = nanoid()
    displayPassworEl.innerHTML = randomPassword;
});
