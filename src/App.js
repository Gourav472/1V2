import './App.css';
import Header from './components/Header';
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
import BackToTop from './components/BackToTop';
import PreLoader from './components/PreLoader';
function App() {
  return (
    <div className=' overflow-hidden max-w-[1920px] mx-auto'>
      <Header />
      <LogoSlider />
      <About />
      <Featured />
      <OurImpact />
      <Testimonials />
      <Faq />
      <Newsletter />
      <Footer />
      <BackToTop />
      <PreLoader />
    </div>
  );
}
export default App;
