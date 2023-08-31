// function handleClick() {
//   alert('Meu primeiro event handler com React');
// }

function Button() {
  return (
    <button onClick={ () => alert('Botão Clicado') }>
      Clique em mim!
    </button>
  );
}

export default Button;
