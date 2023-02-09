type BookProps = {
  title: string
  authors: string[]
  publisher: string
  publishedDate: string
}

function Book({ authors, publishedDate, publisher, title }: BookProps) {
  return (
    <article className="rounded-md border-l-4 border-l-orange-400 bg-white p-4 text-cyan-900 shadow-lg hover:shadow-2xl">
      <h3 className="truncate text-lg font-semibold leading-7">{title}</h3>
      <p className="truncate leading-7">Authors: {authors.join(', ')}</p>
      <p className="truncate leading-7">publisher: {publisher}</p>
      <p className="truncate leading-7">Published Date: {publishedDate}</p>
    </article>
  )
}

export default Book
