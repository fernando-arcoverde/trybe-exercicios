function Header() {
    const person = {
        name: 'John',
        lastname: 'Wick',
    }

    function luckyNumber() {
        return Math.floor(Math.random() * 60 + 1);
    }

    return (
        <div>
            <h1 className='greeting'>
                {`Olá, ${person.name} ${person.lastname}`}
                <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
            </h1>
            <h2 className='subtitle'>Seus números da sorte da Mega-Sena são:</h2>
            <ul>
                <li>{luckyNumber()}</li>
                <li>{luckyNumber()}</li>
                <li>{luckyNumber()}</li>
                <li>{luckyNumber()}</li>
                <li>{luckyNumber()}</li>
                <li>{luckyNumber()}</li>
            </ul>
        </div>
    )
}

export default Header;