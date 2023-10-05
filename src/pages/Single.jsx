import Alert from "../components/Alert.jsx"
import Button from "../components/Button.jsx"
import Spinner from "../components/Spinner.jsx"
import { useDocumentTitle } from "../hooks/useDocumentTitle.js"
import { useFetch } from "../hooks/useFetch.js"
import { useToggle } from "../hooks/useToggle.js"
import EditPostModel from "./Single/EditPostModal.jsx"

export default function Single({ postId }) {
  const {
    data: post,
    error,
    loading,
    setData,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

  useDocumentTitle(post?.title)

  const [isEditing, toggleEditing] = useToggle(false)

  if (loading) {
    return <Spinner />
  }
  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>
  }

  const handleSave = (data) => {
    setData({
      ...post,
      ...data,
    })
    toggleEditing()
  }

  return (
    <>
      <h1 className="mb-3">{post.title}</h1>
      <img
        src={`https://picsum.photos/id/${post.id}/288/180`}
        alt=""
        className="img-fluid img-thumbnail my-3"
      />
      <p>{post.body}</p>
      {isEditing && <EditPostModel post={post} onClose={toggleEditing} onSave={handleSave} />}
      <Button variant="secondary" onClick={toggleEditing}>
        Editer l'article
      </Button>
      <p>
        <a href={`#post:${post.id + 1}`}>Article suivant</a>
      </p>
    </>
  )
}
