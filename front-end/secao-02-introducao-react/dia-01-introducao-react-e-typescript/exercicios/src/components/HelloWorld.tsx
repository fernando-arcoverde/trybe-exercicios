import Title from './Title';
import ModulesDetails from './ModulesDetails';
import { calculateAge } from './utils/age';

function HelloWorld() {
  const name = 'Fernando Arcoverde';
  const birth = '20/04/1985';
  const age = calculateAge(birth);

  return (
    <>
      <h1 style={ { color: 'green', textAlign: 'center' } }>{name}</h1>
      <h2>{`Idade, ${age}.`}</h2>
      <Title />
      <ModulesDetails />
    </>

  );
}

export default HelloWorld;
