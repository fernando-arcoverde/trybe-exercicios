let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


// Função criar novo turno.
  function newTurn (obj, key, value) {
    obj[key] = value;
  }

  newTurn(lesson2, 'turno', 'noite');
  console.log(lesson2);

  // Função listar chaves dos objetos.
  function objectKeys (obj) {
    return Object.keys(obj);
  }

  console.log(objectKeys(lesson1));

  // Função para mostrar o tamanho do objeto.
  function objectLength(obj) {
    return Object.keys(obj).length;
  }

  console.log(objectLength(lesson3));

  // FUnção para mostrar os valores dos objetos.
  function objectValues(obj) {
    return Object.values(obj);
  }

  console.log(objectValues(lesson1));

  // Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

 let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
 });

 console.log(allLessons);