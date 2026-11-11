import React from "react";

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const personalInfo = [
  { id: 1, label: "نام و نام خانوادگی", value: "demo", isEdit: true },
  { id: 2, label: "کد ملی", value: "ثبت نشده", isEdit: false, isMuted: true },
  { id: 3, label: "شماره موبایل", value: "۰۹۱۲۰۰۰۰۰۰۰", isEdit: true, dir: "ltr" },
  { id: 4, label: "ایمیل", value: "demo@pixaa.ir", isEdit: true, dir: "ltr" },
  { id: 5, label: "رمز عبور", value: "••••••••", isEdit: true, dir: "ltr" },
  { id: 6, label: "شماره کارت", value: "ثبت نشده", isEdit: false, isMuted: true },
  { id: 7, label: "تاریخ تولد", value: "ثبت نشده", isEdit: false, isMuted: true },
  { id: 8, label: "شماره شبا", value: "ثبت نشده", isEdit: false, isMuted: true },
];

const PersonalInfo = () => {
  return (
    <div className="w-full flex flex-col gap-6 text-sm" dir="rtl">
      
      <div className="text-right">
        <h2 className="text-lg font-extrabold text-gray-800 mb-1">مشخصات فردی</h2>
      </div>

      <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {personalInfo.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex items-center justify-between p-5 border-b border-gray-100 ${
                index % 2 === 0 ? "md:border-l" : ""
              } ${index >= personalInfo.length - 2 ? "border-b-0" : ""}`}
            >
              
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 w-24">{item.label}</span>
                <span 
                  className={`text-xs font-bold ${item.isMuted ? "text-red-500" : "text-gray-700"}`}
                  dir={item.dir || "rtl"}
                >
                  {item.value}
                </span>
              </div>

              <div>
                {item.isEdit ? <EditIcon /> : <PlusIcon />}
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PersonalInfo;