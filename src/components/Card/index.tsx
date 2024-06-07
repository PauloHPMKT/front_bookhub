import { useCallback } from "react"
import { Button } from "../Button"
import { Tag } from "../Tag"
import { useNavigate } from "react-router-dom"
import { Book } from "../../context/books";

interface CardProps {
  id: string;
  book: Book;
}

export const Card = ({ id, book }: CardProps) => {
  const navigate = useNavigate()
  const handleSelectBook = useCallback(() => {
    navigate(`/${id}`)
  }, [id, navigate])

  return (
    <div className="p-4 grid grid-cols-3 gap-3 shadow-lg rounded-lg border-gray-100 max-w-lg w-full">
      <img 
        src={book.thumbnailUrl} 
        alt={book.title} 
        className="col-span-1 rounded-lg w-full"
      />
      <div className="col-span-2">
        <p className="font-bold text-xl text-evergreen">{book.title}</p>
        <p className="font-light text-lg text-gray-500 mb-5">{book.authors[0]}</p>
        <Tag className="mb-2">{book.categories[0]}</Tag>
        <p>
          <strong>Sinopse:</strong>
          {book.shortDescription || "Nenhuma sinopse disponível"} 
        </p>
        <Button 
          onClick={handleSelectBook}
          variant="light" 
          className="w-1/2"
        >
          Ver mais
        </Button>
      </div>
    </div>
  )
}