import { nanoid } from "nanoid";

const passwodButtonElement = document.getElementById('passwordBtn');
const displayPasswordElement = document.querySelector("h2");

passwodButtonElement.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPasswordElement.innerHTML = randomPassword;
});

// const randomPassword = nanoid();
// console.log(randomPassword);
/*
[] Observações:
1- Adicionado a chave "type": "module" no package.json para roda o nanoid no node através do comando no terminal node src/main.js .
2- Utilizado o comando npx vite ou vite --open.
3- Vite instalado com o comando npm install vite e adicionado uma chave no package.json "dev": "vite --open"
*/