import { render, screen } from '@testing-library/react'
import Book from './Book'

test('can be opened and closed', async () => {
  const title = 'Official Guide to OET'
  const authors = ['Kaplan Test Prep', 'Exam Prep']
  const publisher = 'Simon and Schuster'
  const publishedDate = '2020-03-03'

  render(
    <Book
      title={title}
      authors={authors}
      publisher={publisher}
      publishedDate={publishedDate}
    />
  )

  expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(title)
  expect(screen.getByText(`Authors: ${authors.join(', ')}`)).toBeVisible()
})
