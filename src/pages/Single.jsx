import Alert from "../components/Alert.jsx"
import Button from "../components/Button.jsx"
import Spinner from "../components/Spinner.jsx"
import { useDocumentTitle } from "../hooks/useDocumentTitle.js"
import { useFetch } from "../hooks/useFetch.js"

export default function Single({ postId }) {
  const {
    data: post,
    error,
    loading,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

  useDocumentTitle(post?.title)

  if (loading) {
    return <Spinner />
  }
  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>
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

      <Button variant="secondary">Editer l'article</Button>
      <p>
        <a href={`#post:${post.id + 1}`}>Article suivant</a>
      </p>
    </>
  )
}
