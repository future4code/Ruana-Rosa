import axios from 'axios'
import Styled from 'styled-components'
import CriarPlaylist from './Components/CriarPlaylist'
import DetalhesPlaylists from './Components/DetalhesPlaylist'
import ListaPlaylists from './Components/ListaPlaylists'



function App() {
  return (
    <div>
      <CriarPlaylist/>
      <ListaPlaylists/>
      {/* <DetalhesPlaylists/> */}
    </div>
  )
}

export default App
