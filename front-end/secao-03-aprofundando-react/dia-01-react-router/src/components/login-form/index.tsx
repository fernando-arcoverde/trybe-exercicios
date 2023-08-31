import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login-form.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    setEmail(target.value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    setPassword(target.value);
  }

  function validateLogin() {
    const regex = /\S+@\S+\.\S+/i;
    return regex.test(email) && password.length > 5;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validate = validateLogin();

    if (validate) {
      navigate('/tasks');
    } else {
      setError(true);
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div className="inputs-container">
        <label htmlFor="login">
          E-mail
          <input
            id="login"
            value={ email }
            onChange={ handleEmail }
            required
            placeholder="carol@trybe.com"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            value={ password }
            onChange={ handlePassword }
            type="password"
            required
          />
        </label>
        {error && (
          <div className="error-msg">
            <p>E-mail inválido ou senha com menos de 6 caracteres</p>
          </div>
        )}
      </div>
      <button>Enviar</button>
    </form>
  );
}

export default LoginForm;
