// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// // escreva aqui sua função

// function addClient (cliente) {
//     if (typeof cliente === 'string') {
//     if (clientesTrybeBank.includes(cliente)) {
//         return `Cliente ${cliente} já cadastrado!`;
//     } else {
//         clientesTrybeBank.push(cliente);
//         return `Cliente ${cliente} cadastrado com sucesso!`;
//     }
// } else {
//     return `O parâmetro passado deve ser do tipo "string".`
// }
// }

// addClient('Maria');
// addClient('João');
// addClient('Fernando');
// addClient('Ísis');
// addClient('John');
// console.log(addClient(5));

// console.log(clientesTrybeBank);

// // ===============================

// function removeClient (nome) {
//     if (clientesTrybeBank.includes(nome)) {
//         clientesTrybeBank.splice(clientesTrybeBank.indexOf(nome), 1);
//         console.log(`Cliente ${nome} removido com sucesso!`);
//     } else {
//         console.log(`Cliente ${nome} não encontrado!`);
//     }
// }

// removeClient('Maria');
// removeClient('Ada');
// removeClient('Daniel');

// console.log(clientesTrybeBank);

// ================================

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function validaCliente(cliente) {
  if (typeof cliente !== 'string') {
    return 'O parâmetro passado deve ser do tipo "string"!';
  } else {
    return true;
  }
}

function clienteIndex(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
  return false;
}

function removeCliente(cliente) {
  let validacao = validaCliente(cliente);
  if (validacao !== true) {
    return validacao;
  }

  let index = clienteIndex(cliente);
  if (index === false) {
    return 'Cliente não encontrada(o).'
  }

  clientesTrybeBank.splice(index, 1);
  return 'Cliente excluída(o) com sucesso.';
}

console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
console.log(removeCliente('Barney')); // Cliente não encontrada(o)
console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]