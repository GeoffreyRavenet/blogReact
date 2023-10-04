import { useEffect, useState } from "react"
import { useRefSync } from "./useRefSync.js"

/**
 * @param {string} url
 * @param {FetchEventInit} options
 */
export function useFetch(url, options) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const optionRef = useRefSync(options)

  useEffect(() => {
    fetch(url, {
      ...optionRef,
      headers: {
        Accept: "application/json; charset=UTF-8",
        ...optionRef.headers,
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
      .catch((e) => {
        setError(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return {
    loading,
    data,
    error,
  }
}
