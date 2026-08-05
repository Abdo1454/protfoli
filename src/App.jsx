import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import './index.css';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="bg-section">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;