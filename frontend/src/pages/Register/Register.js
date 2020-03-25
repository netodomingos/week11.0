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
    InputGroup
} from './styles';

import Logo from '../../assets/logo.svg'



export default function Register() {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ whatsapp, setwhatsapp ] = useState('')
    const [ city, setCity ] = useState('')
    const [ uf, setUf ] = useState('')

    const history = useHistory()

    async function handleRegister(e){

        e.preventDefault()

        const data = {
            name, 
            email,
            whatsapp,
            city,
            uf
        }

       try{

        const response = await api.post('/ongs', data)

        alert(`Seu ID de acesso: ${response.data.id}`)

        history.push('/')

       } catch (err){
           alert('Erro no cadastro!')
       }
    
    }

  return (
    <Container>
        <Content>
            <Section>
                <img
                    src={Logo} alt='Logo'
                />

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG.</p>
                
                <Link to='/'>
                    <FiArrowLeft size={16} color='#E02041'/>
                    Voltar para o Login
                </Link>
            </Section>
            <Form onSubmit={handleRegister}>
                <input  
                    placeholder='Nome da ONG' 
                    value={name}
                    onChange={text => setName(text.target.value) }
                />
                <input 
                    placeholder='E-mail'
                    type='email'
                    value={email}
                    onChange={text => setEmail(text.target.value) }
                />

                <input 
                    placeholder='WhatsApp'
                    value={whatsapp}
                    onChange={text => setwhatsapp(text.target.value) }
                />
                
                <InputGroup>
                    <input 
                        placeholder='Cidade'
                        value={city}
                        onChange={text => setCity(text.target.value)}
                    />
                    <input 
                        placeholder='UF' style={{ width: 80 }}
                        value={uf}
                        onChange={text => setUf(text.target.value)}
                    />
                </InputGroup>

                <button
                    type='submit'
                >
                    Cadastrar
                </button>
            </Form>
        </Content>
    </Container>
  );
}
