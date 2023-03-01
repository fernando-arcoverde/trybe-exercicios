let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function cumprimentaCliente(cliente) {
    return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank.'
}

console.log(cumprimentaCliente(clientesTrybeBank));

// ----------

let status = 'deslogado';

function logarDeslogar() {
    if (status === 'deslogado') {
        status = 'logado';
    } else {
        status = 'deslogado';
    }
}

logarDeslogar();
console.log(status);

// ----------

function sacar(valor, saldo) {
    if (valor >= 1 && saldo >= 0) {
        if (valor <= saldo) {
            return 'Saque realizado com sucesso. Novo saldo: R$ ' + (saldo - valor) + ',00';
        } else {
            return 'Saldo insuficiente. Seu saldo atual é: R$ ' + saldo + ',00';
        }
    } else {
        return 'Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.';
    }
}

console.log(sacar(1312, 2000));
console.log(sacar(100, -12));
console.log(sacar(22153, 22153));