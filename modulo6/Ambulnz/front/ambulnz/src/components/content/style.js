import styled from "styled-components";

export const PizzaListContainer = styled.section`
display: flex;
flex-wrap: wrap;
margin: auto;
gap: 50px;
padding: 50px;
`

export const PizzaCard = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
width: 180px;
height: 200px;
background-color: white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
ul{
    list-style: none;
}

`