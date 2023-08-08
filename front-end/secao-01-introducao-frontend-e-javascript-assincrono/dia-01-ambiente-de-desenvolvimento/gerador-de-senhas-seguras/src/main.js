import { nanoid } from "nanoid";

const randomPassword = nanoid();
console.log(randomPassword);

/*
[] Observações:
1- Adicionado a chave "type": "module" no package.json para roda o nanoid no node através do comando no terminal node src/main.js .
*/