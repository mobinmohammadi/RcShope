import React from "react";

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#1e2b4d]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const AddressBookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
  </svg>
);

const addresses = [
  {
    id: 1,
    title: "آدرس بدون جزئیات",
    tag: "آدرس فروش‌تخصصی",
    phone: "۰۹۱۲۰۰۰۰۰۰۰",
    name: "گیرنده",
    isDefault: false,
  },
];

const Addresses = () => {
  return (
    <div className="w-full flex flex-col gap-6 text-sm" dir="rtl">
      
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-2 text-[#1e2b4d] hover:text-[#15203b] transition-colors cursor-pointer">
          <PlusIcon />
          <span className="text-xs font-bold">افزودن آدرس جدید</span>
        </button>
        <h2 className="text-lg font-extrabold text-gray-800">آدرس‌ها</h2>
      </div>

      <div className="w-full min-h-[400px] bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
        <div className="flex flex-col gap-3">
          {addresses.map((address) => (
            <div 
              key={address.id} 
              className={`flex items-center justify-between p-4 rounded-xl border transition-colors cursor-pointer
                ${address.isDefault ? "border-[#1e2b4d] bg-blue-50/30" : "border-gray-200 hover:border-gray-300"}
              `}
            >
              
              <div className="flex flex-col gap-1 w-1/4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-800">{address.title}</span>
                  <span className="text-[10px] text-gray-500">{address.phone}</span>
                </div>
                <span className="text-[10px] text-gray-400">{address.name}</span>
              </div>

              <div className="flex items-center gap-3 w-3/4">
                <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded-md">
                  {address.tag}
                </span>
                <div className="flex-1"></div>
                <AddressBookIcon />
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Addresses;