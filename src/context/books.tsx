import { createContext, useState } from "react";

export type Book = {
  authors: string[]
  categories: string[]
  longDescription: string
  score: number
  shortDescription: string
  status: string
  thumbnailUrl: string
  title: string
  _id: string
}

interface PropsContext {
  books: Book[]
  handleSetBooks: (book: Book[]) => void
}

export const BooksContext  = createContext({} as PropsContext)

export function BooksProvider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<Book[]>([])

  const handleSetBooks = (book: Book[]) => {
    setBooks(book)
    console.log(book)
  }

  return (
    <BooksContext.Provider value={{
      books,
      handleSetBooks,
    }}>
      {children}
    </BooksContext.Provider>
  )
}