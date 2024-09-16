import BestSellers from './BestSellers';
import CoyuAssuranceSlider from './CoyuAssurance';
import Email from './Email';
import Footer from './Footer';
import FreshDrops from './FreshDrops';
import HeroSection from './Hero-section';
import Instagram from './Instagram';
import NewDrops from './NewDrops';
import OurBrands from './OurBrands';
import OurStore from './OurStores';
import ShopByCategories from './ShopByCategories';
import ShopByOccasions from './ShopByOccasions';
import ShopFromStore from './ShopFromStore';
import StoreEvents from './StoreEvents';
import WhatsApp from './WhatsApp';

const Home = () => {
   return (
      <div className="h-fit  ">
         <HeroSection />
         <FreshDrops />
         <NewDrops />
         <CoyuAssuranceSlider />
         <ShopByCategories />
         <ShopFromStore />
         <ShopByOccasions />
         <OurBrands />
         <BestSellers />
         <OurStore />
         <StoreEvents />
         <Instagram />
         <WhatsApp />
         <Email />
         <Footer />
      </div>
   );
};

export default Home;
