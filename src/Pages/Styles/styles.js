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
    justify-content: center;
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
    top:142px;
    left: 70px;
    margin-top: 0px;
    margin-bottom: 0px;
    border-radius: 2px;
    border: solid 1px grey;
    font-size: 46px;
    padding-left: 20px;
    
`

export const RenderContainer = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    overflow: scroll ;
    width: 100vw;
    height: 70vh;
    position: absolute;
    top:400px;

`
export const LogoInvert = styled.img`

    width: 240px;
    height: 160px;
    margin: 16px;

`

export const Button = styled.button`

    width: 80%;
    border: none;
    outline: none;
    color: black;
    background-color: #5FB74A;
    height: 52px;
    font-weight: bold;
    font-size: 22px;
    cursor: pointer;
    border-radius: 5px;
`
export const SearchInput = styled.input`

    width: 90%;
    height: 56px;
    padding: 16px 16px 16px 17px;
    border: none;
    outline: none;
    font-size: 35px;

`
export const LogoRestaurant = styled.div`

    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    height: 300px;

`