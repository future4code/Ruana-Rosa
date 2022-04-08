import GlobalState from "./context/GlobalState";
import GlobalStyle from "./globalStyle";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <GlobalState>
        <GlobalStyle />
        <HomePage />
      </GlobalState>
    </>
  )
}

export default App;
