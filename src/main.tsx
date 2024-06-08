import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { BooksProvider } from './context/books.tsx'
import { AppRoutes } from './routes/index.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BooksProvider>
    <RouterProvider router={AppRoutes} />
  </BooksProvider>,
)
