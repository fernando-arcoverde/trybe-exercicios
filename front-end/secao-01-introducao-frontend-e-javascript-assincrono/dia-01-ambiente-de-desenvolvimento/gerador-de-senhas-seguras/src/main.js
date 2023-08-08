import { nanoid } from "nanoid";

const passwodButtonElement = document.getElementById('passwordBtn');
const displayPasswordElement = document.querySelector("h2");

passwodButtonElement.addEventListener('click', () => {
    console.log('Testando Click');
});

// const randomPassword = nanoid();
// console.log(randomPassword);
/*
[] Observações:
1- Adicionado a chave "type": "module" no package.json para roda o nanoid no node através do comando no terminal node src/main.js .
2- Utilizado o comando npx vite ou vite --open.
*/