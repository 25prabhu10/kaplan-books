import { ReactNode } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

type MainLayoutProps = {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <ErrorBoundary>
          <main>{children}</main>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default MainLayout
