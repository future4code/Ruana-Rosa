import axios from 'axios'
import Styled from 'styled-components'
import CriarPlaylist from './Components/CriarPlaylist'
import ListaPlaylists from './Components/ListaPlaylists'



function App() {
  return (
    <div>
      <CriarPlaylist/>
      <ListaPlaylists/>
    </div>
  )
}

export default App
