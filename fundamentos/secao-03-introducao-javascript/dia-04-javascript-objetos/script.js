let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4

  console.log(conta.banco['id']); // 4

  console.log(conta[infoDoBanco]['cod']); // 012

  console.log(conta.agencia);
  console.log(conta[infoDoBanco].nome);

  console.log(conta.banco.nome);

// =======================

  let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

  console.log(usuario.id);

// =========================

let moradores = [
  {
    nome: 'Luíza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luíza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey

let segundoMorador = moradores[1];

console.log(segundoMorador.sobrenome);
console.log(segundoMorador);
console.log(segundoMorador['apartamento']);

// =================================

let artista = {
  nome: 'Milton',
  sobrenome: 'Nascimento',
  idade: 189,
  peso: 100,
  altura: 1.75,
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP',
    rua: 'Rua Milton Nascimento',
  },
  melhoresAlbuns: ['Travessia', 'Clube da Esquina', 'Minas']
}

console.log(`O cantor ${artista.nome} ${artista['sobrenome']} possui ${artista.idade} anos.`);

artista['Apelido'] = 'Bituca';

artista['NomeCompleto'] = `${artista.nome} ${artista.sobrenome}`;

console.log(artista);