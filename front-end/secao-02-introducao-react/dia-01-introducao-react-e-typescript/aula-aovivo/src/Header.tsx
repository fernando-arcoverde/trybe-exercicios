function Header() {
    const person = {
        name: 'Fernando',
        lastname: 'Arcoverde',
        age: 38,
        role: 'Front-end'
    };

    return (
        <header>
            <img src="https://avatars.githubusercontent.com/u/125072921?v=4" alt="" />
            <h1>{`${person.name} ${person.lastname}, ${person.age}`}</h1>
            <h2>{`${person.role}`}</h2>
            <h3>"Feito é melhor do que perfeito e não entregue."</h3>
        </header>
    );
};

export default Header;