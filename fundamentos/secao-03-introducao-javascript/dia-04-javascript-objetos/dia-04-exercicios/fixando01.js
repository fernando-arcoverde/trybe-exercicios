let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

// Refatorando para Objeto

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

console.log(player.name);
console.log(player.lastName);
console.log(player.age);

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player['bestInTheWorld']);

console.log(`A jogadora ${name} ${lastName} foi eleita melhor do mundo por ${player['bestInTheWorld'].length} vezes.`);

console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`)