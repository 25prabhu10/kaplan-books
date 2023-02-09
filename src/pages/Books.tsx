import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Book from '../components/Book'
import ErrorFallback from '../components/ErrorFallback'
import Spinner from '../components/Spinner'
import { useBooks } from '../hooks/useBooks'

function Books() {
  const [search, setSearch] = useState('kaplan test prep')
  const { books, error, isLoading } = useBooks(search)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.currentTarget.value)
  }

  return (
    <section className="mx-auto min-h-screen p-6 md:px-12">
      <div className="mb-6 flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-0">
        <h1 className="text-3xl font-bold">Books</h1>
        <button className="rounded-md bg-blue-700 px-4 py-2 font-bold text-cyan-50 md:text-lg">
          Create New Book
        </button>
      </div>
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <FiSearch className="absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 transform text-gray-600" />
        <input
          className="my-5 w-full border-b border-gray-900 bg-gray-100 py-2 pl-12 md:w-[50%]"
          id="search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
      </div>

      {isLoading ? (
        <Spinner />
      ) : error ? (
        <ErrorFallback message={error.message} />
      ) : books && books.items.length > 0 ? (
        <div data-testid="books-element">
          <h2 className="mt-2 mb-8 text-xl font-bold text-cyan-900">
            All Books
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {books.items.map((book) => (
              <Book
                key={book.id}
                authors={book.volumeInfo.authors}
                publisher={book.volumeInfo.publisher}
                publishedDate={book.volumeInfo.publishedDate}
                title={book.volumeInfo.title}
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-8">No books found!</p>
      )}
    </section>
  )
}

export default Books
