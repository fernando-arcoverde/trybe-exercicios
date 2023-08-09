import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const passwordBtEl = document.querySelector('button');
const displayPassworEl = document.querySelector('h2');

passwordBtEl.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPassworEl.innerHTML = randomPassword;
});

displayPassworEl.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Senha copiada!');
});