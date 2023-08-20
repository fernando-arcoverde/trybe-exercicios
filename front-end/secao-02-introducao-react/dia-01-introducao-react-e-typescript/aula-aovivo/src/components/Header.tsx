function Header() {
  const cardInfo = {
    name: 'Fernando',
    lastname: 'Arcoverde',
    age: 38,
    role: 'Frontend',
    phrase: 'Você é aquilo que vibra',
  };

  return (
    <header>
      <img src="https://avatars.githubusercontent.com/u/125072921?s=400&u=2f65c57391c743b2d239e7963cdad5dab9e4a66d&v=4" alt="" />
      <h1>{`${cardInfo.name} ${cardInfo.lastname}, ${cardInfo.age}`}</h1>
      <h2>{`${cardInfo.role}`}</h2>
      <h3>{`${cardInfo.phrase}`}</h3>
    </header>
  );
}

export default Header;
