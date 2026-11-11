import FilterSidebar from "../components/Category/FilterSidebar/FilterSidebar"
import ProductCart from "../components/Category/ProductCart/ProductCart"
import RelatedProducts from "../components/detailsProduct/RelatedProducts/RelatedProducts";
import SortBar from "../components/Category/SortBar"


const amazingProducts = [
  {
    id: 1,
    title: "گوشی موبایل اپل مدل iPhone Duo ظرفیت 256 گیگابایت",
    image: "https://digital.pixaa.ir/wp-content/uploads/2026/09/Verizon-iPhone-Duo-256GB-Night-Sky-300x300.avif",
    alt: "iPhone Duo",
    href: "/details-product/2",
    oldPrice: "900,000,000",
    price: "840,000,000",
    discount: "%7",
  },
  {
    id: 2,
    title: "اسپیکر بلوتوثی قابل حمل جی بی ال مدل Charge 6",
    image: "https://digital.pixaa.ir/wp-content/uploads/2026/03/اسپیکر-بلوتوثی-قابل-حمل-جی-بی-ال-مدل-Charge-6-ارتشی-300x300.webp",
    alt: "اسپیکر JBL",
    href: "/details-product/2",
    oldPrice: "21,200,000",
    price: "20,400,000",
    discount: "%4",
  },
  {
    id: 3,
    title: "هارد اکسترنال 1 ترابایت ای دیتا مدل HD770G",
    image: "/3.webp",
    alt: "هارد اکسترنال",
    href: "/details-product/2",
    oldPrice: "13,500,000",
    price: "12,350,000",
    discount: "%9",
  },
  {
    id: 4,
    title: "دسته بازی پلی استیشن 5 سونی مدل DualSense",
    image: "/3.webp",
    alt: "دسته بازی PS5",
    href: "/details-product/2",
    oldPrice: "14,300,000",
    price: "13,860,000",
    discount: "%4",
    rating: 3,
  },
  {
    id: 5,
    title: "استیکر لپ تاپ پیکسل مدل نقشه ایران سنتی",
    image: "/3.webp",
    alt: "استیکر لپ تاپ",
    href: "/details-product/2",
    price: "60,000",
  }
];

const Category = () => {
  return (
    <div className="container mx-auto mt-5">
        <div className=" flex flex-wrap">
            <div className="w-3/12">
            <FilterSidebar/>
            </div>
            <div className="w-9/12">
            <SortBar/>
            <div className="mt-5 grid grid-cols-4 gap-2">
                {amazingProducts.map(item => (

                <ProductCart product={item}/>
                ))}
            </div>
            </div>
        </div>

    </div>
  )
}

export default Category