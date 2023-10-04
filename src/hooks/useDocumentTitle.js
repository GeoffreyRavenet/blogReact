import { useEffect, useRef } from "react"

export function useDocumentTitle(title) {
  // On garde en mémoire le titre original pour le réinitialiser
  // si le composant est démonté
  const titleRef = useRef(document.title)

  useEffect(() => {
    return () => {
      document.title = titleRef.current
    }
  }, [])

  useEffect(() => {
    document.title = title ? title : titleRef.current
  }, [title])
}
