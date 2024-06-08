import { Outlet } from "react-router-dom"
import { Container } from "./components/Container"
import { HeaderTitle } from "./components/Header"

function App() {
  return (
    <>
      <Container>
        <HeaderTitle />
      </Container>
      <Outlet />    
    </>
  )
}

export default App
