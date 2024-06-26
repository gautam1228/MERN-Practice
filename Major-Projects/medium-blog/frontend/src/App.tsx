import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import { Blogs } from "./pages/Blogs"
import BlogPage from "./pages/BlogPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/signin" element = { <Signin/> } />
          <Route path = "/signup" element = { <Signup/> } />
          <Route path = "/blog/:id" element = { <BlogPage/> } />
          <Route path = "/blogs" element = { <Blogs/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
