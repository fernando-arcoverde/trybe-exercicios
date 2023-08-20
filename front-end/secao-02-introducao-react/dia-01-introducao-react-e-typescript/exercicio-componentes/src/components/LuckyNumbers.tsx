function LuckyNumbers () {
    function LuckyNumber () {
        return Math.floor(Math.random() * 60 + 1);
    }

    return (
        <>
            <h2 className="subtitle">Seus números da Mega-Sena são:</h2>
            <ul>
                <li>{LuckyNumber()}</li>
                <li>{LuckyNumber()}</li>
                <li>{LuckyNumber()}</li>
                <li>{LuckyNumber()}</li>
                <li>{LuckyNumber()}</li>
                <li>{LuckyNumber()}</li>
            </ul>
        </>
    );
}

export default LuckyNumbers;