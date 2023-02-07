import { render, screen } from '@testing-library/react'
import App from './App'

test('loads and displays greeting', () => {
  // Arrange
  render(<App />)

  // Assert
  expect(screen.getByRole('heading')).toHaveTextContent(/^Hello, World!$/)
})
