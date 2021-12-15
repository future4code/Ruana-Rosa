import styled from "styled-components";



export const CardPostar = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: red;
align-items: center;
padding: 25px;
width: 50vw;
form{
    display: flex;
    gap: 25px;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
    input{
        height: 30px;
    }
    textarea{
        height: 100px;

    }
}
`