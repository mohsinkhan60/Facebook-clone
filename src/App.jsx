import { BrowserRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./layout/RootLayout"


const App = () => {
  return (

      <BrowserRouter>
      <Routes>
        {/* Root Routes */}
        <Route path="/" element={<RootLayout />}>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
export default App