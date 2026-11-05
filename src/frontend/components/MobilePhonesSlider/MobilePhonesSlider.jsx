import SpecialOffersSlider from './SpecialOffersSlider';

const amazingProducts = [
  {
    id: 1,
    title: "گوشی موبایل اپل مدل iPhone Duo ظرفیت 256 گیگابایت",
    image: "https://digital.pixaa.ir/wp-content/uploads/2026/09/Verizon-iPhone-Duo-256GB-Night-Sky-300x300.avif",
    alt: "iPhone Duo",
    href: "/product/iphone-duo",
    oldPrice: "900,000,000",
    price: "840,000,000",
    discount: "%7",
  },
  {
    id: 2,
    title: "اسپیکر بلوتوثی قابل حمل جی بی ال مدل Charge 6",
    image: "https://digital.pixaa.ir/wp-content/uploads/2026/03/اسپیکر-بلوتوثی-قابل-حمل-جی-بی-ال-مدل-Charge-6-ارتشی-300x300.webp",
    alt: "اسپیکر JBL",
    href: "/product/jbl-charge-6",
    oldPrice: "21,200,000",
    price: "20,400,000",
    discount: "%4",
  },
  {
    id: 3,
    title: "هارد اکسترنال 1 ترابایت ای دیتا مدل HD770G",
    image: "https://digital.pixaa.ir/wp-content/uploads/2026/03/هارد-اکسترنال-1-ترابایت-ای-دیتا-مدل-HD770G-مشکی-300x300.webp",
    alt: "هارد اکسترنال",
    href: "/product/hard-hd770g",
    oldPrice: "13,500,000",
    price: "12,350,000",
    discount: "%9",
  },
  {
    id: 4,
    title: "دسته بازی پلی استیشن 5 سونی مدل DualSense",
    image: "https://digital.pixaa.ir/wp-content/uploads/2026/03/دسته-بازی-پلی-استیشن-5-سونی-مدل-DualSense-سری-CFI-ZCT1W-300x300.webp",
    alt: "دسته بازی PS5",
    href: "/product/ps5-dualsense",
    oldPrice: "14,300,000",
    price: "13,860,000",
    discount: "%4",
    rating: 3,
  },
  {
    id: 5,
    title: "استیکر لپ تاپ پیکسل مدل نقشه ایران سنتی",
    image: "https://digital.pixaa.ir/wp-content/uploads/2026/03/استیکر-لپ-تاپ-پیکسل-مدل-نقشه-ایران-سنتی-300x300.webp",
    alt: "استیکر لپ تاپ",
    href: "/product/sticker-iran",
    price: "60,000",
  }
];

export default function Home() {
  return (
    <div>
      <SpecialOffersSlider products={amazingProducts} />
    </div>
  );
}