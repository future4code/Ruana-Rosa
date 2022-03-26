import styled from 'styled-components'

export const Header = styled.header`
display: flex;
flex-direction: column;
`

export const Top = styled.div`
width: 100%;
height: 56px;
background-color: #5C16C5;
display: flex;
align-items: center;
/* justify-content: center;  */
img{
width: 184px;
margin-left: 112px;
align-self: center;
}
`

export const Rectangle = styled.div`
width: 100%;
height: 449px;
background-color: #2D0C5E;
`

export const Group = styled.section`
width: 100%;
height: 280px;
justify-content: center;
p{
width: 781px;
height: 112px;
margin: 140px auto;
justify-self: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 56px;
text-align: center;
letter-spacing: -0.005em;
color: #FFFFFF;
}
`
