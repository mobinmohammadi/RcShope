import React, { useState, useEffect, useRef } from 'react';
import {
  FaTelegram,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaChevronUp,
  FaHeadphones,
  FaCode,
  FaTimes,
  FaPaperPlane,
  FaImage,
} from 'react-icons/fa';
import { MdOutlineVerified } from 'react-icons/md';

const socials = [
  { icon: FaTelegram, href: '#' },
  { icon: FaInstagram, href: '#' },
  { icon: FaLinkedin, href: '#' },
  { icon: FaYoutube, href: '#' },
  { icon: FaTwitter, href: '#' },
];

const quickLinks = ['درباره ما', 'تماس با ما', 'فروشگاه', 'ورود', 'ثبت نام'];
const userLinks = ['حساب کاربری', 'سفارشات', 'لیست پیگیری', 'حریم خصوصی', 'سبد خرید'];

const SupportPanel = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'agent',
      text: 'سلام 👋 خوش آمدید. چطور می‌تونم کمکتون کنم؟',
      time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [imagePreview, setImagePreview] = useState("null");
  const scrollRef = useRef(null);
  const fileRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (!text && !imagePreview) return;

    const now = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: 'user', text, image: imagePreview, time: now },
    ]);

    setInput('');
    setImagePreview(null);
    if (fileRef.current) fileRef.current.value = '';

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: 'agent',
          text: 'پیام شما دریافت شد. همکاران ما به زودی پاسخ می‌دهند 🙏',
          time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:justify-start"
      role="dialog"
      aria-modal="true"
      aria-label="پشتیبانی"
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative w-full sm:w-[400px] md:w-[420px] sm:mx-4 sm:ml-6 md:ml-8
                   bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl
                   flex flex-col overflow-hidden
                   h-[92dvh] sm:h-[600px] sm:max-h-[85vh]
                   animate-[slideUp_0.25s_ease-out]"
      >
        {/* هدر */}
        <div className="bg-[#1b3b6f] text-white p-2.5 sm:p-4 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="relative shrink-0">
              <img src='/admin2.jfif' className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-[#1b3b6f] font-black text-xs sm:text-sm border-2 border-white/20">
                
              </img>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 border-2 border-[#1b3b6f] rounded-full"></span>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-xs sm:text-sm truncate">مبین محمدی — مدیر و برنامه نویس سایت</h3>
              <p className="text-[9px] sm:text-[10px] opacity-80 flex items-center gap-1 truncate">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block shrink-0"></span>
                <span className="truncate">آنلاین • پاسخ در کمتر از ۵ دقیقه</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="بستن"
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
          >
            <FaTimes size={16} />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-2.5 sm:p-4 space-y-2.5 sm:space-y-3 bg-gray-50"
          dir="rtl"
        >
          {messages.map((msg) => {
            const isUser = msg.from === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-end gap-1.5 sm:gap-2 ${isUser ? 'justify-start' : 'justify-end'}`}
              >
                {!isUser && (
                  <img src='/admin2.jfif' className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-[#1b3b6f] font-black text-[9px] sm:text-[10px] shrink-0">
                    
                  </img>
                )}

                <div className={`max-w-[80%] sm:max-w-[75%] flex flex-col gap-1 ${isUser ? 'items-start' : 'items-end'}`}>
                  <div
                    className={`rounded-2xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs leading-5 shadow-sm break-words
                      ${isUser
                        ? 'bg-[#1b3b6f] text-white rounded-bl-sm'
                        : 'bg-white text-gray-700 border border-gray-100 rounded-br-sm'
                      }`}
                  >
                    {msg.image && (
                      <img
                        src={msg.image}
                        alt="پیوست"
                        className="rounded-lg mb-1 max-w-full max-h-32 sm:max-h-40 object-cover"
                      />
                    )}
                    {msg.text && <p className="whitespace-pre-wrap">{msg.text}</p>}
                  </div>
                  <span className="text-[8px] sm:text-[9px] text-gray-400 px-1" dir="ltr">{msg.time}</span>
                </div>

                {isUser && (
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-300 flex items-center justify-center text-white text-[9px] sm:text-[10px] font-bold shrink-0">
                    ش
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* پیش‌نمایش عکس */}
        {imagePreview && (
          <div className="px-2.5 sm:px-3 py-2 bg-white border-t border-gray-100 flex items-center gap-2 shrink-0">
            <div className="relative shrink-0">
              <img src={imagePreview} alt="پیش‌نمایش" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover border border-gray-200" />
              <button
                onClick={() => {
                  setImagePreview(null);
                  if (fileRef.current) fileRef.current.value = '';
                }}
                aria-label="حذف عکس"
                className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] hover:bg-red-600"
              >
                ✕
              </button>
            </div>
            <span className="text-[10px] sm:text-[11px] text-gray-500 truncate">عکس آماده ارسال است</span>
          </div>
        )}

        {/* ورودی */}
        <div className="p-2 sm:p-3 bg-white border-t border-gray-100 flex items-end gap-1.5 shrink-0">
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <button
            onClick={() => fileRef.current?.click()}
            aria-label="پیوست عکس"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-gray-500 hover:text-[#1b3b6f] hover:bg-gray-100 rounded-lg transition-colors shrink-0"
          >
            <FaImage size={15} />
          </button>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="پیام خود را بنویسید..."
            rows={1}
            className="flex-1 resize-none max-h-20 sm:max-h-24 min-h-[38px] sm:min-h-[40px] px-2.5 sm:px-3 py-2 text-[11px] sm:text-sm rounded-lg border border-gray-200 focus:border-[#1b3b6f] focus:ring-1 focus:ring-[#1b3b6f]/20 outline-none transition-colors leading-5"
          />

          <button
            onClick={handleSend}
            disabled={!input.trim() && !imagePreview}
            aria-label="ارسال"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#1b3b6f] text-white rounded-lg hover:bg-[#15203b] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          >
            <FaPaperPlane size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  useEffect(() => {
    if (!isSupportOpen) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsSupportOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [isSupportOpen]);

  return (
    <>
      <footer className="w-full bg-white border-t border-gray-100 font-[Vazirmatn]" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-right gap-8 lg:gap-12">

            <div className="flex flex-col items-center sm:items-start">
              <div className="mb-5 sm:mb-6">
                <h1 className="text-2xl sm:text-3xl font-black text-[#1b3b6f] tracking-tighter">
                  Rc Shope
                </h1>
              </div>

              <p className="text-gray-500 text-xs sm:text-sm leading-6 sm:leading-7 text-center sm:text-justify mb-5 sm:mb-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 flex-wrap">
                {socials.map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-100 rounded-lg text-gray-500 hover:bg-[#1b3b6f] hover:text-white transition-colors duration-300 shrink-0"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-4 sm:mb-6">لینک های سریع</h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-500 text-xs sm:text-sm">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#1b3b6f] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-4 sm:mb-6">ناحیه کاربری</h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-500 text-xs sm:text-sm">
                {userLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#1b3b6f] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-4 sm:mb-6">نمادها</h3>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                <div className="border border-gray-100 rounded-xl p-2 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-white shadow-sm">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-[#ffd700] rounded-lg relative overflow-hidden mb-1 flex items-center justify-center">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#0033cc] rounded-full absolute -top-2 -left-2"></div>
                      <span className="relative z-10 font-bold text-black text-[10px] sm:text-xs">Z</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-gray-800">زرین‌پال</span>
                  </div>
                </div>

                <div className="border border-gray-100 rounded-xl p-2 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-white shadow-sm">
                  <div className="text-center">
                    <MdOutlineVerified size={32} className="mx-auto text-[#b8860b] mb-1 sm:w-10 sm:h-10" />
                    <span className="text-[8px] sm:text-[9px] font-bold text-gray-800 block leading-tight">نماد ملی<br/>ساماندهی</span>
                  </div>
                </div>

                <div className="border border-gray-100 rounded-xl p-2 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-white shadow-sm">
                  <div className="text-center">
                    <div className="w-10 h-8 sm:w-12 sm:h-10 mx-auto mb-1 border-2 border-[#1b3b6f] rounded-md relative">
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full"></div>
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-bold text-gray-800 block leading-tight">نماد اتحادیه<br/>الکترونیکی</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
              <span>تلفن پشتیبانی: <span className="font-bold text-gray-700" dir="ltr">09391177395</span></span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span>ارتباط بیشتر: <span className="font-bold text-gray-700" dir="ltr">09391177395</span></span>
            </div>
            <div>
              <span>ساعت کاری: ۹ تا ۲۱</span>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#1b3b6f] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>

          <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-white text-center">
            <span className="opacity-90">تمامی حقوق برای این وب‌سایت محفوظ است © 1405</span>
            <span className="hidden sm:inline opacity-50">|</span>
            <span className="flex items-center gap-1.5 flex-wrap justify-center">
              طراحی شده با
              <span className="text-yellow-400 animate-pulse">
                <FaCode size={14} />
              </span>
              توسط
              <a href="#" className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors">
                روژ وب
              </a>
            </span>
          </div>
        </div>

        <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-col gap-2 sm:gap-3 z-40">
          <button
            aria-label="بازگشت به بالا"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-[#1b3b6f] rounded-xl flex items-center justify-center hover:bg-blue-200 transition-colors shadow-sm"
          >
            <FaChevronUp size={16} />
          </button>
          <button
            aria-label="پشتیبانی"
            aria-expanded={isSupportOpen}
            onClick={() => setIsSupportOpen(true)}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1b3b6f] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-900 transition-colors"
          >
            <FaHeadphones size={20} />
          </button>
        </div>
      </footer>

      {isSupportOpen && <SupportPanel onClose={() => setIsSupportOpen(false)} />}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Footer;