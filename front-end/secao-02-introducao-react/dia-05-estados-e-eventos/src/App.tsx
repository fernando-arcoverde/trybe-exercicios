import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import CoffeeList from './components/CoffeeList';

function App() {
  function handleChange() {
    alert('Você digitou algo');
  }
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/coffees" element={ <CoffeeList /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
      <Input onChange={ handleChange } />
      <Button />
    </>
  );
}

export default App;
