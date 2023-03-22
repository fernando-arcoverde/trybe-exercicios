// Ternários

let verificaIdadeDetran = (idade) => {
    if (idade >= 18) {
        return `Uma pessoa com ${idade} anos pode dirigir.`;
    } else {
        return `Uma pessoa com ${idade} anos não pode dirigir.`;
    }
}

console.log(verificaIdadeDetran(18));
console.log(verificaIdadeDetran(17));

// Simplificando ternário

let verificaIdadeTernario = (idade) => {
    const verifica = (idade >= 18) ? `Uma pessoa com ${idade} anos pode dirigir.` : `Uma pessoa com ${idade} anos não pode dirigir.`

    return verifica;
};

console.log(verificaIdadeTernario(18));