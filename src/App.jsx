import { Route, Routes } from "react-router";
import Home from "./frontend/pages/Home/Home";
import About from "./frontend/pages/About/About";
import BlogList from "./frontend/pages/BlogSlider/BlogSlider";
import MainLayout from "./frontend/components/Layout/MainLayout";
import DetailsProduct from "./frontend/pages/DetailsProduct/DetailsProduct";

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/details-product/:id" element={<DetailsProduct />} />
      </Route>
    </Routes>
  );
};

export default App;
