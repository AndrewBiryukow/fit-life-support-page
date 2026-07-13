
import Navbar from './components/Navbar';
import Carousel from './components/Carousel.tsx';
import Services from './components/Services';
import SoftwareDevelopment from './components/SoftwareDevelopment';
import AppServices from './components/AppServices';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Carousel />
        <Services />
        <SoftwareDevelopment />
        <AppServices />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
