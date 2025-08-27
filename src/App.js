import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/header/Header';
import Home from './components/home/home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <ThemeProvider>
      <Header />

      <main className='main'>
        <Home />
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        {/* <Testimonials/> */}
        <Contact/>

      </main>

        <Footer />
        <ScrollUp />
    </ThemeProvider>
  );
}

export default App;
