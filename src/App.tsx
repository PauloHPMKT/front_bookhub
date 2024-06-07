import { Container } from "./components/Container"
import { HeaderTitle } from "./components/HeaderTItle"
import { BooksProvider } from "./context/books"
import { AppRoutes } from "./routes"

function App() {
  return (
    <>
      <Container>
        <HeaderTitle />
      </Container>
      <BooksProvider>
        <AppRoutes />    
      </BooksProvider>
    </>
  )
}

export default App
