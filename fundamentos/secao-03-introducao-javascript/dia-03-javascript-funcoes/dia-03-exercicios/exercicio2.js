let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função

function addClient (nome) {
    if (clientesTrybeBank.includes(nome)) {
        console.log(`Cliente ${nome} já cadastrado!`);
    } else {
        clientesTrybeBank.push(nome);
        console.log(`Cliente ${nome} cadastrado com sucesso!`);
    }
}

addClient('Maria');
addClient('João');
addClient('Fernando');
addClient('Ísis');
addClient('John');

console.log(clientesTrybeBank);