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

  function objectLength(obj) {
    return Object.keys(obj).length;
  }

  console.log(objectLength(lesson3));
