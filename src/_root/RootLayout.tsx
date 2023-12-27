import { Link } from "react-router-dom"

const RootLayout = () => {
  return (
    <div>
      <Link to="/sign-up" className="text-primary-500 text-small-bold ml-1">Log in</Link>
    </div>
  )
}

export default RootLayout