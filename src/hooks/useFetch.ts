import { useEffect, useRef, useState } from 'react'

export const useFetch = <T>(url: string, options?: RequestInit) => {
  const [apiData, setApiData] = useState<T>()
  const [error, setError] = useState<Error | undefined>()
  const [isLoading, setIsLoading] = useState(true)
  const isComponentMounted = useRef(true)

  useEffect(() => {
    const sendRequest = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(url, {
          ...options,
        })

        if (!response.ok) throw new Error(response.statusText)

        const data = (await response.json()) as T

        setApiData(data)
        setIsLoading(false)
      } catch (error) {
        setError(error as Error)
        setIsLoading(false)
      }
    }

    if (isComponentMounted.current) {
      sendRequest()
    }

    return () => {
      isComponentMounted.current = false
    }
  }, [url, options])

  return { apiData, error, isLoading }
}
