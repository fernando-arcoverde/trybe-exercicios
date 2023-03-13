let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
    console.log(cars[index]);
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let imprimir of names) {
    console.log(imprimir);
}

let tasksListDomingo = ['Acordar', 'Tomar Banho', 'Descer as escadas', 'Colocar Jack para limpar o chão', 'Limpar Jack'];

for (let index = 0; index < tasksListDomingo.length; index += 1) {
    console.log(tasksListDomingo[index]);
};

for (let tasksList of tasksListDomingo) {
    console.log(tasksList);
}

const tasksListSabado = 'Estudar';

for (let estudar of tasksListSabado) {
    console.log(estudar);
}

const tabuada = [20, 20, 20, 20, 20];

for (let contador of tabuada) {
    contador += 20
    console.log(contador);
}