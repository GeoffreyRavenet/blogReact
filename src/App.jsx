import useHashNavigation from "./hooks/useHashNavigation.js"
import Home from "./pages/Home.jsx"
import Single from "./pages/Single.jsx"
import Contact from "./pages/Contact.jsx"
import NotFound from "./pages/NotFound.jsx"
import Header from "./components/Header.jsx"

function App() {
  const { page, param } = useHashNavigation()
  const pageContent = getPageContent(page, param)

  return (
    <>
      <Header page={page} />
      <div className="container mb-3">{pageContent}</div>
    </>
  )
}

function getPageContent(page, param) {
  if (page === "home") {
    return <Home />
  }
  if (page === "post") {
    return <Single postId={param} />
  }
  if (page === "contact") {
    return <Contact />
  }
  return <NotFound pageName={page} />
}

export default App