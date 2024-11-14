import { BrowserRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import UserProfileLayout from "./layout/UserProfileLayout"
import Home from "./pages/Home"
import UserProfile from "./pages/UserProfile"


const App = () => {
  return (

      <BrowserRouter>
      <Routes>
        {/* Root Routes */}
        <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        </Route>

        {/* userProfile Routes */}
        <Route path="/user" element={<UserProfileLayout />}>
        <Route index element={<UserProfile />} />
        </Route>
        

      </Routes>
    </BrowserRouter>
  )
}
export default App