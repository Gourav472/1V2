import './App.css';
import HeaderSection from './components/HeaderSection';
import LogoSlider from './components/LogoSlider';
import About from './components/About';
import Featured from './components/Featured';
import OurImpact from './components/OurImpact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BacktoTop from './components/BacktoTop';
import PreLoader from './components/PreLoader';
function App() {
  return (
    <div className=' overflow-hidden max-w-[1920px] mx-auto'>
      <HeaderSection />
      <LogoSlider />
      <About />
      <Featured />
      <OurImpact />
      <Testimonials />
      <Faq />
      <Newsletter />
      <Footer />
      <BacktoTop />
      <PreLoader />
    </div>
  );
}

export default App;
