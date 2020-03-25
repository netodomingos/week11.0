import React, { useState } from 'react';

import api from '../../Services/API'

import { 
    Link,
    useHistory
} from 'react-router-dom'

import { 
    Container,
    Form
} from './styles';

import { FiLogIn } from 'react-icons/fi'

import Logo from '../../assets/logo.svg'
import Heroes from '../../assets/heroes.png'

export default function Login() {
    const [ id, setId ] = useState('')
    const history = useHistory()

    const handleLogin = async (e) => {
        e.preventDefault()

        try{
            const response = await api.post('/sessions', { id })

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            setId('')

            history.push('/profile')
        } catch(err) {
            alert('Oops, Algo de Errado aconteceu!')
        }
    } 

  return (
    <Container>
        <Form onSubmit={handleLogin}>
            <img 
                src={Logo}
                alt='Logo'
            />
            <form>
                <h1>Faça seu Logon</h1>
                <input
                    placeholder='sua ID'
                    value={id}
                    onChange={text => setId(text.target.value)}
                />
                <button
                    type='submit'
                >
                    Entrar
                </button>

                <Link to='/register'>
                    <FiLogIn size={16} color='#E02041'/>
                    Não tenho cadastro
                </Link>
            </form>
        </Form>

        <img 
            src={Heroes}
            alt='design'
        />
    </Container>
  );
}
