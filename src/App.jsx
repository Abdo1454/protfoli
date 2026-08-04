import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import './index.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="bg-section">
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;