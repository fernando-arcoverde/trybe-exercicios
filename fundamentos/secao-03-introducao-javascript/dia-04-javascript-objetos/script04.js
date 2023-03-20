// Verificando chaves do objeto.

let coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };

  for (let index in coolestTvShow) {
    console.log(`${index}`);
  }

// Utilizando Object.keys para retornar valores

console.log(Object.keys(coolestTvShow));

// ou...

let keys = Object.keys(coolestTvShow);

for (let index in keys) {
    console.log(`${keys[index]}`);
}

// Criando função que exiba as habilidades do objeto students.

let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom',
  };

  function listSkills (student) {
    let arrayOfSkills = Object.keys(student);
    for (let index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  }

  listSkills(student1);
  listSkills(student2);

  // Utilizando Object.values para retornar valores

  let student = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskill: 'Ótimo',
  };
  
  function listSkillsValuesWithFor(student) {
    let skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  function listSkillsValuesWithValues(student) {
    return Object.values(student);
  }
  
  // Sem Object.values
  console.log(listSkillsValuesWithFor(student));
  
  // Com Object.values
  console.log(listSkillsValuesWithValues(student));

  // Utilizando Object.entries para retornar valores

  let coolestTvShow2 = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
  console.log(Object.entries(coolestTvShow2));
  
  // [
  //   [ 'name', 'BoJack Horseman' ],
  //   [ 'genre', 'adult animation' ],
  //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
  //   [ 'favoriteCharacter', 'Princess Carolyn' ],
  //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
  //   [ 'seasons', 6 ]
  // ]

  // mais exemplos de verificação de dados com Object.entries

  let countries = {
    franca: 'Paris',
    brasil: 'Brasília',
    espanha: 'Madrid',
    portugal: 'Lisboa',
  };
  let pairKeyValue = Object.entries(countries);
  console.log(pairKeyValue);

  // verificando separadamente
  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };

  // Utilizando Object.assign

  let person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  let info = {
    age: 23,
    job: 'engenheiro',
  };
  
  let family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */

    // mais exemplos

    let person2 = {
        name: 'Roberto',
      };
      
      let lastName = {
        lastName: 'Silva',
      };
      
      let clone = Object.assign(person2, lastName);
      
      console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
      console.log(person2); // { name: 'Roberto', lastName: 'Silva' }


      let object = { a: 1, b: 2, c: 3 };

for (let property in object) {
  console.log(property + ' = ' + object[property]);
}