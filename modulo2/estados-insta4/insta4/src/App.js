import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'heterônimo'}
          fotoUsuario={'https://picsum.photos/id/1011/50/50'}
          fotoPost={'https://picsum.photos/id/1003/200/150'}
        />
        <Post
          nomeUsuario={'Lorem ipsum'}
          fotoUsuario={'https://picsum.photos/id/1027/50/50'}
          fotoPost={'https://picsum.photos/id/103/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
