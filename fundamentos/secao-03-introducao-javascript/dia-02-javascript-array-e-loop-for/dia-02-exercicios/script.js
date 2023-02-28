// Praticando Arrays

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.unshift('Escovar os dentes'); // adiciona mais uma tarefa no início
console.log(tasksList);

// ['Escovar os dentes', 'Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.pop();
console.log(tasksList);

// ['Escovar os dentes', 'Tomar café', 'Reunião', 'Brincar com o cachorro']

tasksList.shift();
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro']