let saldo = 1345;

function somaSaldo(valor) {
    return saldo + valor;
}

function subtraiSaldo(valor) {
    return saldo - valor;
}

function multiplicaSaldo(valor) {
    return saldo * valor;
}

function divideSaldo(valor) {
    return saldo / valor;
}

console.log(somaSaldo(1255)); // 2660

console.log(subtraiSaldo(477)); // 868

console.log(multiplicaSaldo(3)); // 4035

console.log(divideSaldo(4)); // 336.25

// =======================

let saldoTrybeBank = 10150;

function somaSaldoTrybeBank(valor) {
    return saldoTrybeBank + valor;
}

function subtraiSaldoTrybeBank(valor) {
    return saldoTrybeBank - valor;
}

function multiplicaSaldoTrybeBank(valor) {
    return saldoTrybeBank * valor;
}

function divideSaldoTrybeBank(valor) {
    return saldoTrybeBank / valor;
}

console.log(somaSaldoTrybeBank(1255));
console.log(subtraiSaldoTrybeBank(477));
console.log(multiplicaSaldoTrybeBank(3));
console.log(divideSaldoTrybeBank(4));

// =======================

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function cumprimentaCliente(cliente) {
    return `Olá ${cliente}, está é sua conta TrybeBank!`;
}

console.log(cumprimentaCliente(clientesTrybeBank))

// =======================

let statusLogin = 'deslogado';

function logarDeslogar() {
    if (statusLogin === 'deslogado') {
        statusLogin = 'logado';
    } else {
        statusLogin = 'deslogado';
    }
}

logarDeslogar();

console.log(`O usuário está ${statusLogin} no sistema TrybeBank`);

// =======================

function sacar(valor, saldo) {
    if (valor >= 1 && saldo >= 0) {
        if (valor <= saldo) {
            return `Saque realizado com sucesso! Novo Saldo: R$ ${saldo - valor},00.`;
        } else {
            return `Saldo insuficiente! Seu saldo atual é de R$ ${saldo},00`;
        }
    } else {
        return `O saque de R$${valor} é inválido. O valor deve ser maior ou igual a R$ 1,00 e o Saldo deve ser maior que R$ 0,00.`
    }
}

console.log(sacar(1000, 1345));
console.log(sacar(1400, 1345));
console.log(sacar(0.5, 0));

// ===============================

let clientesCadastrados = ['Marta', 'Paulo', 'Alexandre', 'Ester', 'Fernando', 'Ísis', 'Diego', 'Janayna'];
let sorvetes = ['Morango', 'Chocolate', 'Flocos'];

function sorveteEscolhido(nome, sabor) {

    let clienteValido = false;
    let sorveteValido = false;

    for (let index = 0; index < clientesCadastrados.length; index += 1) {
        if (clientesCadastrados[index] === nome) {
            clienteValido = true;
        }
    }

    for (let index = 0; index < sorvetes.length; index += 1) {
        if (sorvetes[index] === sabor) {
            sorveteValido = true;
        }
    }

    if (clienteValido === true && sorveteValido === true) {
        console.log(nome + ', pague seu sorvete de ' + sabor + ' no caixa.');
    } else {
        console.log('Cliente e/ou sorvete inválido!');
    }
}

sorveteEscolhido('Fernando', 'Flocos');
sorveteEscolhido('Ísis', 'Chocolate');