import React, { useState } from 'react';

import { 
    Link,
    useHistory
} from 'react-router-dom'

import api from '../../Services/API'

import { FiArrowLeft } from 'react-icons/fi'

import { 
    Container,
    Content,
    Section,
    Form,
} from './styles';

import Logo from '../../assets/logo.svg'

export default function NewIncident() {
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ value, setValue ] = useState('')

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')

    async function handleCreateIncident(e){
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try{

            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile')
        }catch(err){
            alert('Algo de errado aconteceu! Tente Novamente.')
        }
    }


  return (
    <Container>
        <Content>
            <Section>
                <img
                    src={Logo} alt='Logo'
                />

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um héroi para resolver isso.</p>
                
                <Link to='/profile'>
                    <FiArrowLeft size={16} color='#E02041'/>
                    Voltar para a Home
                </Link>
            </Section>
            <Form onSubmit={handleCreateIncident}>
                <input 
                    placeholder='Titulo do caso'
                    value={title}
                    onChange={text => setTitle(text.target.value)}
                />
                <textarea 
                    placeholder='Descrição'
                    value={description}
                    onChange={text => setDescription(text.target.value)}
                />
                <input 
                    placeholder='Valor em reais'
                    value={value}
                    onChange={text => setValue(text.target.value)}
                />
                

                <button
                    type='submit'
                >
                    Cadastrar caso
                </button>
            </Form>
        </Content>
    </Container>
  );
}
