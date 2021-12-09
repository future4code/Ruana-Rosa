import styled from "styled-components";

export function NomeFirma() {
    const Firma = styled.div`
    justify-self: left;
    align-self: flex-start;
    position: fixed;
    margin-left: 25px;
    p{
        font-weight: 700;
        color: white;
        font-size: 64px;
        text-shadow: 1px 1px 1px black;
    }
    `
    return (
        <Firma>
            <p>LabeX</p>
        </Firma>
    )
}

