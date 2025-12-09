import { Navbar } from './Pages/Navbar';
import { Hero } from './Pages/Hero';
import { About } from './Pages/About';
import { Projects } from './Pages/Projects';
import { Contact } from './Pages/Contact';
import { Footer } from './Pages/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
