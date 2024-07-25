import './App.css';
import HeaderSection from './components/HeaderSection';
import LogoSlider from './components/LogoSlider';
import About from './components/About';
import Featured from './components/Featured';
import OurImpact from './components/OurImpact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div className=' overflow-hidden'>
      <HeaderSection />
      <LogoSlider />
      <About />
      <Featured />
      <OurImpact />
      <Testimonials />
    </div>
  );
}

export default App;
