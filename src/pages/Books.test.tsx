import { render, screen, waitFor, within } from '@testing-library/react'
import Books from './Books'

test('should fetch and show list of books', async () => {
  render(<Books />)

  expect(screen.getByRole('status')).toHaveTextContent(/loading/i)

  const booksElm = await waitFor(() => screen.getByTestId('books-element'))

  expect(within(booksElm).getByRole('heading', { level: 2 })).toHaveTextContent(
    /all books/i
  )

  const booksList = within(booksElm).getAllByRole('heading', { level: 3 })
  expect(booksList[0]).toHaveTextContent(/official guide to oet/i)
})
