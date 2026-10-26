import { Route, Routes } from "react-router"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import BlogList from "./pages/BlogList/BlogList"
import MainLayout from "./components/Layout/MainLayout"

const App = () => {
  return (

    <Routes>

      <Route path="/" element={<MainLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogList />} />
      </Route>
    </Routes>)
}

export default App