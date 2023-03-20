let customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };

  console.log(customer1.age);
  console.log(customer2.age);

  // Adicionando novas chaves e valores.

  customer1.lastName = 'Pacheco';

  customer2.lastName = 'Madalena';

  console.log(customer1);
  console.log(customer2);

  customer1['birthCity'] = 'Recife';
  customer2['birthCity'] = 'Recife';

  console.log(customer1);
  console.log(customer2);

  // Criando função para adicionar propriedades

  let customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  let lastName = 'Ferreira';
  
  function addProperty(object, key, value) {
    object[key] = value;
  };
  
  addProperty(customer, newKey, lastName);
  console.log(customer);
  
  newKey = 'fullName';
  let fullName = customer.firstName + ' ' + customer.lastName;
  
  addProperty(customer, newKey, fullName);
  console.log(customer);