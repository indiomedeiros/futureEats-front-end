import styled from 'styled-components'

export const MainContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    position: relative;
   
` 
export const Login_Sign_Container = styled(MainContainer)`

    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 4;
    background-color: white;
    
`

export const FormContainer = styled.form`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: max-content;
    width: 100%;
`
export const SearchContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    position: absolute;
    top:70px;
    left: 15px;
    margin-top: 0px;
    margin-bottom: 0px;
    border-radius: 2px;
    border: solid 1px grey;
    font-size: 30px;
    padding-left: 20px;
    
`

export const RenderContainer = styled.div`

    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    align-items: center;
    margin: auto;
    margin-top: 200px;
    justify-content: center;
    overflow: scroll;
    max-height: 70vh;
    width: 100vw;
    padding-bottom: 80px;
   

`
export const LogoInvert = styled.img`

    width: 112px;
    height: 65px;
  

`

export const Button = styled.button`

    width: 80%;
    border: none;
    outline: none;
    color: black;
    background-color: #5FB74A;
    height: 42px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
`
export const SearchInput = styled.input`

    width: 90%;
    height: 45px;
   
    border: none;
    outline: none;
    font-size: 20px;

`
