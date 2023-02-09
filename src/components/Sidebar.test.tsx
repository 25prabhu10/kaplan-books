import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Sidebar from './Sidebar'

test('can be opened and closed', async () => {
  render(<Sidebar />)

  const toggleSidebarBtn = screen.getByRole('button', { name: /menu/i })

  expect(toggleSidebarBtn).toHaveTextContent(/menu/i)
  expect(within(toggleSidebarBtn).getByText(/menu/i)).not.toHaveClass('hidden')

  await userEvent.click(toggleSidebarBtn)

  expect(within(toggleSidebarBtn).getByText(/menu/i)).toHaveClass('hidden')
})
