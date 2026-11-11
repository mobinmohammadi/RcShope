import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { messageClear, user_login } from "../../store/Reducers/authReducers";
import toast from "react-hot-toast";

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-gray-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-gray-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
);

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-gray-400 hover:text-gray-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const EyeSlashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-gray-400 hover:text-gray-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
    />
  </svg>
);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const dispatch = useDispatch();
  const { errorMessage, successMessage ,loader } = useSelector((state) => state.auth);
  const onSubmit = async (data) => {
    dispatch(user_login(data));
  };
  const navigate = useNavigate()
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      navigate("/profile")
      dispatch(messageClear());
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      console.log("dj");
      
      dispatch(messageClear());
    }
  }, [errorMessage]);

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 p-4 font-Dana">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4">
            <LockIcon />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
            خوش آمدید
          </h2>
          <p className="text-sm text-gray-500">
            برای ادامه، وارد حساب کاربری خود شوید.
          </p>
        </div>

        {isSuccess && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            ورود با موفقیت انجام شد!
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" dir="rtl">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              ایمیل
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <EmailIcon />
              </div>
              <input
                type="email"
                {...register("email", {
                  required: "وارد کردن ایمیل الزامی است.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "فرمت ایمیل صحیح نیست.",
                  },
                })}
                className={`w-full pr-10 pl-3 py-3 bg-gray-50 border rounded-xl text-sm outline-none transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-100 text-right
                  ${errors.email ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-blue-400"}`}
                placeholder="example@email.com"
                dir="ltr"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1.5">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* فیلد رمز عبور */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              رمز عبور
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <LockIcon />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "وارد کردن رمز عبور الزامی است.",
                })}
                className={`w-full pr-10 pl-10 py-3 bg-gray-50 border rounded-xl text-sm outline-none transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-100 text-right
                  ${errors.password ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-blue-400"}`}
                placeholder="••••••••"
                dir="ltr"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer"
              >
                {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1.5">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm mt-2">
            <label className="flex items-center gap-2 cursor-pointer text-gray-600">
              <input
                type="checkbox"
                {...register("rememberMe")}
                className="w-4 h-4 rounded border-gray-300 text-[#2c3e6b] focus:ring-[#2c3e6b] cursor-pointer"
              />
              مرا به خاطر بسپار
            </label>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              رمز عبور را فراموش کرده‌اید؟
            </a>
          </div>

          <button
            type="submit"
            disabled={loader}
            className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-white text-sm font-bold transition-all duration-300 mt-6
              ${loader ? "bg-blue-400 cursor-not-allowed" : "bg-[#2c3e6b] hover:bg-[#1e2b4d] shadow-lg hover:shadow-xl cursor-pointer"}`}
          >
            {loader ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                در حال ورود...
              </>
            ) : (
              "ورود به حساب"
            )}
          </button>

          <p className="text-center text-sm text-gray-500 mt-6">
            حساب کاربری ندارید؟{" "}
            <Link
              to="/register"
              href="#"
              className="text-blue-600 font-bold hover:underline"
            >
              ثبت‌نام کنید
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
