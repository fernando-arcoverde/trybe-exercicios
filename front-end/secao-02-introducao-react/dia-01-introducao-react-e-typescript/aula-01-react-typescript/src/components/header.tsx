const person = {
    name: 'John',
    lastname: 'Wick',
}

function Header() {
    return <h1>{`Olá, ${person.name} ${person.lastname}.`}</h1>
}

export default Header;