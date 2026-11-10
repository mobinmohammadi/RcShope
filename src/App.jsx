import { Route, Routes } from "react-router";
import Home from "./frontend/pages/Home/Home";
import About from "./frontend/pages/About/About";
import BlogList from "./frontend/components/Home/BlogSlider/BlogSlider";
import MainLayout from "./frontend/components/Layout/MainLayout";
import DetailsProduct from "./frontend/pages/DetailsProduct/DetailsProduct";
import Category from "./frontend/pages/Category";
import Login from "./frontend/pages/auth/Login";
import Regsiter from "./frontend/pages/auth/Regsiter";
import ProtectedRoute from "./frontend/routes/protectedRoute";
import { useSelector } from "react-redux";
import Dashboard from "./frontend/pages/Dashboard/Dashboard";
import UserDashboardContent from "./frontend/pages/Dashboard/UserDashboardContent";
import Messages from "./frontend/pages/Dashboard/Messages";
import Comments from "./frontend/pages/Dashboard/Comments";
import Addresses from "./frontend/pages/Dashboard/Addresses";
import Favorites from "./frontend/pages/Dashboard/Favorites";
import AccountDetails from "./frontend/pages/Dashboard/AccountDetails";
import OrdersHistory from "./frontend/pages/Dashboard/OrdersHistory";

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
