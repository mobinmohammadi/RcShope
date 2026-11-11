import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import BlogList from "./components/Home/BlogSlider/BlogSlider";
import MainLayout from "./components/Layout/MainLayout";
import DetailsProduct from "./pages/DetailsProduct/DetailsProduct";
import Category from "./pages/Category";
import Login from "./pages/auth/Login";
import Regsiter from "./pages/auth/Regsiter";
import ProtectedRoute from "./routes/protectedRoute";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserDashboardContent from "./pages/Dashboard/UserDashboardContent";
import Messages from "./pages/Dashboard/Messages";
import Comments from "./pages/Dashboard/Comments";
import Addresses from "./pages/Dashboard/Addresses";
import Favorites from "./pages/Dashboard/Favorites";
import AccountDetails from "./pages/Dashboard/AccountDetails";
import OrdersHistory from "./pages/Dashboard/OrdersHistory";

const App = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/category" element={<Category />} />
        <Route path="/details-product/:id" element={<DetailsProduct />} />
        <Route element={<ProtectedRoute token={token} />}>
          <Route path="profile" element={<Dashboard />}>
            <Route path="/profile" element={<UserDashboardContent />} />
            <Route path="/profile/messages" element={<Messages />} />
            <Route path="/profile/comments" element={<Comments />} />
            <Route path="/profile/addresses" element={<Addresses />} />
            <Route path="/profile/favorites" element={<Favorites />} />
            <Route path="/profile/orders-history" element={<OrdersHistory />} />
            <Route path="/profile/account-details" element={<AccountDetails />} />
          </Route>
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Regsiter />} />
    </Routes>
  );
};

export default App;
