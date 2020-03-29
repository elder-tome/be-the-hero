import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css'
import api from '../../services/api';
import logoImage from '../../assets/logo.svg';

function Profile(){

  const [ incidents, setIncidents ] = useState([]);

  const ongName = localStorage.getItem('ongName');
  const ongId= localStorage.getItem('ongId');

  const history = useHistory();

  useEffect(() => {
    async function loadList(){
      const response = await api.get('profile', {
        headers: {
          Authorization: ongId
        }
      });
  
      setIncidents(response.data);
    }
    loadList();
  }, [ongId]);

  async function handleDeleteIncidents(id){
    try {
      await api.delete(`incidents/${id}`, {
        headers:{
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));

    } catch (error) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  function handleLogout(){
    localStorage.clear();
    history.push('/');
  }

  return(
    <div className="profile-container">

      <header>
        <img src={logoImage} alt='Be The Hero'/>
        <span>Bem vinda, {ongName} </span>

        <Link className='button' to='/incidents/new'>Cadastrar novo caso</Link>
        <button onClick={handleLogout} type='button'>
          <FiPower size='24' color='#E02041'/>
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>R$ {incident.value},00</p>

            <button onClick={() => handleDeleteIncidents(incident.id)} type='button'>
              <FiTrash2 size='24' color='#A8A8B3' />
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Profile;