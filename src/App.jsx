import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Hero/Hero';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="bg-dark text-light">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;