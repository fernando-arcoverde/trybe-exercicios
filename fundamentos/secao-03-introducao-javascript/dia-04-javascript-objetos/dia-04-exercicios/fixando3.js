let student = {
    name: 'Fernando',
    lastName: 'Arcoverde',
    age: 37,
    email: 'nando.arcoverde@gmail.com',
    phone: '81999096574',
    address: {
        street: 'Rua Condé de Alegrete',
        number: 49,
        city: 'Recife',
        state: 'PE',
        zipcode: '51.160-130'
    }
}

console.log(student);

function addProperty (object, key, value) {
    object[key] = value;
}

addProperty(student, 'fullName', `${student.name} ${student.lastName}`);

console.log(student);