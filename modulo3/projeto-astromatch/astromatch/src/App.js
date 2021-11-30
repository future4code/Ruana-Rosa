import {useState} from 'react';
import { TelaInicial } from './components/TelaInicial';
import { TelaDeMatches } from './components/TelaDeMatches';
import styled from 'styled-components';

const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

function App() {
  const [tela, setTela] = useState("tela inicial")

  return (
    <Corpo>
      {<TelaInicial/>}
    </Corpo>
  );
}

export default App;
