import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_USER_URL;

const register = (event) => {
  event.preventDefault();
  const form = event.target;

  const request = {
    email: form.email.value,
    name: form.name.value,
    password: form.password.value,
  };

  Axios.post(`${API_URL}/signup`, request)
    .then((response) => {
      window.location = '/login';
    })
    .catch((error) => console.error(error));
};

const Register = () => {
  return (
    <div className='ed-grid'>
      <div className='m-to-center m-60 lg-30'>
        <form onSubmit={register.bind()}>
          <h1 className='center'>Register</h1>

          <div className='form__item'>
            <label htmlFor='email'>
              Email:
              <input type='email' id='email' name='email' placeholder='Add to email' required />
            </label>
          </div>

          <div className='form__item'>
            <label htmlFor='name'>
              Name:
              <input type='text' id='name' name='name' placeholder='Add to name' required />
            </label>
          </div>

          <div className='form__item'>
            <label htmlFor='email'>
              Password:
              <input type='password' id='password' name='password' placeholder='Add to password' required />
            </label>
          </div>

          <div className='form__item'>
            <input type='submit' className='button full' value='Register' />
          </div>
        </form>

        <div className='center'>
          <p>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
