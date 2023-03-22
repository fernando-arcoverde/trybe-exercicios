// Função contar palavras de uma frase

function contarPalavras (frase) {
    return frase.split(' ').length;
}

console.log(contarPalavras('Fala galera, beleza? Passando para dar um recado importante...'));

// Função que cria um objeto

function objetoPessoa (nome, idade) {
    let pessoa = {
        nome: nome,
        idade: idade
    }
    return pessoa;
}

console.log(objetoPessoa('Joaquim', 7))

// Exemplo de uma estrutura de Arrow Function

const printName = () => {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());