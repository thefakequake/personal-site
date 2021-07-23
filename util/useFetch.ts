import { useEffect, useState } from "react"

export const useFetch = (url: string) => {
  const [state, setState] = useState({ data: null, loading: true })

  useEffect(() => {
    setState({ data: null, loading: true })
    fetch(url)
      .then((res) => res.json())
      .then((json) => setState({ data: json, loading: false }))
  }, [url])

  return state
}
