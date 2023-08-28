function Header() {
  const person = {
    name: 'Fernando',
    lastname: 'Arcoverde',
  };
  return (
    <header>
      <h1>{`Olá, ${person.name} ${person.lastname}.`}</h1>
    </header>
  );
}

export default Header;
