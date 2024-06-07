import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card } from "../../components/Card"
import { Container } from "../../components/Container"
import { Title } from "../../components/Title"
import { Book, BooksContext } from "../../context/books"

export const BookDetails = () => { 
  const { books } = useContext(BooksContext)
  const [book, setBook] = useState<Book | null>(null)

  const { id } = useParams() 

  useEffect(() => {
    const findBook = books.find(book => book._id === id)
    if (findBook && books.length) {
      setBook(findBook!)
    }
  }, [books, id])
  return (
    <Container>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-16">
        <div>
          <h2 className="text-5xl font-bold text-evergreen">{book?.title}</h2>
          <p className="text-gray-500 text-xl font-light py-4">{book?.authors.join(', ')}</p>
          <p className="text-gray-500 mt-6">{
            (book?.longDescription && book.longDescription) ?? 
            (book?.shortDescription || "Nenhuma sinopse disponível") 
          }</p>
        </div>
        <div>
          <img 
            className="w-full rounded-lg" 
            src={book?.thumbnailUrl} 
            alt={book?.title} 
          />
        </div>
      </div>
      <div>
        <Title className="my-6">
          Recomendações com base nesse livro
        </Title>
        <div className="grid md:grid-cols-3 gap-4">
          {books.map(book => (
            <Card key={book._id} id={book._id} book={book}/>
          ))}
        </div>
      </div>
    </Container>
  )
}