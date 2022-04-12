import styled from 'styled-components'

export const Container = styled.header`
background-color: #00b8e2;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
margin: 0 auto;
height: 134px;
`

export const Form = styled.form`
justify-content: space-between;
display: flex;
flex-direction: row;
gap: 20px;
input{
    height: 50px;
    width: 230px;
    border: none;
    padding-left: 25px;
}
button{
    width: 132px;
    background-color: #00b8e2;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    :hover{
        background-color: rgba(184,226,255, 0.5);
    }
}
`