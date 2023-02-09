import logoURL from '../assets/Kaplan_logo.png'

function Header() {
  return (
    <header aria-label="Site Header" className="max-h-[25vh] bg-white px-6">
      <div className="py-6">
        <a href="/">
          <span className="sr-only">Kaplan Books</span>
          <img className="h-8 w-auto sm:h-10" src={logoURL} alt="Kaplan Logo" />
        </a>
      </div>
    </header>
  )
}

export default Header
