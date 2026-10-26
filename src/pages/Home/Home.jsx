
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import MobilePhonesSlider from '../../components/MobilePhonesSlider/MobilePhonesSlider';
import QuickViewSection from '../../components/QuickViewModal/QuickViewModal';
import SpecialOffersSlider from '../../components/SpecialOffersSlider/SpecialOffersSlider';
import BlogSlider from '../BlogSlider/BlogSlider';
import CategorySlider from './../../components/CategorySlider/CategorySlider';
const Home = () => {
    return (
        <div className="font-Dana   mx-auto py-4 flex flex-col gap-5" >
            <CategorySlider />
                  <HeroBanner />
            <CategorySlider />
            <SpecialOffersSlider/>
            <MobilePhonesSlider/>
            <QuickViewSection/>
            <BlogSlider/>


        </div>
    )
}

export default Home