import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import {useForm}  from '../Hooks/useForm'
import {api} from '../Services/api'



export default function EditAddressPage() {
  const history = useHistory()

  const initForm = {street: '', number: '', neighbourhood: '', city: '', state: '', complement: ''}
  const [form, onChange] = useForm(initForm)

  const handleChange = (event)=>{
    const {name, value} = event.target

    onChange(name, value)
  }

  useEffect(() => {
    getAdress();
  }, [getAdress]);


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
    <div>
      <>
        Meu Endereço
      </>
      <form onSubmit={addAdress}>
        <input 
          type="text"
          name='street'
          value={form.street}
          onChange={handleChange} 
          required
            />
        <input 
          type="text"
          name='number'
          value={form.number}
          onChange={handleChange} 
          required
            />
        <input 
          type="text"
          name='complement'
          value={form.complement}
          onChange={handleChange} 
          />      
        <input 
          type="text"
          name='neighbourhood'
          value={form.neighbourhood}
          onChange={handleChange} 
          required
          />
          <input 
          type="text"
          name='city'
          value={form.city}
          onChange={handleChange} 
          required
          />
          <input 
          type="text"
          name='state'
          value={form.state}
          onChange={handleChange} 
          required
          />
        <button>Salvar</button>
      </form>
    </div>
  );
}