import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import  useAuthorization  from '../Hooks/useAuthetication';
import {useForm}  from '../Hooks/useForm'
import {api} from '../Services/api'



export default function EditProfilePage() {

  const history = useHistory()
  const user = JSON.parse(localStorage.getItem("user"))
  const [initForm, setInitForm ]= useState()
  const [form, onChange] = useForm({name: user.name, email: user.email, cpf: user.cpf})
  useAuthorization()
  const handleChange = (event)=>{
    const {name, value} = event.target
    
    onChange(name, value)
  }

  const updateProfile = (event)=>{
      const body = {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
      }
      api.put('/profile', body).then(response=>{
        const newUser = {...user,
          name: form.name,
          email: form.email,
          cpf: form.cpf,  
        }
        localStorage.setItem("user", JSON.stringify(newUser))
        alert("Dados atualizados com sucesso!")
        history.push('/')
    
      }).catch(error=>{
        console.log(error.message)
      })
    
    event.preventDefault()
  }

  return (
    
    <form onSubmit={updateProfile}>
      {console.log("form", initForm)}
      {console.log("profile", localStorage.getItem("user"))}
      <input 
        type="name"
        name='name'
        value={form.name}
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
        value={form.cpf}
        pattern='[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}'
        onChange={handleChange} 
        required
          />
      <button>Salvar</button>
    </form>
  );
}