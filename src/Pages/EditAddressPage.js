import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import useAuthorization from '../Hooks/useAuthetication';
import {useForm}  from '../Hooks/useForm'
import {api} from '../Services/api'
import Logo from '../Assets/Img/logo-future-eats-invert@3x.png'
import {FormContainer, 
        LogoInvert, 
        MainContainer, 
        Button} 
        from './Styles/styles'
import InputComponent from '../Components/Inputs/InputComponent'



export default function EditAddressPage() {
  const history = useHistory()
  useAuthorization()
  const initForm = {street: '', number: '', neighbourhood: '', city: '', state: '', complement: ''}
  const [form, onChange] = useForm(initForm)

  const handleChange = (event)=>{
    const {name, value} = event.target

    onChange(name, value)
  }

  
  
  const getAdress = ()=>{
    
    api.defaults.headers.common['auth'] = localStorage.getItem('token')
    api.get('/profile/address').then(response=>{
      initForm.street = response.address.street
      initForm.number = response.address.number
      initForm.neighbourhood = response.address.neighbourhood
      initForm.city = response.address.city
      initForm.state = response.address.state
      initForm.complement = response.address.complement
      
    }).catch(error=>{
      console.log(error.message)
    })
  }
  
  useEffect(() => {
    getAdress();
  }, [getAdress]);

  const addAdress = (event)=>{

    
    api.defaults.headers.common['auth'] = localStorage.getItem('token')
    api.put('/address', form).then(response=>{
      localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem('token', response.data.token)
      history.push('/')

    }).catch(error=>{
      console.log(error.message)
    })

    event.preventDefault()
  }
  console.log(form)
  return (
    <MainContainer>
    <LogoInvert src={Logo}/>
    <FormContainer onSubmit={addAdress}>
      <InputComponent
        type="text"
        name='street'
        value={form.street}
        onChange={handleChange} 
        required
        label='Rua'
          />
      <InputComponent
        type="text"
        name='number'
        value={form.number}
        onChange={handleChange} 
        required
        label='Numero'
        />      
      <InputComponent
        type="text"
        name='complement'
        value={form.complement}
        onChange={handleChange} 
        label='Complemento'
        />
      <InputComponent
        type="text"
        name='neighbourhood'
        value={form.neighbourhood}
        onChange={handleChange} 
        required
        label='Bairro'
        />
      <InputComponent
        type="text"
        name='city'
        value={form.city}
        onChange={handleChange} 
        required
        label='Cidade'
          />
      <InputComponent
        type="text"
        name='state'
        value={form.state}
        onChange={handleChange} 
        required
        label='Estado'
          />
      <Button>Salvar Altecoes</Button>
    </FormContainer>
  </MainContainer>
  );
}