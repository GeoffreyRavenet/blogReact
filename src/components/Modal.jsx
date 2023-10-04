import React, { useEffect, useRef } from "react"

export default function Modal({ children, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    dialogRef.current.showModal()
  }, [])

  const handleClose = (e) => {
    e.preventDefault()
    onClose?.()
  }

  return (
    <dialog ref={dialogRef} onCancel={handleClose} onClose={handleClose}>
      {children}
    </dialog>
  )
}