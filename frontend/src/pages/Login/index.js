import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';
import logoImage from '../../assets/logo.svg';
import herosImage from '../../assets/heroes.png';
 
function Login() {

  const [ id, setId ] = useState('');

  const history = useHistory();

  async function handleLogin(e){

    e.preventDefault();

    try {

      const response = await api.post('session', { id });
      console.log(response.data.name);
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');

    } catch (error) {
      alert('Falha no login, tente novamente.');
    }

  }

  return (
    <div className="login-container">

      <section className="form">

        <img src={logoImage} alt='Be The Hero'/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input
            placeholder='Sua ID'
            value={id}
            onChange={ e => setId( e.target.value ) }
          />

          <button className='button' type='submit' >Entrar</button>

          <Link className='link' to="/register">
            <FiLogIn size='24' color='#E02041'/>
            Não tenho cadastro
          </Link>
        </form>

      </section>
      <img src={herosImage} alt='Heros'/>

    </div>
  );
}

export default Login;