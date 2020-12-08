import React from 'react';
import {useHistory} from 'react-router-dom'
import {useForm}  from '../Hooks/useForm'
import {api} from '../Services/api'



export default function LoginPage() {

  const history = useHistory()

  const initForm = {email: '', password: '' }
  const [form, onChange] = useForm(initForm)

  const handleChange = (event)=>{
    const {name, value} = event.target
    
    onChange(name, value)
  }

  const loggingUser = (event)=>{

    api.post('/login', form).then(response=>{
      localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem('token', response.data.token)

      if(response.data.user.hasAddress){

        history.push('/')
      }else{
        history.push('/address_form')
      }


    }).catch(error=>{
      console.log(error.message)
    })

    event.preventDefault()
  }
  console.log(form)
  return (
    <form onSubmit={loggingUser}>
      <input 
        type="email"
        name='email'
        value={form.email}
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
      <button>Login</button>

      <div onClick={()=> history.push('/sign_up')}>
        <p>Nao Tem Cadastro? <b> Registre-se</b> </p>
      </div>
    </form>
  );
}
