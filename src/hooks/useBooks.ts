import { useDebounce } from './useDebounce'
import { useFetch } from './useFetch'

type Item = {
  kind: string
  id: string
  etag: string
  selfLink: URL
  volumeInfo: {
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers: { type: string; identifier: string }[]
    readingModes: {
      text: boolean
      image: boolean
    }
    pageCount: number
    printType: string
    categories: string[]
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: {
      containsEpubBubbles: boolean
      containsImageBubbles: boolean
    }
    imageLinks: { smallThumbnail: string; thumbnail: string }
    language: string
    previewLink: URL
    infoLink: URL
    canonicalVolumeLink: URL
    subtitle?: string
  }
  saleInfo: {
    country: string
    saleability: string
    isEbook: boolean
    listPrice?: { amount: number; currencyCode: string }
    retailPrice?: { amount: number; currencyCode: string }
    buyLink?: URL
    offers?: {
      finskyOfferType: number
      listPrice: {
        amountInMicros: number
        currencyCode: string
      }
      retailPrice: {
        amountInMicros: number
        currencyCode: string
      }
    }[]
  }
  accessInfo: {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: {
      isAvailable: boolean
      acsTokenLink: URL
    }
    pdf: {
      isAvailable: boolean
    }
    webReaderLink: URL
    accessViewStatus: string
    quoteSharingAllowed: boolean
  }
  searchInfo?: {
    textSnippet: string
  }
}

type BookResponse = {
  items: Item[]
  kind: string
  totalItems: number
}

export const useBooks = (searchTerm: string) => {
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500)

  const {
    apiData: books,
    error,
    isLoading,
  } = useFetch<BookResponse>(
    `https://www.googleapis.com/books/v1/volumes?q=${debouncedSearchTerm}`
  )

  return { books, error, isLoading }
}
