import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


const UserProfileLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
export default UserProfileLayout