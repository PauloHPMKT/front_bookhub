import { useCallback, useContext, useState } from "react"
import { Button } from "../../components/Button"
import { Container } from "../../components/Container"
import { Header } from "../../components/HeaderTItle/Header"
import { Title } from "../../components/Title"
import { Card } from "../../components/Card"
import { Input } from "../../components/Input"
import { searchBook } from "../../services/books"
import { BooksContext } from "../../context/books"

const genderBooks = [
  'Ação',
  'Aventura',
  'Biografia',
  'Comédia',
  'Drama',
  'Ficção',
]

export const Home = () => {
  const { books, handleSetBooks } = useContext(BooksContext)
  const [selectedGender, setSelectedGender] = useState<string[]>([]);

  const handleSelect = useCallback((title: string) => {
    if (selectedGender.includes(title)) {
      const removeGender = selectedGender.filter((gender) => gender !== title)
      setSelectedGender(removeGender)
    } else {
      setSelectedGender([...selectedGender, title])
    }
  }, [selectedGender])

  const handleSubmit = useCallback(async (value: string) => {
    const response = await searchBook(value)
    handleSetBooks(response)
  }, [handleSetBooks])

  return (  
    <div className="mb-6">
      <Header />
      <Container>
        <Title>
          O que você quer ler hoje?
        </Title>
        <div className="grid md:grid-cols-8 grid-cols-4 gap-8 my-6">
          {genderBooks.map((book, index) => (
            <Button 
              key={index} 
              variant={selectedGender.includes(book) 
                ? 'dark' 
                : 'light'
              } 
              onClick={() => handleSelect(book)}
            >
              {book}
            </Button>
          ))}
        </div>
        <div className="py-7">
          <p className="text-evergreen font-semibold text-2xl">
            Sobre o que você gostaria de receber uma recomendação de livro?
          </p>
          <Input placeholder="Eu gostaria de ler..." onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              handleSubmit((e.target as HTMLInputElement).value)
            }
          }} />
        </div>
        <Title className="my-5">
          Livros recomendados 
        </Title>
        <div className="grid md:grid-cols-3 gap-4">
          {books.map(book => (
            <Card key={book._id} id={book._id} book={book}/>
          ))}
        </div>
      </Container>
    </div>
  )
}