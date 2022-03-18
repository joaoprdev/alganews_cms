import { MouseEvent } from "react"
import { useNavigate } from "react-router-dom"

export default function NavBar () {

  const navigate = useNavigate()

  function HandleAnchorClick (e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    
    const newRoute = e.currentTarget.getAttribute('href')

    if (newRoute)
       navigate(newRoute)
  }

  return <nav>
      <ul>
        <li><a onClick={HandleAnchorClick} href="/">Home</a></li>
        <li><a onClick={HandleAnchorClick} href="/contato">Contato</a></li>
      </ul>
    </nav>
}