import BannerGrid from "../../components/BannerGrid/BannerGrid";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MobilePhonesSlider from "../../components/MobilePhonesSlider/MobilePhonesSlider";
import QuickViewSection from "../../components/QuickViewModal/QuickViewModal";
import SpecialOffersSlider from "../../components/SpecialOffersSlider/SpecialOffersSlider";
import BlogSlider from "../BlogSlider/BlogSlider";
import CategorySlider from "../../components/CategorySlider/StoriesSection";
import FeatureBannerOnFooter from "../../components/FeatureBannerOnFooter/FeatureBannerOnFooter";
const Home = () => {
  return (
    <div className="font-Dana   mx-auto flex flex-col gap-5">
      <CategorySlider />
      <HeroBanner />
      <CategorySlider />
      <SpecialOffersSlider />
      <MobilePhonesSlider />
      <BannerGrid />
      <QuickViewSection />
      <BlogSlider />
      <FeatureBannerOnFooter/>
    </div>
  );
};

export default Home;
