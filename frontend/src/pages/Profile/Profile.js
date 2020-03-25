import React, { useState, useEffect } from 'react';

import { Container, ButtonPower, IncidentsUl } from './styles';

import api from '../../Services/API'

import { FiPower, FiTrash2 } from 'react-icons/fi'

import { Link, useHistory } from 'react-router-dom'

import Logo from '../../assets/logo.svg'

export default function Profile() {
    const [ incidents, setIncidents ] = useState([])

    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    useEffect(() => {
        api.get('/profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])

    async function handleDeleteIncident(id){
        try{
            await api.delete(`/incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            })

            setIncidents(incidents.filter(incident => incident.id !== id))
        }catch(err){
            alert('Erro ao deletar caso, tente novamente!')
        }
    }

    function handleLogout(){
        localStorage.clear()

        history.push('/')
    }

    return (
        <Container>
            <header>
                <img 
                    src={Logo}
                    alt='logo'
                />
                <span>Bem vinda, {ongName}!</span>
                <Link to='/incidents/new'>
                    <button>
                        Cadastrar novos casos
                    </button>
                </Link>
                <ButtonPower
                    onClick={handleLogout}
                >
                    <FiPower size={18} color='#E02041'/>
                </ButtonPower>
            </header>

            <h1>Casos Cadastrados</h1>

            <IncidentsUl>
                {
                    incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>{incident.title}</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>{incident.description}</p>

                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                            <button
                                onClick={() => handleDeleteIncident(incident.id)}
                            >
                                <FiTrash2 size={20} color='#A8A8B3' />
                            </button>
                        </li>
                    ))
                }
        </IncidentsUl>
    </Container>
  );
}
