import React from 'react';
import {useHistory} from 'react-router-dom'
import {useForm}  from '../Hooks/useForm'
import {api} from '../Services/api'



export default function SignUpPage() {

  const history = useHistory()

  const initForm = {email: '', password: '', confirmPassword: '', cpf: '', usuario: '' }
  const [form, onChange] = useForm(initForm)

  const handleChange = (event)=>{
    const {name, value} = event.target
    
    onChange(name, value)
  }

  const signingUpUser = (event)=>{
    if(form.password !== form.confirmPassword){

      alert('Os Campos Password e Confirme Password devem ser Identicos!')
    }else{

      const body = {
        name: form.usuario,
        email: form.email,
        cpf: form.cpf,
        password: form.password
      }
      api.post('/login', body).then(response=>{
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('token', response.data.token)
  
        history.push('/address_form')
    
      }).catch(error=>{
        console.log(error.message)
      })
    }
    event.preventDefault()
  }

  return (
    <form onSubmit={signingUpUser}>
      <input 
        type="Usuario"
        name='usuario'
        value={form.usuario}
        onChange={handleChange} 
        required
          />
        <input 
        type="email"
        name='email'
        value={form.email}
        onChange={handleChange} 
        required
          />
        <input 
        type="text"
        name='cpf'
        placeholder='111.111.111-10'
        value={form.cpf}
        pattern='[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}'
        onChange={handleChange} 
        required
          />
      <input 
        type="password"
        name='password'
        value={form.password}
        onChange={handleChange} 
        required
        />
        <input 
        type="password"
        name='confirmPassword'
        value={form.confirmPassword}
        onChange={handleChange} 
        required
        />
      <button>Sing Up</button>

      <div onClick={()=> history.push('/login')}>
        <p>Ja Tem Cadastro? <b> Log in</b> </p>
      </div>
    </form>
  );
}