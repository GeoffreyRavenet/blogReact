import { useEffect, useState } from "react"

export default function useHashNavigation() {
  const [hash, setHash] = useState(location.hash)
  const cleanHash = hash.replace("#", "").toLocaleLowerCase()
  useEffect(() => {
    const handleHashChange = () => {
      setHash(location.hash)
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return { page: cleanHash ? cleanHash.split(":")[0] : "home", param: cleanHash.split(":")[1] }
}
