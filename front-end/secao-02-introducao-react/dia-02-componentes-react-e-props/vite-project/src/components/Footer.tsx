function Footer() {
  const person = {
    name: 'John',
    lastname: 'John',
  };
  return (
    <footer>
      <h4>{`Você está logado como ${person.name} ${person.lastname}.`}</h4>
    </footer>
  );
}

export default Footer;
