import { BrowserRouter } from "react-router-dom";
import { GlobalCss } from "./styles";
import Rotas from "./routes";

function App() {

  return (
    <>
      <GlobalCss />
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App
