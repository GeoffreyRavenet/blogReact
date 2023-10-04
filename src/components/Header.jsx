/**
 * @param {string} page
 */
import { useToggle } from "../hooks/useToggle.js"
import activeClassIf from "../utils/classname.js"

const NAVLIST = [
  {
    pageName: "Home",
    tag: "",
  },
  {
    pageName: "Article",
    tag: "post",
  },
  {
    pageName: "Contact",
    tag: "contact",
  },
]

export default function Header({ page }) {
  const [expended, toggleExpended] = useToggle(false)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MonBlog
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleExpended}
          aria-controls="navbarNav"
          aria-expanded={expended}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${expended && "show"} `} id="navbarNav">
          <ul className="navbar-nav">
            {NAVLIST.map((item) => (
              <li key={item.pageName} className="nav-item">
                <a
                  className={activeClassIf(page === item.tag, "nav-link")}
                  aria-current="page"
                  href={"#" + item.tag}
                >
                  {item.pageName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
