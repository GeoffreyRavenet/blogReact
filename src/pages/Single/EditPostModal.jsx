import React from "react"
import Modal from "../../components/Modal.jsx"
import Input from "../../components/forms/Input.jsx"
import Button from "../../components/Button.jsx"

export default function EditPostModel({ post, onClose, onSave }) {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Modal onClose={onClose}>
      <h1>Editer l'article</h1>
      <form action="" onSubmit={handleSubmit} className="vstack gap-3">
        <Input name="title" label="Titre" defaultValue={post.title} />
        <Input name="body" label="Contenu" type="textarea" defaultValue={post.body} />
        <Button type="submit">Sauvegarder</Button>
      </form>
    </Modal>
  )
}
