import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import {
  messageClear,
  user_register,
} from "../../../store/Reducers/authReducers";
import toast from "react-hot-toast";

const UserIcon = () => (
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
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);

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

const PhoneIcon = () => (
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
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
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

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { successMessage, errorMessage, loader } = useSelector(
    (state) => state.auth,
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const password = watch("password");
  const dispatch = useDispatch();

  const onSubmit = ({ confirmPassword, ...data }) => {
    // confirmPassword را به بک‌اند نمی‌فرستیم
    dispatch(user_register(data));
  };
  const navigate = useNavigate()

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/profile")
      
      reset();
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage, dispatch, reset]);

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-white font-Dana to-blue-50 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4">
            <UserIcon />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
            ایجاد حساب کاربری
          </h2>
          <p className="text-sm text-gray-500">
            لطفاً اطلاعات خود را برای ثبت‌نام وارد کنید.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" dir="rtl">
          {/* نام و نام خانوادگی */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              نام و نام خانوادگی
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <UserIcon />
              </div>
              <input
                type="text"
                {...register("fullName", {
                  required: "وارد کردن نام و نام خانوادگی الزامی است.",
                  minLength: {
                    value: 3,
                    message: "نام باید حداقل ۳ حرف باشد.",
                  },
                })}
                className={`w-full pr-10 pl-3 py-3 bg-gray-50 border rounded-xl text-sm outline-none transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-100
                  ${errors.fullName ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-blue-400"}`}
                placeholder="مثلاً: علی محمدی"
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1.5">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* ایمیل */}
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

          {/* شماره تلفن */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              شماره تلفن
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <PhoneIcon />
              </div>
              <input
                type="tel"
                inputMode="tel"
                {...register("phone", {
                  required: "وارد کردن شماره تلفن الزامی است.",
                  pattern: {
                    value: /^(\+98|0)?9\d{9}$/,
                    message: "فرمت شماره موبایل صحیح نیست.",
                  },
                })}
                className={`w-full pr-10 pl-3 py-3 bg-gray-50 border rounded-xl text-sm outline-none transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-100 text-right
                  ${errors.phone ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-blue-400"}`}
                placeholder="09123456789"
                dir="ltr"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1.5">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* رمز عبور */}
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
                  minLength: {
                    value: 8,
                    message: "رمز عبور باید حداقل ۸ کاراکتر باشد.",
                  },
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

          {/* تکرار رمز عبور */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              تکرار رمز عبور
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <LockIcon />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "تکرار رمز عبور الزامی است.",
                  validate: (value) =>
                    value === password || "رمز عبور و تکرار آن یکسان نیستند.",
                })}
                className={`w-full pr-10 pl-10 py-3 bg-gray-50 border rounded-xl text-sm outline-none transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-100 text-right
                  ${errors.confirmPassword ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-blue-400"}`}
                placeholder="••••••••"
                dir="ltr"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer"
              >
                {showConfirmPassword ? <EyeSlashIcon /> : <EyeIcon />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1.5">
                {errors.confirmPassword.message}
              </p>
            )}
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
                در حال ثبت‌نام...
              </>
            ) : (
              "ثبت‌نام"
            )}
          </button>

          <p className="text-center text-sm text-gray-500 mt-6">
            قبلاً ثبت‌نام کرده‌اید؟{" "}
            <Link
              to="/login"
              className="text-blue-600 font-bold hover:underline"
            >
              وارد شوید
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;