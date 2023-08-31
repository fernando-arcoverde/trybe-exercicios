import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Tasks from './pages/tasks';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/tasks" element={ <Tasks /> } />
    </Routes>
  );
}

export default App;
