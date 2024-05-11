import Div from './components/Div';
import Menu from './components/Menu';
import Box from './components/Box';
import Numbers from './components/Numbers';
import Header from './components/Header';
import Hero from './components/Hero';
import Pro from './components/Pro';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import './index.css';


function App() {
  return (
    <div className="App overflow-x-hidden">
      <Div />
      <Menu />
      <Box />
      <Numbers />
      <Header />
      <Hero />
      <Pro />
      <Benefits />
      <Testimonials />
      <Newsletter />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
