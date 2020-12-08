import {useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { useAuthorization } from '../Hooks/useAuthetication';
import {useForm}  from '../Hooks/useForm'
import {api} from '../Services/api'



export default function EditProfilePage() {

  const history = useHistory()
  useAuthorization()
  const initForm = {name: '', email: '', cpf: ''}
  const [form, onChange] = useForm(initForm)

  const handleChange = (event)=>{
    const {name, value} = event.target
    
    onChange(name, value)
  }

  useEffect(() => {
    getProfile();
  }, [getProfile]);


  const getProfile = ()=>{

    api.defaults.headers.common['auth'] = localStorage.getItem('token')
    api.get('/profile').then(response=>{
      initForm.name = response.user.name
      initForm.email = response.user.email
      initForm.cpf = response.user.cpf
      
    }).catch(error=>{
      console.log(error.message)
    })

    event.preventDefault()
  }


  const updateProfile = (event)=>{
      const body = {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
      }
      api.put('/profile', body).then(response=>{
        alert("Dados atualizados com sucesso!")
        history.push('/')
    
      }).catch(error=>{
        console.log(error.message)
      })
    
    event.preventDefault()
  }

  return (
    <form onSubmit={updateProfile}>
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
        placeholder='111.111.111-10'
        value={form.cpf}
        pattern='[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}'
        onChange={handleChange} 
        required
          />
      <button>Salvar</button>
    </form>
  );
}