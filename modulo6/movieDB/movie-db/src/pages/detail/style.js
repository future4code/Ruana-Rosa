import styled from 'styled-components'

export const Header = styled.header`
display: flex;
flex-direction: column;
`

export const Top = styled.div`
width: 28.34vw;
height: 3.88vw;
background-color: #5C16C5;
display: flex;
align-items: center;
img{
width: 12.77vw;
margin-left: 7.77vw;
}
`

export const Rectangle = styled.div`
width: 100%;
height: 41.66vw;
background-color: #2D0C5E;
color: white;
img{
position: absolute;
width: 27vw;
left: 7.77vw;
top: 8.9vw;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 8px;
}
`

export const CrewNames = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
height: 8vw;
left: 40vw;
top: 33.6vw;
`

export const MemberCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
font-family: 'Roboto';
font-style: normal;
p{
    font-weight: 400;
}
h4{
    font-weight: 700;
}
`

export const MovieTitle = styled.h1`
height: 38px;
left: 40vw;
top: 9vw;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
display: flex;
align-items: center;
letter-spacing: -0.005em;
color: #FFFFFF;
`
export const Info = styled.div`
display: flex;
flex-direction: row;
row-gap: 1vw;
height: 24px;
margin-top: 1vw;
width: 90%;
justify-content: space-between;
`

export const InfoText = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
display: flex;
align-items: center;
color: #FFFFFF;
`

export const Overview = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
color: #FFFFFF;
`
export const TextOverview = styled.p`
text-align: justify;
font-family: 'Roboto';
font-style: normal;
margin-top: 1vw;
font-weight: 400;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
letter-spacing: -0.005em;
color: #DDDDDD;
`

export const RatingContainer = styled.div`
width: 61.4px;
height: 61.4px;
background: rgba(255, 255, 255, 0.1);
align-items: center;
justify-content: center;
display: flex;
p{
color: #14FF00;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 38px;
}
`

export const SideRating = styled.p`
width: 102px;
height: 40px;
margin-left: 2vw;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
color: #FFFFFF;
`

export const CastCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 8px;
width: 191px;
height: 380px;
left: 1040px;
top: 0px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;
margin: 0 18px;
img{
width: 175px;
left: 8px;
top: 8px;
border-radius: 4px;
flex: none;
order: 0;
flex-grow: 0;
margin: 16px 0px;
}
div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #000000;
    }
    p{
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #646464;
    }
}
`

export const CastTitle = styled.p`
width: 185px;
height: 32px;
margin-top: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 32px;
display: flex;
align-items: center;
letter-spacing: -0.005em;
color: #131313;
`

export const CastList = styled.nav`
display: flex;
flex-direction: row;
margin-top: 50px;
height: 420px;
overflow-x: scroll;
max-width: 100%;
`

export const Body = styled.div`
position: relative;
max-width: 100vw;
background: #F3F3F3;
`

export const Trailer = styled.p`
width: 81px;
height: 32px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 32px;
display: flex;
align-items: center;
letter-spacing: -0.005em;
color: #131313;
`

export const Recomendations = styled.p`
width: 208px;
height: 32px;
margin-top: 50px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 32px;
display: flex;
align-items: center;
letter-spacing: -0.005em;
color: #131313;
`

export const RecommendationList = styled.nav`
display: flex;
margin-top: 50px;
flex-direction: row;
height: 420px;
overflow-x: scroll;
max-width: 100%;
`
export const Content = styled.section`
display: flex;
flex-direction: column;
padding: 112px;
`
export const InfoContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 85%;
margin-left: 40vw;
margin-top: 5vw;
margin-right: 5vw;
margin-bottom: 5vw;
row-gap: 1vw;
`
export const RatingCard =styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

