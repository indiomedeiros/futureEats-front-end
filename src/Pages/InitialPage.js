import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Logo from '../Assets/Img/logo-future-eats@3x.png'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';


const Background = styled.div`

  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: black;

`

const LogoCenter = styled.img`

  width: 240px;
  height: 160px;
  margin-bottom: 20px;
 

`
const LogoContainer = styled.div`
   position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color:#5cb646;

`

export default function InitialPage() {
  const history = useHistory()
  useEffect(()=>{

    const token = localStorage.getItem('token')
    
    setTimeout(()=>{
      //usar o coordinator
      token? history.push('/feed') : history.push('login')
      
    }, 2000)

  })
  return (
    <Background>
        <LogoContainer>
          <LogoCenter src={Logo} alt='future eats logo'/>
          <CircularProgress color='inherit' size='80px' />
        </LogoContainer>
    </Background>
  );
}
