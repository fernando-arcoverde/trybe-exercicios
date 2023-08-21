function Header() {
  const person = {
    name: 'John',
    lastname: 'John',
  };
  return (
    <header>
      <h1>{`Olá, ${person.name} ${person.lastname}.`}</h1>
    </header>
  );
}

export default Header;
