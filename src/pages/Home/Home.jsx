import BannerGrid from "../../components/Home/BannerGrid/BannerGrid";
import HeroBanner from "../../components/Home/HeroBanner/HeroBanner";
import MobilePhonesSlider from "../../components/Home/MobilePhonesSlider/MobilePhonesSlider";
import QuickViewSection from "../../components/Home/QuickViewModal/QuickViewModal";
// import SpecialOffersSlider from "../../components/SpecialOffersSlider/SpecialOffersSlider";
import BlogSlider from "../../components/Home/BlogSlider/BlogSlider";
import CategorySlider from "../../components/Home/CategorySlider/StoriesSection";
import FeatureBannerOnFooter from "../../components/Home/FeatureBannerOnFooter/FeatureBannerOnFooter";
import LaptopSection from "../../components/Home/LaptopSection/LaptopSection";
import ProductHotAndFreeSeller from "../../components/Home/ProductHotAndFreeSeller/ProductHotAndFreeSeller";
import CategoryShowcase from "../../components/Home/CategoryShowcase/CategoryShowcase";
const Home = () => {
  return (
    <div className="font-Dana container  mx-auto flex flex-col gap-5">
      <CategorySlider />
      <HeroBanner />
      <CategorySlider />
      <MobilePhonesSlider />
      <BannerGrid />
      <LaptopSection/>
      <QuickViewSection />
      <ProductHotAndFreeSeller/>
      <CategoryShowcase/>
      <BlogSlider />
      <FeatureBannerOnFooter/>
    </div>
  );
};

export default Home;
