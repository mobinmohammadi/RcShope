import { Link, Outlet, useLocation } from "react-router";
import {
  AccountIcon,
  AddressIcon,
  CommentsIcon,
  DashboardIcon,
  FavoritesIcon,
  MessagesIcon,
  OrdersIcon,
} from "./svg";
import { ChevronLeftIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_user_info } from "../../../store/Reducers/authReducers";

const menuItems = [
  {
    id: "dashboard",
    label: "داشبورد",
    icon: <DashboardIcon />,
    href: "/profile",
  },
  {
    id: "orders",
    label: "سفارش‌ها",
    icon: <OrdersIcon />,
    href: "/profile/orders-history",
  },
  {
    id: "messages",
    label: "پیام‌ها",
    icon: <MessagesIcon />,
    href: "/profile/messages",
  },
  {
    id: "favorites",
    label: "علاقه‌مندی‌ها",
    icon: <FavoritesIcon />,
    href: "/profile/favorites",
  },
  {
    id: "addresses",
    label: "آدرس‌ها",
    icon: <AddressIcon />,
    href: "/profile/addresses",
  },
  {
    id: "comments",
    label: "دیدگاه‌ها",
    icon: <CommentsIcon />,
    href: "/profile/comments",
  },
  {
    id: "account",
    label: "اطلاعات حساب کاربری",
    icon: <AccountIcon />,
    active: true,
    href: "/profile/account-details",
  },
];

const UserSidebar = () => {
  const location = useLocation();
  console.log(location);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(get_user_info());
    console.log(userInfo);
  }, []);


  return (
    <div className="w-full bg-white rounded-2xl font-Dana shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 p-6 flex flex-col items-center">
      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden pt-4 flex items-center justify-center mb-3">
        <img src={userInfo.image} className="rounded-full font-bold  text-gray-800 mb-1"/>
        </div>
        <p className="text-xs text-gray-500 font-mono">
          {userInfo.fullName}
        </p>
      </div>

      <div className="w-full flex flex-col gap-1.5">
        {menuItems.map((item) => (
          <Link
            to={item.href}
            key={item.id}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors cursor-pointer group
              ${
                location.pathname === item.href
                  ? "bg-[#e6edf7] text-[#2c3e6b] font-bold"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              }
            `}
          >
            <div className="flex items-center gap-3">
              <span
                className={`${item.active ? "text-[#2c3e6b]" : "text-gray-400 group-hover:text-gray-600"}`}
              >
                {item.icon}
              </span>
              <span className="text-sm">{item.label}</span>
            </div>

            {item.active && (
              <span className="text-[#2c3e6b]">
                <ChevronLeftIcon />
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-3/12">
          <UserSidebar />
        </div>

        <div className="w-full lg:w-9/12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
