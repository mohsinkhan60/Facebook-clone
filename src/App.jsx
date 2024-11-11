import { BrowserRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"


const App = () => {
  return (

      <BrowserRouter>
      <Routes>
        {/* Root Routes */}
        <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
export default App