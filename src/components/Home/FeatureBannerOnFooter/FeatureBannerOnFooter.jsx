// ایمپورت آیکون‌های خطی از کتابخانه React Icons
import { 
  LuRotateCcw, 
  LuCreditCard, 
  LuUserCheck, 
  LuCircleCheck, 
  LuTruck 
} from 'react-icons/lu';

// دیتای کارت‌ها
const featuresData = [
  {
    id: 1,
    title: '۱ سال ضمانت',
    description: 'بازگشت رایگان کالا',
    icon: LuRotateCcw,
  },
  {
    id: 2,
    title: 'پرداخت امن',
    description: 'درگاه پرداخت امن',
    icon: LuCreditCard,
  },
  {
    id: 3,
    title: 'رضایت مشتری',
    description: 'پشتیبانی تا رضایت کامل شما',
    icon: LuUserCheck,
  },
  {
    id: 4,
    title: 'بهترین کیفیت',
    description: 'تضمین اصالت برند',
    icon: LuCircleCheck,
  },
  {
    id: 5,
    title: 'ارسال رایگان',
    description: 'برای خرید بالای یک میلیون تومان',
    icon: LuTruck,
  },
];

const FeatureBannerOnFooter = () => {
  return (
    // کانتینر اصلی با پس‌زمینه روشن
    <div className="w-full bg-[#f8fafc] py-20 px-4 font-Dana" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* گرید ریسپانسیو: ۱ ستون در موبایل، ۲ در تبلت، ۵ در دسکتاپ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {featuresData.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="relative bg-white rounded-[2rem] p-6 pt-14 flex flex-col items-center text-center shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-all duration-300 mt-8 group"
              >
                {/* باکس آیکون: بیرون‌زده از بالای کارت */}
                <div className="absolute -top-8 bg-white rounded-full p-2.5 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="text-[#1b3b6f] bg-white flex items-center justify-center p-1 rounded-full">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                </div>

                {/* عنوان کارت */}
                <h3 className="text-gray-900 font-extrabold text-[17px] mb-3 mt-2">
                  {feature.title}
                </h3>
                
                {/* توضیحات کارت */}
                <p className="text-gray-500 text-[13px] leading-relaxed px-2">
                  {feature.description}
                </p>
              </div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
};

export default FeatureBannerOnFooter;