import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_USER_URL;

const login = (event) => {
  event.preventDefault();
  const form = event.target;

  const request = {
    email: form.email.value,
    password: form.password.value,
  };

  Axios.post(`${API_URL}/login`, request)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      window.location = '/';
    })
    .catch((error) => console.error(error));
}

const Login = () => {
  return (
    <div className='ed-grid'>
      <div className='l-block'></div>
      <div className='m-to-center m-60 lg-30'>
        <form onSubmit={login.bind()}>
          <h1 className='center'>Login</h1>

          <div className='form__item'>
            <label htmlFor='email'>
              Email:
              <input type='email' id='email' name='email' placeholder='Add to email' required />
            </label>
          </div>

          <div className='form__item'>
            <label htmlFor='email'>
              Password:
              <input type='password' id='password' name='password' placeholder='Add to password' required />
            </label>
          </div>

          <div className='form__item'>
            <input type='submit' className='button full' value='Login' />
          </div>
        </form>

        <div className='center'>
          <p>
            Don't have an account? <Link to='/register'>Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
