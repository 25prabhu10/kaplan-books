import { render, screen } from '@testing-library/react'
import App from './App'

test('loads without errors', () => {
  // Arrange
  render(<App />)
  const header = screen.getByRole('heading')

  // Assert
  expect(header).toBeInTheDocument()
})
