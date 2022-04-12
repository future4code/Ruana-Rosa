import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const ContentHeader = styled.header`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Roboto';
font-style: normal;
margin-top: 50px;
h4{
    font-weight: 700; 
}
p{
    font-weight: 400;
    margin-top: 25px;
}
`
export const Table = styled.table`
border-collapse: collapse;
border: 1px solid black;
td, th{
    padding: 5px;
    border: 1px solid black;
    min-width: 30px;
    img{
        width: 25px;
        margin: auto;
        cursor: pointer;
        transition: 0.5s;
        :hover{
            transform: rotate(45deg);
        }
    }
}
`
export const Cell = styled.td`
text-align: center;
`
export const InfoContainer= styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 50px;
font-family: 'Roboto';
font-style: normal;
`